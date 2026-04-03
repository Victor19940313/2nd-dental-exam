/**
 * DentalSync — Firebase 跨裝置同步模組
 * 同名使用者 = 自動同步，last-write-wins（以時間戳判斷新舊）
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

  function userRef() {
    return _db.ref("users/" + _userId);
  }

  function isSyncKey(key) {
    if (!_userId) return false;
    return SYNC_KEYS.some(function(sk) { return key === _userId + "_" + sk; });
  }

  // ══════════════════════════════════════════
  // Core: timestamp-based last-write-wins
  // ══════════════════════════════════════════

  /** Push local data + timestamp to Firebase */
  function pushToFirebase() {
    if (!_db || !_userId) return Promise.resolve();
    var payload = { _ts: Date.now() };
    SYNC_KEYS.forEach(function(sk) {
      var val = localStorage.getItem(_userId + "_" + sk);
      if (val !== null) payload[sk] = val;
    });
    _syncing = true;
    return userRef().update(payload)
      .catch(function(err) { console.error("[Sync] push error:", err); })
      .finally(function() { _syncing = false; });
  }

  /** On startup: compare timestamps, newer wins entirely */
  function syncOnLoad() {
    if (!_db || !_userId) return Promise.resolve();
    _syncing = true;
    return userRef().once("value").then(function(snap) {
      var remote = snap.val() || {};
      var remoteTs = remote._ts || 0;
      var localTs = parseInt(localStorage.getItem(_userId + "__ts") || "0");

      if (remoteTs > localTs) {
        // Remote is newer → pull everything
        SYNC_KEYS.forEach(function(sk) {
          if (remote[sk] !== undefined && remote[sk] !== null) {
            localStorage.setItem(_userId + "_" + sk, remote[sk]);
          }
        });
        localStorage.setItem(_userId + "__ts", String(remoteTs));
      } else {
        // Local is newer or equal → push everything
        return pushToFirebase().then(function() {
          localStorage.setItem(_userId + "__ts", String(Date.now()));
        });
      }
    })
    .catch(function(err) { console.error("[Sync] syncOnLoad error:", err); })
    .finally(function() { _syncing = false; });
  }

  /** Listen for realtime changes from other devices */
  function startListening() {
    stopListening();
    if (!_db || !_userId) return;

    var ref = userRef();
    var firstLoad = true;

    var unsub = ref.on("value", function(snap) {
      // Skip the initial fire (we handle that in syncOnLoad)
      if (firstLoad) { firstLoad = false; return; }
      if (_syncing) return;

      var remote = snap.val() || {};
      var remoteTs = remote._ts || 0;
      var localTs = parseInt(localStorage.getItem(_userId + "__ts") || "0");

      // Only apply if remote is actually newer
      if (remoteTs > localTs) {
        _syncing = true;
        SYNC_KEYS.forEach(function(sk) {
          if (remote[sk] !== undefined && remote[sk] !== null) {
            localStorage.setItem(_userId + "_" + sk, remote[sk]);
          }
        });
        localStorage.setItem(_userId + "__ts", String(remoteTs));
        _syncing = false;
      }
    });
    _listeners.push(function() { ref.off("value", unsub); });
  }

  function stopListening() {
    _listeners.forEach(function(fn) { fn(); });
    _listeners = [];
  }

  /** When localStorage changes locally → push to Firebase */
  function onLocalChange(e) {
    if (_syncing || !_db || !_userId) return;
    if (!e.key || !isSyncKey(e.key)) return;
    // Update local timestamp and push
    localStorage.setItem(_userId + "__ts", String(Date.now()));
    pushToFirebase();
  }

  // ══════════════════════════════════════════
  // Public API
  // ══════════════════════════════════════════

  var DentalSync = {
    init: function () {
      if (_initialized) return Promise.resolve();
      _initialized = true;
      if (!isConfigured()) return Promise.resolve();

      try {
        if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
        _db = firebase.database();

        // Monkey-patch localStorage to detect local writes
        var origSetItem = localStorage.setItem.bind(localStorage);
        localStorage.setItem = function (key, value) {
          origSetItem(key, value);
          if (isSyncKey(key) && !_syncing) {
            onLocalChange({ key: key, newValue: value });
          }
        };

        // Auto-connect if user already selected
        _userId = localStorage.getItem("dental_cur_user");
        if (_userId) {
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
      } else if (!status.configured) {
        container.innerHTML = '<span class="sync-btn" style="color:#94a3b8">⚠️ 同步未設定</span>';
      } else {
        container.innerHTML = '<span class="sync-btn" style="color:#94a3b8">⏸ 請先選擇使用者</span>';
      }
    },
  };

  window.DentalSync = DentalSync;
})();
