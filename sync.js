/**
 * DentalSync — Firebase 跨裝置同步模組
 * 同名使用者 = 自動同步，last-write-wins
 * 相容新舊路徑：新版寫 users/{id}/，舊版寫 users/{id}/data/
 */
(function () {
  "use strict";

  var FIREBASE_CONFIG = {
    apiKey: "AIzaSyACFnTGWEuhUp0htnMWe8i7XbHiAWjgoAc",
    authDomain: "dental-exam-sync.firebaseapp.com",
    databaseURL: "https://dental-exam-sync-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "dental-exam-sync",
    storageBucket: "dental-exam-sync.firebasestorage.app",
    messagingSenderId: "136556858599",
    appId: "1:136556858599:web:de382cbbef5099d63e2642",
  };

  var SYNC_KEYS = ["wrongbook_state", "daily_log", "wrongbook_lastpos"];

  var _db = null;
  var _userId = null;
  var _listeners = [];
  var _initialized = false;
  var _syncing = false;

  function isConfigured() {
    return FIREBASE_CONFIG.apiKey !== "YOUR_API_KEY" && !!FIREBASE_CONFIG.databaseURL;
  }

  function userRef() { return _db.ref("users/" + _userId); }
  function userDataRef() { return _db.ref("users/" + _userId + "/data"); }

  function isSyncKey(key) {
    if (!_userId) return false;
    return SYNC_KEYS.some(function(sk) { return key === _userId + "_" + sk; });
  }

  // ══════════════════════════════════════════

  /** Push to BOTH new path and old data/ path for backward compat */
  function pushToFirebase() {
    if (!_db || !_userId) return Promise.resolve();
    var payload = { _ts: Date.now() };
    var oldPayload = {};
    SYNC_KEYS.forEach(function(sk) {
      var val = localStorage.getItem(_userId + "_" + sk);
      if (val !== null) {
        payload[sk] = val;
        oldPayload[sk] = val;
      }
    });
    _syncing = true;
    // Write to both paths
    return Promise.all([
      userRef().update(payload),
      userDataRef().update(oldPayload)
    ])
    .catch(function(err) { console.error("[Sync] push error:", err); })
    .finally(function() { _syncing = false; });
  }

  /** Read from both paths, pick whichever has data */
  function readRemote() {
    return userRef().once("value").then(function(snap) {
      var root = snap.val() || {};
      var result = {};
      // Try new path first (root level)
      SYNC_KEYS.forEach(function(sk) {
        if (root[sk] !== undefined && root[sk] !== null) {
          result[sk] = root[sk];
        } else if (root.data && root.data[sk] !== undefined && root.data[sk] !== null) {
          // Fall back to old data/ path
          result[sk] = root.data[sk];
        }
      });
      result._ts = root._ts || 0;
      return result;
    });
  }

  /** On startup: compare timestamps, newer wins */
  function syncOnLoad() {
    if (!_db || !_userId) return Promise.resolve();
    _syncing = true;
    return readRemote().then(function(remote) {
      var remoteTs = remote._ts || 0;
      var localTs = parseInt(localStorage.getItem(_userId + "__ts") || "0");

      if (remoteTs > localTs) {
        SYNC_KEYS.forEach(function(sk) {
          if (remote[sk] !== undefined) {
            localStorage.setItem(_userId + "_" + sk, remote[sk]);
          }
        });
        localStorage.setItem(_userId + "__ts", String(remoteTs));
      } else {
        return pushToFirebase().then(function() {
          localStorage.setItem(_userId + "__ts", String(Date.now()));
        });
      }
    })
    .catch(function(err) { console.error("[Sync] syncOnLoad error:", err); })
    .finally(function() { _syncing = false; });
  }

  /** Listen for changes on BOTH paths */
  function startListening() {
    stopListening();
    if (!_db || !_userId) return;

    function handleUpdate(snap) {
      if (_syncing) return;
      var val = snap.val();
      if (!val || typeof val !== 'object') return;

      // Check if this is a root-level update (has _ts) or data/ update
      var hasData = false;
      var source = val;
      var remoteTs = val._ts || 0;

      // If no _ts, it's from old data/ path — treat as new
      if (!remoteTs) remoteTs = Date.now();

      var localTs = parseInt(localStorage.getItem(_userId + "__ts") || "0");
      if (remoteTs <= localTs) return;

      _syncing = true;
      SYNC_KEYS.forEach(function(sk) {
        if (source[sk] !== undefined && source[sk] !== null) {
          localStorage.setItem(_userId + "_" + sk, source[sk]);
        }
      });
      localStorage.setItem(_userId + "__ts", String(remoteTs));
      _syncing = false;
    }

    // Listen on root (new path)
    var firstRoot = true;
    var unsubRoot = userRef().on("value", function(snap) {
      if (firstRoot) { firstRoot = false; return; }
      handleUpdate(snap);
    });
    _listeners.push(function() { userRef().off("value", unsubRoot); });

    // Also listen on data/ (old path from phone)
    var firstData = true;
    var unsubData = userDataRef().on("value", function(snap) {
      if (firstData) { firstData = false; return; }
      if (_syncing) return;
      var val = snap.val();
      if (!val || typeof val !== 'object') return;
      // Old path doesn't have _ts, always apply if changed
      _syncing = true;
      var changed = false;
      SYNC_KEYS.forEach(function(sk) {
        if (val[sk] !== undefined && val[sk] !== null) {
          var cur = localStorage.getItem(_userId + "_" + sk);
          if (cur !== val[sk]) {
            localStorage.setItem(_userId + "_" + sk, val[sk]);
            changed = true;
          }
        }
      });
      if (changed) {
        localStorage.setItem(_userId + "__ts", String(Date.now()));
      }
      _syncing = false;
    });
    _listeners.push(function() { userDataRef().off("value", unsubData); });
  }

  function stopListening() {
    _listeners.forEach(function(fn) { fn(); });
    _listeners = [];
  }

  function onLocalChange(e) {
    if (_syncing || !_db || !_userId) return;
    if (!e.key || !isSyncKey(e.key)) return;
    localStorage.setItem(_userId + "__ts", String(Date.now()));
    pushToFirebase();
  }

  /** Auto-push: check every 3 seconds if local data changed, push if so */
  var _lastPushed = "";
  function startAutoSync() {
    setInterval(function() {
      if (!_db || !_userId || _syncing) return;
      var cur = localStorage.getItem(_userId + "_wrongbook_state") || "";
      if (cur && cur !== _lastPushed) {
        _lastPushed = cur;
        pushToFirebase();
      }
    }, 3000);
  }

  // ══════════════════════════════════════════

  var DentalSync = {
    init: function () {
      if (_initialized) return Promise.resolve();
      _initialized = true;
      if (!isConfigured()) return Promise.resolve();

      try {
        if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
        _db = firebase.database();

        var origSetItem = localStorage.setItem.bind(localStorage);
        localStorage.setItem = function (key, value) {
          origSetItem(key, value);
          if (isSyncKey(key) && !_syncing) {
            onLocalChange({ key: key, newValue: value });
          }
        };

        _userId = localStorage.getItem("dental_cur_user");
        if (_userId) {
          _lastPushed = localStorage.getItem(_userId + "_wrongbook_state") || "";
          startAutoSync();
          return syncOnLoad().then(function() { startListening(); });
        }
      } catch (err) {
        console.error("[Sync] init error:", err);
      }
      return Promise.resolve();
    },

    switchUser: function (userId) {
      stopListening();
      _userId = userId;
      if (_db && _userId) {
        return syncOnLoad().then(function() { startListening(); });
      }
      return Promise.resolve();
    },

    pushAll: pushToFirebase,

    getStatus: function () {
      return {
        connected: !!(_db && _userId),
        userId: _userId,
        configured: isConfigured(),
      };
    },

    renderUI: function (containerSelector) {
      var container =
        typeof containerSelector === "string"
          ? document.querySelector(containerSelector)
          : containerSelector;
      if (!container) return;
      var status = this.getStatus();
      if (status.connected) {
        container.innerHTML = '<span class="sync-btn" style="color:#16a34a;border-color:#bbf7d0">🟢 同步中</span>';
      } else {
        container.innerHTML = '';
      }
    },
  };

  window.DentalSync = DentalSync;
})();
