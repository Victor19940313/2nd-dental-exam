/**
 * DentalSync — Firebase 跨裝置同步模組
 * 使用 Firebase Realtime Database + 6碼同步碼
 * 載入方式：<script src="sync.js"></script>（需先載入 Firebase compat SDK）
 */
(function () {
  "use strict";

  // ── Firebase 設定（請替換為自己的 Firebase 專案）──
  const FIREBASE_CONFIG = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "000000000000",
    appId: "YOUR_APP_ID",
  };

  // ── 要同步的 localStorage key 前綴 ──
  const SYNC_PREFIXES = ["reviewed-", "exam-", "bookmark-", "mark-", "qstate-"];

  // ── 內部狀態 ──
  const LS_CODE_KEY = "dental-sync-code";
  const LS_LAST_SYNC = "dental-sync-last";
  let _db = null;
  let _code = null;
  let _listeners = []; // Firebase listener unsubscribe 函式
  let _initialized = false;
  let _offlineQueue = []; // 離線時暫存的變更
  let _syncing = false; // 防止 Firebase → localStorage → Firebase 迴圈
  let _uiContainer = null;

  // ══════════════════════════════════════════
  // 工具函式
  // ══════════════════════════════════════════

  /** 檢查 Firebase 是否已正確設定（非預設 placeholder） */
  function isConfigured() {
    return (
      FIREBASE_CONFIG.apiKey !== "YOUR_API_KEY" &&
      FIREBASE_CONFIG.databaseURL &&
      !FIREBASE_CONFIG.databaseURL.includes("YOUR_PROJECT")
    );
  }

  /** 產生 6 碼大寫英數同步碼 */
  function generateCode() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // 排除易混淆字元
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
  }

  /** 判斷某個 localStorage key 是否在同步範圍 */
  function isSyncKey(key) {
    return SYNC_PREFIXES.some((p) => key.startsWith(p));
  }

  /** 取得所有需要同步的 localStorage 資料 */
  function getAllSyncData() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (isSyncKey(key)) {
        data[key] = localStorage.getItem(key);
      }
    }
    return data;
  }

  /** Firebase 路徑參考（data 節點） */
  function dataRef() {
    return _db.ref("sync/" + _code + "/data");
  }

  /** Firebase 路徑參考（lastModified） */
  function metaRef() {
    return _db.ref("sync/" + _code + "/lastModified");
  }

  /** 安全地 encode localStorage key 給 Firebase 用（Firebase 不允許 . # $ [ ]） */
  function encodeKey(key) {
    return key.replace(/\./g, "%2E").replace(/#/g, "%23").replace(/\$/g, "%24").replace(/\[/g, "%5B").replace(/\]/g, "%5D").replace(/\//g, "%2F");
  }

  function decodeKey(key) {
    return key.replace(/%2E/g, ".").replace(/%23/g, "#").replace(/%24/g, "$").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/%2F/g, "/");
  }

  /** 更新 UI（如果已渲染） */
  function refreshUI() {
    if (_uiContainer) {
      DentalSync.renderUI(_uiContainer);
    }
  }

  /** 格式化時間 */
  function formatTime(ts) {
    if (!ts) return "---";
    const d = new Date(ts);
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    return hh + ":" + mm + ":" + ss;
  }

  // ══════════════════════════════════════════
  // 核心同步邏輯
  // ══════════════════════════════════════════

  /** 監聽 Firebase 變更 → 寫入 localStorage */
  function startListening() {
    stopListening();
    if (!_db || !_code) return;

    const ref = dataRef();
    const unsub = ref.on("child_changed", (snap) => {
      if (_syncing) return;
      const key = decodeKey(snap.key);
      const val = snap.val();
      if (val !== null && val !== undefined) {
        _syncing = true;
        localStorage.setItem(key, val);
        _syncing = false;
      }
    });
    _listeners.push(() => ref.off("child_changed", unsub));

    const unsub2 = ref.on("child_added", (snap) => {
      if (_syncing) return;
      const key = decodeKey(snap.key);
      const val = snap.val();
      if (val !== null && val !== undefined) {
        _syncing = true;
        localStorage.setItem(key, val);
        _syncing = false;
      }
    });
    _listeners.push(() => ref.off("child_added", unsub2));

    const unsub3 = ref.on("child_removed", (snap) => {
      if (_syncing) return;
      const key = decodeKey(snap.key);
      _syncing = true;
      localStorage.removeItem(key);
      _syncing = false;
    });
    _listeners.push(() => ref.off("child_removed", unsub3));
  }

  /** 停止監聽 */
  function stopListening() {
    _listeners.forEach((fn) => fn());
    _listeners = [];
  }

  /** 監聽 localStorage 變更 → 推送至 Firebase */
  function onStorageChange(e) {
    if (_syncing || !_db || !_code) return;
    if (!e.key || !isSyncKey(e.key)) return;

    const encoded = encodeKey(e.key);
    const update = {};

    if (e.newValue === null) {
      // key 被刪除
      dataRef().child(encoded).remove().catch(() => {});
    } else {
      update[encoded] = e.newValue;
      _syncing = true;
      dataRef()
        .update(update)
        .then(() => metaRef().set(firebase.database.ServerValue.TIMESTAMP))
        .catch((err) => {
          // 離線時加入佇列
          _offlineQueue.push({ key: e.key, value: e.newValue });
        })
        .finally(() => {
          _syncing = false;
          localStorage.setItem(LS_LAST_SYNC, Date.now().toString());
          refreshUI();
        });
    }
  }

  /** 推送離線佇列 */
  function flushOfflineQueue() {
    if (!_db || !_code || _offlineQueue.length === 0) return;
    const updates = {};
    _offlineQueue.forEach((item) => {
      updates[encodeKey(item.key)] = item.value;
    });
    _offlineQueue = [];
    _syncing = true;
    dataRef()
      .update(updates)
      .then(() => metaRef().set(firebase.database.ServerValue.TIMESTAMP))
      .catch(() => {})
      .finally(() => {
        _syncing = false;
        localStorage.setItem(LS_LAST_SYNC, Date.now().toString());
        refreshUI();
      });
  }

  // ══════════════════════════════════════════
  // 公開 API — DentalSync
  // ══════════════════════════════════════════

  const DentalSync = {
    /** 初始化 Firebase，若已有同步碼則自動連線 */
    init: function () {
      if (_initialized) return Promise.resolve();
      _initialized = true;

      if (!isConfigured()) {
        console.warn("[DentalSync] Firebase 尚未設定，同步功能停用。請在 sync.js 中填入你的 Firebase config。");
        return Promise.resolve();
      }

      try {
        // 避免重複初始化
        if (!firebase.apps.length) {
          firebase.initializeApp(FIREBASE_CONFIG);
        }
        _db = firebase.database();

        // 監聽上線/離線
        window.addEventListener("online", flushOfflineQueue);

        // 監聽 localStorage 變更（跨 tab + 同 tab）
        window.addEventListener("storage", onStorageChange);

        // 攔截同 tab 的 localStorage 寫入
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

        // 若已有同步碼，自動連線
        const savedCode = localStorage.getItem(LS_CODE_KEY);
        if (savedCode) {
          _code = savedCode.toUpperCase();
          startListening();
          return this.pullAll();
        }
      } catch (err) {
        console.error("[DentalSync] 初始化失敗:", err);
      }

      return Promise.resolve();
    },

    /** 建立新同步碼 */
    createCode: function () {
      if (!isConfigured()) return Promise.reject("Firebase 尚未設定");

      _code = generateCode();
      localStorage.setItem(LS_CODE_KEY, _code);
      startListening();
      return this.pushAll().then(() => {
        refreshUI();
        return _code;
      });
    },

    /** 加入已存在的同步碼 */
    joinCode: function (code) {
      if (!isConfigured()) return Promise.reject("Firebase 尚未設定");
      if (!code || code.trim().length !== 6) return Promise.reject("同步碼必須為 6 碼");

      _code = code.trim().toUpperCase();
      localStorage.setItem(LS_CODE_KEY, _code);
      startListening();
      return this.pullAll().then(() => {
        refreshUI();
        return _code;
      });
    },

    /** 推送所有本地資料到 Firebase */
    pushAll: function () {
      if (!_db || !_code) return Promise.resolve();

      const data = getAllSyncData();
      const encoded = {};
      Object.keys(data).forEach((key) => {
        encoded[encodeKey(key)] = data[key];
      });

      if (Object.keys(encoded).length === 0) return Promise.resolve();

      _syncing = true;
      return dataRef()
        .update(encoded)
        .then(() => metaRef().set(firebase.database.ServerValue.TIMESTAMP))
        .then(() => {
          localStorage.setItem(LS_LAST_SYNC, Date.now().toString());
        })
        .catch((err) => {
          console.error("[DentalSync] pushAll 失敗:", err);
        })
        .finally(() => {
          _syncing = false;
          refreshUI();
        });
    },

    /** 從 Firebase 拉取所有資料到本地 */
    pullAll: function () {
      if (!_db || !_code) return Promise.resolve();

      _syncing = true;
      return dataRef()
        .once("value")
        .then((snap) => {
          const data = snap.val();
          if (!data) return;
          Object.keys(data).forEach((encodedKey) => {
            const key = decodeKey(encodedKey);
            if (isSyncKey(key)) {
              localStorage.setItem(key, data[encodedKey]);
            }
          });
          localStorage.setItem(LS_LAST_SYNC, Date.now().toString());
        })
        .catch((err) => {
          console.error("[DentalSync] pullAll 失敗:", err);
        })
        .finally(() => {
          _syncing = false;
          refreshUI();
        });
    },

    /** 中斷同步連線 */
    disconnect: function () {
      stopListening();
      _code = null;
      localStorage.removeItem(LS_CODE_KEY);
      localStorage.removeItem(LS_LAST_SYNC);
      refreshUI();
    },

    /** 取得目前狀態 */
    getStatus: function () {
      return {
        connected: !!_code,
        code: _code,
        configured: isConfigured(),
        lastSync: localStorage.getItem(LS_LAST_SYNC)
          ? parseInt(localStorage.getItem(LS_LAST_SYNC))
          : null,
      };
    },

    // ══════════════════════════════════════════
    // UI 渲染
    // ══════════════════════════════════════════

    /** 渲染同步 UI 到指定容器 */
    renderUI: function (containerSelector) {
      _uiContainer = containerSelector;
      const container =
        typeof containerSelector === "string"
          ? document.querySelector(containerSelector)
          : containerSelector;
      if (!container) return;

      const status = this.getStatus();

      // 已連線狀態
      if (status.connected) {
        container.innerHTML =
          '<button class="dental-sync-btn dental-sync-connected" id="dental-sync-toggle">' +
          "\uD83D\uDD17 " + status.code +
          "</button>";
        document.getElementById("dental-sync-toggle").onclick = () =>
          this._showModal();
        return;
      }

      // 未連線
      container.innerHTML =
        '<button class="dental-sync-btn" id="dental-sync-toggle">' +
        "\uD83D\uDCE1 \u540C\u6B65" +
        "</button>";
      document.getElementById("dental-sync-toggle").onclick = () =>
        this._showModal();
    },

    /** 顯示同步 Modal */
    _showModal: function () {
      // 移除舊 modal
      const old = document.getElementById("dental-sync-modal-overlay");
      if (old) old.remove();

      const status = this.getStatus();
      const overlay = document.createElement("div");
      overlay.id = "dental-sync-modal-overlay";
      overlay.className = "ds-overlay";

      let body = "";

      if (!status.configured) {
        // Firebase 未設定
        body =
          '<div class="ds-modal-icon">\u26A0\uFE0F</div>' +
          '<h3 class="ds-modal-title">\u540C\u6B65\u529F\u80FD\u5C1A\u672A\u8A2D\u5B9A</h3>' +
          '<p class="ds-modal-desc">\u8ACB\u5728 <code>sync.js</code> \u4E2D\u586B\u5165\u4F60\u7684 Firebase \u5C08\u6848\u8A2D\u5B9A\uFF0C\u5373\u53EF\u555F\u7528\u8DE8\u88DD\u7F6E\u540C\u6B65\u3002</p>' +
          '<button class="ds-btn ds-btn-secondary" id="ds-close">\u95DC\u9589</button>';
      } else if (status.connected) {
        // 已連線
        body =
          '<div class="ds-modal-icon">\uD83D\uDD17</div>' +
          '<h3 class="ds-modal-title">\u5DF2\u9023\u7DDA\u540C\u6B65</h3>' +
          '<div class="ds-code-display">' + status.code + "</div>" +
          '<p class="ds-modal-desc">\u5728\u5176\u4ED6\u88DD\u7F6E\u8F38\u5165\u6B64\u540C\u6B65\u78BC\u5373\u53EF\u540C\u6B65\u8CC7\u6599</p>' +
          '<div class="ds-meta">\u4E0A\u6B21\u540C\u6B65\uFF1A' + formatTime(status.lastSync) + "</div>" +
          '<div class="ds-btn-row">' +
          '<button class="ds-btn ds-btn-secondary" id="ds-close">\u95DC\u9589</button>' +
          '<button class="ds-btn ds-btn-push" id="ds-push">\u2B06 \u63A8\u9001\u5168\u90E8</button>' +
          '<button class="ds-btn ds-btn-danger" id="ds-disconnect">\u4E2D\u65B7\u9023\u7DDA</button>' +
          "</div>";
      } else {
        // 未連線
        body =
          '<div class="ds-modal-icon">\uD83D\uDCE1</div>' +
          '<h3 class="ds-modal-title">\u8DE8\u88DD\u7F6E\u540C\u6B65</h3>' +
          '<p class="ds-modal-desc">\u5EFA\u7ACB\u65B0\u7684\u540C\u6B65\u78BC\uFF0C\u6216\u8F38\u5165\u5176\u4ED6\u88DD\u7F6E\u7684\u540C\u6B65\u78BC\u4F86\u540C\u6B65\u8CC7\u6599</p>' +
          '<button class="ds-btn ds-btn-primary" id="ds-create">\u5EFA\u7ACB\u540C\u6B65\u78BC</button>' +
          '<div class="ds-divider"><span>\u6216</span></div>' +
          '<div class="ds-join-row">' +
          '<input type="text" id="ds-code-input" class="ds-input" placeholder="\u8F38\u5165 6 \u78BC\u540C\u6B65\u78BC" maxlength="6" autocomplete="off" spellcheck="false" />' +
          '<button class="ds-btn ds-btn-primary" id="ds-join">\u52A0\u5165</button>' +
          "</div>" +
          '<div class="ds-error" id="ds-error"></div>' +
          '<button class="ds-btn ds-btn-secondary ds-close-bottom" id="ds-close">\u53D6\u6D88</button>';
      }

      overlay.innerHTML = '<div class="ds-modal">' + body + "</div>";
      document.body.appendChild(overlay);

      // 點擊 overlay 背景關閉
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.remove();
      });

      // 關閉按鈕
      const closeBtn = document.getElementById("ds-close");
      if (closeBtn) closeBtn.onclick = () => overlay.remove();

      // 建立同步碼
      const createBtn = document.getElementById("ds-create");
      if (createBtn) {
        createBtn.onclick = () => {
          createBtn.disabled = true;
          createBtn.textContent = "\u5EFA\u7ACB\u4E2D\u2026";
          DentalSync.createCode()
            .then(() => {
              overlay.remove();
              DentalSync._showModal();
            })
            .catch((err) => {
              const errEl = document.getElementById("ds-error");
              if (errEl) errEl.textContent = String(err);
              createBtn.disabled = false;
              createBtn.textContent = "\u5EFA\u7ACB\u540C\u6B65\u78BC";
            });
        };
      }

      // 加入同步碼
      const joinBtn = document.getElementById("ds-join");
      const codeInput = document.getElementById("ds-code-input");
      if (joinBtn && codeInput) {
        // 自動轉大寫
        codeInput.addEventListener("input", () => {
          codeInput.value = codeInput.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
        });
        const doJoin = () => {
          const code = codeInput.value.trim();
          if (code.length !== 6) {
            const errEl = document.getElementById("ds-error");
            if (errEl) errEl.textContent = "\u8ACB\u8F38\u5165 6 \u78BC\u540C\u6B65\u78BC";
            return;
          }
          joinBtn.disabled = true;
          joinBtn.textContent = "\u9023\u7DDA\u4E2D\u2026";
          DentalSync.joinCode(code)
            .then(() => {
              overlay.remove();
              DentalSync._showModal();
            })
            .catch((err) => {
              const errEl = document.getElementById("ds-error");
              if (errEl) errEl.textContent = String(err);
              joinBtn.disabled = false;
              joinBtn.textContent = "\u52A0\u5165";
            });
        };
        joinBtn.onclick = doJoin;
        codeInput.addEventListener("keydown", (e) => {
          if (e.key === "Enter") doJoin();
        });
      }

      // 推送全部
      const pushBtn = document.getElementById("ds-push");
      if (pushBtn) {
        pushBtn.onclick = () => {
          pushBtn.disabled = true;
          pushBtn.textContent = "\u63A8\u9001\u4E2D\u2026";
          DentalSync.pushAll().then(() => {
            pushBtn.textContent = "\u2705 \u5B8C\u6210";
            setTimeout(() => {
              overlay.remove();
              DentalSync._showModal();
            }, 600);
          });
        };
      }

      // 中斷連線
      const discBtn = document.getElementById("ds-disconnect");
      if (discBtn) {
        discBtn.onclick = () => {
          DentalSync.disconnect();
          overlay.remove();
        };
      }
    },
  };

  // ══════════════════════════════════════════
  // 注入 CSS 樣式
  // ══════════════════════════════════════════

  const style = document.createElement("style");
  style.textContent = `
/* ── DentalSync 按鈕 ── */
.dental-sync-btn {
  padding: 0.3rem 0.7rem;
  border-radius: 20px;
  border: 1.5px solid rgba(255,255,255,0.5);
  background: transparent;
  color: white;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
}
.dental-sync-btn:hover {
  background: rgba(255,255,255,0.15);
}
.dental-sync-connected {
  background: rgba(34,197,94,0.25);
  border-color: rgba(34,197,94,0.6);
}

/* ── Modal overlay ── */
.ds-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 1rem;
  animation: ds-fade-in 0.15s ease;
}
@keyframes ds-fade-in {
  from { opacity: 0 }
  to { opacity: 1 }
}

/* ── Modal 本體 ── */
.ds-modal {
  background: white;
  border-radius: 16px;
  padding: 1.8rem 1.5rem;
  max-width: 380px;
  width: 100%;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0,0,0,0.25);
  animation: ds-slide-up 0.2s ease;
}
@keyframes ds-slide-up {
  from { transform: translateY(20px); opacity: 0 }
  to { transform: translateY(0); opacity: 1 }
}

.ds-modal-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.ds-modal-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.4rem;
}
.ds-modal-desc {
  font-size: 0.82rem;
  color: #64748b;
  margin-bottom: 1.2rem;
  line-height: 1.5;
}
.ds-modal-desc code {
  background: #f1f5f9;
  padding: 0.15em 0.4em;
  border-radius: 4px;
  font-size: 0.8rem;
}

/* ── 同步碼顯示 ── */
.ds-code-display {
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: 0.25em;
  color: var(--purple, #7c3aed);
  background: var(--purple-light, #ede9fe);
  border-radius: 12px;
  padding: 0.6rem 1rem;
  margin: 0.8rem auto;
  display: inline-block;
  font-family: 'SF Mono', 'Fira Code', monospace;
  user-select: all;
}

/* ── 按鈕 ── */
.ds-btn {
  padding: 0.6rem 1.2rem;
  border-radius: 10px;
  border: none;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
}
.ds-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.ds-btn-primary {
  background: var(--purple, #7c3aed);
  color: white;
  width: 100%;
}
.ds-btn-primary:hover:not(:disabled) {
  background: var(--purple-dark, #5b21b6);
}
.ds-btn-secondary {
  background: #f1f5f9;
  color: #475569;
}
.ds-btn-secondary:hover:not(:disabled) {
  background: #e2e8f0;
}
.ds-btn-danger {
  background: #fef2f2;
  color: #dc2626;
}
.ds-btn-danger:hover:not(:disabled) {
  background: #fee2e2;
}
.ds-btn-push {
  background: #f0fdf4;
  color: #16a34a;
}
.ds-btn-push:hover:not(:disabled) {
  background: #dcfce7;
}

/* ── 按鈕列 ── */
.ds-btn-row {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}
.ds-btn-row .ds-btn {
  flex: 1;
  min-width: 90px;
}

/* ── 分隔線 ── */
.ds-divider {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 1rem 0;
  color: #94a3b8;
  font-size: 0.78rem;
}
.ds-divider::before,
.ds-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #e2e8f0;
}

/* ── 加入輸入列 ── */
.ds-join-row {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.6rem;
}
.ds-input {
  flex: 1;
  padding: 0.6rem 0.8rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-align: center;
  outline: none;
  font-family: 'SF Mono', 'Fira Code', monospace;
  transition: border-color 0.15s;
}
.ds-input:focus {
  border-color: var(--purple, #7c3aed);
}
.ds-input::placeholder {
  font-weight: 400;
  letter-spacing: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Noto Sans TC', sans-serif;
  font-size: 0.82rem;
  text-transform: none;
}
.ds-join-row .ds-btn {
  white-space: nowrap;
  width: auto;
  flex: none;
}

/* ── 錯誤訊息 ── */
.ds-error {
  color: #dc2626;
  font-size: 0.78rem;
  min-height: 1.2em;
  margin-bottom: 0.4rem;
}

/* ── meta 資訊 ── */
.ds-meta {
  font-size: 0.75rem;
  color: #94a3b8;
  margin: 0.5rem 0;
}

/* ── 底部關閉按鈕 ── */
.ds-close-bottom {
  margin-top: 0.6rem;
  width: 100%;
}

/* ── 手機版 ── */
@media (max-width: 480px) {
  .ds-modal {
    max-width: 100%;
    border-radius: 16px 16px 0 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding-bottom: calc(1.8rem + env(safe-area-inset-bottom));
  }
  .ds-overlay {
    align-items: flex-end;
    padding: 0;
  }
}
`;
  document.head.appendChild(style);

  // 掛到全域
  window.DentalSync = DentalSync;
})();
