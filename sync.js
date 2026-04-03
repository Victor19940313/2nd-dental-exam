/**
 * DentalSync — Firebase 跨裝置同步模組（使用者名稱自動同步版）
 * 同名使用者 = 自動同步，不需要輸入同步碼
 */
(function () {
  "use strict";

  const FIREBASE_CONFIG = {
    apiKey: "AIzaSyACFnTGWEuhUp0htnMWe8i7XbHiAWjgoAc",
    authDomain: "dental-exam-sync.firebaseapp.com",
    databaseURL: "https://dental-exam-sync-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "dental-exam-sync",
    storageBucket: "dental-exam-sync.firebasestorage.app",
    messagingSenderId: "136556858599",
    appId: "1:136556858599:web:de382cbbef5099d63e2642",
  };

  // Keys to sync (per-user prefixed)
  const SYNC_KEYS = ["wrongbook_state", "daily_log", "wrongbook_lastpos"];

  let _db = null;
  let _userId = null; // current user id (e.g. "hua")
  let _listeners = [];
  let _initialized = false;
  let _syncing = false;

  function isConfigured() {
    return FIREBASE_CONFIG.apiKey !== "YOUR_API_KEY" && !!FIREBASE_CONFIG.databaseURL;
  }

  /** Get the full localStorage key for a sync key */
  function lsKey(key) {
    return _userId + "_" + key;
  }

  /** Firebase path for current user's data */
  function userRef() {
    return _db.ref("users/" + _userId + "/data");
  }

  /** Encode key for Firebase (no . # $ [ ] /) */
  function encodeKey(key) {
    return key.replace(/\./g, "%2E").replace(/#/g, "%23").replace(/\$/g, "%24").replace(/\[/g, "%5B").replace(/\]/g, "%5D").replace(/\//g, "%2F");
  }
  function decodeKey(key) {
    return key.replace(/%2E/g, ".").replace(/%23/g, "#").replace(/%24/g, "$").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/%2F/g, "/");
  }

  /** Check if a localStorage key belongs to current user and should be synced */
  function isSyncKey(key) {
    if (!_userId) return false;
    return SYNC_KEYS.some((sk) => key === _userId + "_" + sk);
  }

  // ══════════════════════════════════════════
  // Core sync logic
  // ══════════════════════════════════════════

  /** Listen to Firebase changes → write to localStorage */
  function startListening() {
    stopListening();
    if (!_db || !_userId) return;

    const ref = userRef();

    const onChanged = ref.on("child_changed", (snap) => {
      if (_syncing) return;
      const key = _userId + "_" + decodeKey(snap.key);
      const val = snap.val();
      if (val !== null && val !== undefined) {
        _syncing = true;
        localStorage.setItem(key, val);
        _syncing = false;
      }
    });
    _listeners.push(() => ref.off("child_changed", onChanged));

    const onAdded = ref.on("child_added", (snap) => {
      if (_syncing) return;
      const key = _userId + "_" + decodeKey(snap.key);
      const val = snap.val();
      if (val !== null && val !== undefined) {
        _syncing = true;
        localStorage.setItem(key, val);
        _syncing = false;
      }
    });
    _listeners.push(() => ref.off("child_added", onAdded));

    const onRemoved = ref.on("child_removed", (snap) => {
      if (_syncing) return;
      const key = _userId + "_" + decodeKey(snap.key);
      _syncing = true;
      localStorage.removeItem(key);
      _syncing = false;
    });
    _listeners.push(() => ref.off("child_removed", onRemoved));
  }

  function stopListening() {
    _listeners.forEach((fn) => fn());
    _listeners = [];
  }

  /** Listen to localStorage changes → push to Firebase */
  function onStorageChange(e) {
    if (_syncing || !_db || !_userId) return;
    if (!e.key || !isSyncKey(e.key)) return;

    // Strip the userId prefix to get the Firebase key
    const fbKey = encodeKey(e.key.replace(_userId + "_", ""));

    if (e.newValue === null) {
      userRef().child(fbKey).remove().catch(() => {});
    } else {
      const update = {};
      update[fbKey] = e.newValue;
      _syncing = true;
      userRef()
        .update(update)
        .catch(() => {})
        .finally(() => { _syncing = false; });
    }
  }

  /** Push all local user data to Firebase */
  function pushAll() {
    if (!_db || !_userId) return Promise.resolve();
    const data = {};
    SYNC_KEYS.forEach((sk) => {
      const val = localStorage.getItem(_userId + "_" + sk);
      if (val !== null) data[encodeKey(sk)] = val;
    });
    if (!Object.keys(data).length) return Promise.resolve();
    _syncing = true;
    return userRef().update(data).catch(() => {}).finally(() => { _syncing = false; });
  }

  /** Pull all Firebase data to local */
  function pullAll() {
    if (!_db || !_userId) return Promise.resolve();
    _syncing = true;
    return userRef()
      .once("value")
      .then((snap) => {
        const data = snap.val();
        if (!data) return;
        Object.keys(data).forEach((encodedKey) => {
          const sk = decodeKey(encodedKey);
          if (SYNC_KEYS.includes(sk)) {
            localStorage.setItem(_userId + "_" + sk, data[encodedKey]);
          }
        });
      })
      .catch(() => {})
      .finally(() => { _syncing = false; });
  }

  // ══════════════════════════════════════════
  // Public API
  // ══════════════════════════════════════════

  const DentalSync = {
    init: function () {
      if (_initialized) return Promise.resolve();
      _initialized = true;

      if (!isConfigured()) {
        console.warn("[DentalSync] Firebase 尚未設定");
        return Promise.resolve();
      }

      try {
        if (!firebase.apps.length) {
          firebase.initializeApp(FIREBASE_CONFIG);
        }
        _db = firebase.database();

        // Intercept localStorage writes for sync
        const origSetItem = localStorage.setItem.bind(localStorage);
        localStorage.setItem = function (key, value) {
          const oldValue = localStorage.getItem(key);
          origSetItem(key, value);
          if (isSyncKey(key) && !_syncing) {
            onStorageChange({ key: key, newValue: value, oldValue: oldValue });
          }
        };
        const origRemoveItem = localStorage.removeItem.bind(localStorage);
        localStorage.removeItem = function (key) {
          origRemoveItem(key);
          if (isSyncKey(key) && !_syncing) {
            onStorageChange({ key: key, newValue: null });
          }
        };

        // Auto-connect if user already selected
        _userId = localStorage.getItem("dental_cur_user");
        if (_userId) {
          startListening();
          return this.pullAll();
        }
      } catch (err) {
        console.error("[DentalSync] init error:", err);
      }
      return Promise.resolve();
    },

    /** Switch to a different user (called when user selects account) */
    switchUser: function (userId) {
      stopListening();
      _userId = userId;
      if (_db && _userId) {
        startListening();
        return this.pullAll();
      }
      return Promise.resolve();
    },

    pushAll: pushAll,
    pullAll: pullAll,

    getStatus: function () {
      return {
        connected: !!(_db && _userId),
        userId: _userId,
        configured: isConfigured(),
      };
    },

    /** Render sync status UI */
    renderUI: function (containerSelector) {
      const container =
        typeof containerSelector === "string"
          ? document.querySelector(containerSelector)
          : containerSelector;
      if (!container) return;

      const status = this.getStatus();
      if (status.connected) {
        container.innerHTML =
          '<span class="sync-btn" style="color:#16a34a;border-color:#bbf7d0">🟢 同步中</span>';
      } else if (!status.configured) {
        container.innerHTML =
          '<span class="sync-btn" style="color:#94a3b8">⚠️ 同步未設定</span>';
      } else {
        container.innerHTML =
          '<span class="sync-btn" style="color:#94a3b8">⏸ 請先選擇使用者</span>';
      }
    },
  };

  window.DentalSync = DentalSync;
})();
