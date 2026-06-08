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

  var SYNC_KEYS = [
    "wrongbook_state", "daily_log", "wrongbook_lastpos",
    "notebook", "notebook_pending", "gemini_api_key", "gemini_api_keys", "github_token", "github_repo", "gemini_model",
    "examHistory", "exam_reviewed",
    "nb_theme", "nb_theme_sat", "nb_theme_opa", "nb_theme_gstr",
    "nb_toc_mono", "nb_bg_style", "nb_font_style"
  ];

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
  /** v283: notebook 改從 IDB 讀(localStorage 撞 quota 後 stale)
   *  v285: examHistory 也改從 IDB 讀(同樣理由,避免跨裝置同步遺失試卷紀錄) */
  function pushToFirebase() {
    if (!_db || !_userId) return Promise.resolve();
    var payload = { _ts: Date.now() };
    var oldPayload = {};
    var IDB_KEYS = ['notebook', 'examHistory', 'wrongbook_state'];
    // 先把可以從 localStorage 拿的都拿了
    SYNC_KEYS.forEach(function(sk) {
      if (IDB_KEYS.indexOf(sk) >= 0) return; // 這些走 IDB,稍後處理
      var val = localStorage.getItem(_userId + "_" + sk);
      if (val !== null) {
        payload[sk] = val;
        oldPayload[sk] = val;
      }
    });
    // notebook 從 IDB 拿
    var notebookPromise = (function(){
      if (window._notebookIdbBridge && window._notebookIdbBridge.getNotebookPayload) {
        return window._notebookIdbBridge.getNotebookPayload().then(function(idbVal){
          if (idbVal) { payload.notebook = idbVal; oldPayload.notebook = idbVal; }
          else {
            var lsVal = localStorage.getItem(_userId + "_notebook");
            if (lsVal !== null) { payload.notebook = lsVal; oldPayload.notebook = lsVal; }
          }
        }).catch(function(){
          var lsVal = localStorage.getItem(_userId + "_notebook");
          if (lsVal !== null) { payload.notebook = lsVal; oldPayload.notebook = lsVal; }
        });
      }
      var lsVal = localStorage.getItem(_userId + "_notebook");
      if (lsVal !== null) { payload.notebook = lsVal; oldPayload.notebook = lsVal; }
      return Promise.resolve();
    })();
    // examHistory 從 IDB 拿(v285)
    var examHistPromise = (function(){
      if (window._examHistoryIdbBridge && window._examHistoryIdbBridge.getExamHistoryPayload) {
        return window._examHistoryIdbBridge.getExamHistoryPayload().then(function(idbVal){
          if (idbVal) { payload.examHistory = idbVal; oldPayload.examHistory = idbVal; }
          else {
            var lsVal = localStorage.getItem(_userId + "_examHistory");
            if (lsVal !== null) { payload.examHistory = lsVal; oldPayload.examHistory = lsVal; }
          }
        }).catch(function(){
          var lsVal = localStorage.getItem(_userId + "_examHistory");
          if (lsVal !== null) { payload.examHistory = lsVal; oldPayload.examHistory = lsVal; }
        });
      }
      var lsVal = localStorage.getItem(_userId + "_examHistory");
      if (lsVal !== null) { payload.examHistory = lsVal; oldPayload.examHistory = lsVal; }
      return Promise.resolve();
    })();
    // wrongbook_state 從 IDB 拿(v286)
    var wrongbookPromise = (function(){
      if (window._wrongbookIdbBridge && window._wrongbookIdbBridge.getWrongbookPayload) {
        return window._wrongbookIdbBridge.getWrongbookPayload().then(function(idbVal){
          if (idbVal) { payload.wrongbook_state = idbVal; oldPayload.wrongbook_state = idbVal; }
          else {
            var lsVal = localStorage.getItem(_userId + "_wrongbook_state");
            if (lsVal !== null) { payload.wrongbook_state = lsVal; oldPayload.wrongbook_state = lsVal; }
          }
        }).catch(function(){
          var lsVal = localStorage.getItem(_userId + "_wrongbook_state");
          if (lsVal !== null) { payload.wrongbook_state = lsVal; oldPayload.wrongbook_state = lsVal; }
        });
      }
      var lsVal = localStorage.getItem(_userId + "_wrongbook_state");
      if (lsVal !== null) { payload.wrongbook_state = lsVal; oldPayload.wrongbook_state = lsVal; }
      return Promise.resolve();
    })();
    _syncing = true;
    return Promise.all([notebookPromise, examHistPromise, wrongbookPromise]).then(function(){
      return Promise.all([
        userRef().update(payload),
        userDataRef().update(oldPayload)
      ]);
    })
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
            // 🛡 v283/v285:notebook 跟 examHistory 改寫進 IDB(localStorage 可能撞 quota),其他維持
            if (sk === 'notebook' && window._notebookIdbBridge && window._notebookIdbBridge.applyRemoteNotebook) {
              window._notebookIdbBridge.applyRemoteNotebook(remote[sk]);
              try { localStorage.setItem(_userId + "_" + sk, remote[sk]); } catch(e) {}
            } else if (sk === 'examHistory' && window._examHistoryIdbBridge && window._examHistoryIdbBridge.applyRemoteExamHistory) {
              window._examHistoryIdbBridge.applyRemoteExamHistory(remote[sk]);
              try { localStorage.setItem(_userId + "_" + sk, remote[sk]); } catch(e) {}
            } else if (sk === 'wrongbook_state' && window._wrongbookIdbBridge && window._wrongbookIdbBridge.applyRemoteWrongbook) {
              window._wrongbookIdbBridge.applyRemoteWrongbook(remote[sk]);
              try { localStorage.setItem(_userId + "_" + sk, remote[sk]); } catch(e) {}
            } else {
              try { localStorage.setItem(_userId + "_" + sk, remote[sk]); } catch(e) {}
            }
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
          // 🛡 v283/v285:notebook 跟 examHistory 走 IDB,其他維持 localStorage
          if (sk === 'notebook' && window._notebookIdbBridge && window._notebookIdbBridge.applyRemoteNotebook) {
            window._notebookIdbBridge.applyRemoteNotebook(source[sk]);
            try { localStorage.setItem(_userId + "_" + sk, source[sk]); } catch(e) {}
          } else if (sk === 'examHistory' && window._examHistoryIdbBridge && window._examHistoryIdbBridge.applyRemoteExamHistory) {
            window._examHistoryIdbBridge.applyRemoteExamHistory(source[sk]);
            try { localStorage.setItem(_userId + "_" + sk, source[sk]); } catch(e) {}
          } else if (sk === 'wrongbook_state' && window._wrongbookIdbBridge && window._wrongbookIdbBridge.applyRemoteWrongbook) {
            window._wrongbookIdbBridge.applyRemoteWrongbook(source[sk]);
            try { localStorage.setItem(_userId + "_" + sk, source[sk]); } catch(e) {}
          } else {
            try { localStorage.setItem(_userId + "_" + sk, source[sk]); } catch(e) {}
          }
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
            // 🛡 v283/v285:notebook 跟 examHistory 走 IDB,其他維持 localStorage
            if (sk === 'notebook' && window._notebookIdbBridge && window._notebookIdbBridge.applyRemoteNotebook) {
              window._notebookIdbBridge.applyRemoteNotebook(val[sk]);
              try { localStorage.setItem(_userId + "_" + sk, val[sk]); } catch(e) {}
            } else if (sk === 'examHistory' && window._examHistoryIdbBridge && window._examHistoryIdbBridge.applyRemoteExamHistory) {
              window._examHistoryIdbBridge.applyRemoteExamHistory(val[sk]);
              try { localStorage.setItem(_userId + "_" + sk, val[sk]); } catch(e) {}
            } else if (sk === 'wrongbook_state' && window._wrongbookIdbBridge && window._wrongbookIdbBridge.applyRemoteWrongbook) {
              window._wrongbookIdbBridge.applyRemoteWrongbook(val[sk]);
              try { localStorage.setItem(_userId + "_" + sk, val[sk]); } catch(e) {}
            } else {
              try { localStorage.setItem(_userId + "_" + sk, val[sk]); } catch(e) {}
            }
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

  /** Force pull: overwrite local with cloud data, no timestamp check */
  function forcePullFromCloud() {
    if (!_db || !_userId) return Promise.reject(new Error("尚未連線"));
    _syncing = true;
    return readRemote().then(function(remote) {
      var applied = 0;
      SYNC_KEYS.forEach(function(sk) {
        if (remote[sk] !== undefined) {
          localStorage.setItem(_userId + "_" + sk, remote[sk]);
          applied++;
        }
      });
      localStorage.setItem(_userId + "__ts", String(remote._ts || Date.now()));
      return applied;
    }).finally(function() { _syncing = false; });
  }

  /** Force push: overwrite cloud with local data */
  function forcePushToCloud() {
    if (!_db || !_userId) return Promise.reject(new Error("尚未連線"));
    var now = Date.now();
    localStorage.setItem(_userId + "__ts", String(now));
    return pushToFirebase().then(function() { return now; });
  }

  /** Read remote without applying — for diff display */
  function getRemoteSnapshot() {
    if (!_db || !_userId) return Promise.reject(new Error("尚未連線"));
    return readRemote();
  }

  /** Count flagged + status entries from a wrongbook_state JSON string */
  function countMarks(stateStr) {
    if (!stateStr) return { flagged: 0, marked: 0, total: 0 };
    try {
      var obj = JSON.parse(stateStr);
      var flagged = 0, marked = 0, total = 0;
      Object.keys(obj).forEach(function(id) {
        var s = obj[id] || {};
        total++;
        if (s.flagged) flagged++;
        if (s.status && s.status !== "none") marked++;
      });
      return { flagged: flagged, marked: marked, total: total };
    } catch (e) { return { flagged: 0, marked: 0, total: 0 }; }
  }

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

    forcePull: forcePullFromCloud,
    forcePush: forcePushToCloud,
    getRemoteSnapshot: getRemoteSnapshot,
    countMarks: countMarks,
    getUserId: function() { return _userId; },

    /** PIN 鎖:讀寫 users/{id}/auth/pin_hash */
    getPinHash: function(userId) {
      if (!_db) return Promise.reject(new Error("尚未連線"));
      return _db.ref("users/" + userId + "/auth/pin_hash").once("value").then(function(snap){ return snap.val(); });
    },
    setPinHash: function(userId, hash) {
      if (!_db) return Promise.reject(new Error("尚未連線"));
      return _db.ref("users/" + userId + "/auth/pin_hash").set(hash);
    },

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
      var ver = (typeof window !== 'undefined' && window.APP_VERSION)
        ? ('<span class="sync-btn" style="color:#7c3aed;border-color:#ddd6fe;background:#faf5ff" title="目前版本">' + window.APP_VERSION + '</span>')
        : '';
      if (status.connected) {
        container.innerHTML = '<span class="sync-btn" style="color:#16a34a;border-color:#bbf7d0">🟢 同步中</span>' + ver;
      } else {
        container.innerHTML = ver;
      }
    },
  };

  window.DentalSync = DentalSync;
})();
