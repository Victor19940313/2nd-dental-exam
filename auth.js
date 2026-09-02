// auth.js — Google 登入系統 (里程碑 1a: 基礎版, 不動舊使用者)
// v497: 首次加 Google Auth. 純加功能, 舊匿名使用者不受影響
//
// 用法:
//   1. HTML 內加 <span id="auth-widget"></span> 位置放登入 button
//   2. include 順序: firebase-app-compat → firebase-database-compat → firebase-auth-compat → auth.js
//
// 對外 API:
//   window.Auth.signIn()      → 開 Google popup 登入
//   window.Auth.signOut()     → 登出
//   window.Auth.getUser()     → 拿目前登入的 user (未登入回 null)
//   window.Auth.onChange(cb)  → 訂閱登入狀態變化 (cb 收 user or null)

(function () {
  if (typeof firebase === "undefined" || !firebase.auth) {
    console.warn("[Auth] firebase.auth 未載入, 跳過");
    return;
  }

  // v498: 自己 initializeApp (幂等), 不依賴 sync.js 的執行順序
  // 之前 auth.js 在 sync.js.init() 前就跑 → firebase.auth() 因 App 沒 init 而 throw
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyACFnTGWEuhUp0htnMWe8i7XbHiAWjgoAc",
      authDomain: "dental-exam-sync.firebaseapp.com",
      databaseURL:
        "https://dental-exam-sync-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "dental-exam-sync",
      storageBucket: "dental-exam-sync.firebasestorage.app",
      messagingSenderId: "136556858599",
      appId: "1:136556858599:web:de382cbbef5099d63e2642",
    });
  }

  const auth = firebase.auth();
  const db = firebase.database();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });

  let currentUser = null;
  const changeCallbacks = [];

  // 儲存/更新使用者 profile 到 Firebase users/{uid}/profile
  async function upsertUserProfile(user) {
    if (!user || !user.uid) return;
    try {
      const ref = db.ref("users/" + user.uid + "/profile");
      const now = Date.now();
      const snap = await ref.once("value");
      const existing = snap.val() || {};
      const payload = {
        email: user.email || "",
        name: user.displayName || "",
        avatar: user.photoURL || "",
        provider: "google",
        last_login_ts: now,
      };
      if (!existing.created_ts) {
        payload.created_ts = now;
        payload.trial_started_at = now; // 首次登入自動起算 7 天試用
      }
      await ref.update(payload);
    } catch (e) {
      console.warn("[Auth] upsertUserProfile failed:", e.message);
    }
  }

  // 監聽登入狀態
  auth.onAuthStateChanged(async function (user) {
    // 過濾: 只認 Google provider (匿名的照舊, 不影響)
    if (user && user.providerData && user.providerData.length > 0) {
      const isGoogle = user.providerData.some(function (p) {
        return p.providerId === "google.com";
      });
      if (isGoogle) {
        currentUser = user;
        await upsertUserProfile(user);
      } else {
        // 匿名 or 其他 provider - 不當作登入 (照舊當訪客)
        currentUser = null;
      }
    } else {
      currentUser = null;
    }
    renderWidget();
    changeCallbacks.forEach(function (cb) {
      try {
        cb(currentUser);
      } catch (e) {}
    });
  });

  async function signIn() {
    try {
      await auth.signInWithPopup(provider);
    } catch (e) {
      // popup 被關 or blocked
      if (e.code === "auth/popup-blocked") {
        alert("瀏覽器擋了彈窗, 請允許此網站彈窗後再試");
      } else if (
        e.code !== "auth/popup-closed-by-user" &&
        e.code !== "auth/cancelled-popup-request"
      ) {
        alert("登入失敗: " + (e.message || e.code));
      }
    }
  }

  async function signOutFn() {
    try {
      await auth.signOut();
      // v532: 清 nickname/curUser 避免下次登入其他帳號時被舊值污染
      try {
        localStorage.removeItem("dental_cur_user");
        localStorage.removeItem("migrated_nickname");
        localStorage.removeItem("migrated_google_uid");
      } catch (e) {}
    } catch (e) {
      console.warn("[Auth] signOut failed:", e.message);
    }
  }

  function renderWidget() {
    const el = document.getElementById("auth-widget");
    if (!el) return;
    if (currentUser) {
      const avatar = currentUser.photoURL || "";
      const name = currentUser.displayName || currentUser.email || "";
      el.innerHTML =
        '<div class="auth-w-loggedin" onclick="Auth._toggleMenu(this)">' +
        (avatar
          ? '<img class="auth-w-avatar" src="' +
            escapeAttr(avatar) +
            '" alt="">'
          : '<span class="auth-w-avatar-placeholder">👤</span>') +
        '<span class="auth-w-name">' +
        escapeHtml(name) +
        "</span>" +
        '<span class="auth-w-caret">▾</span>' +
        '<div class="auth-w-menu">' +
        '<div class="auth-w-menu-email">' +
        escapeHtml(currentUser.email || "") +
        "</div>" +
        '<button class="auth-w-menu-btn" onclick="event.stopPropagation();Auth.signOut()">登出</button>' +
        "</div>" +
        "</div>";
    } else {
      el.innerHTML =
        '<button class="auth-w-signin" onclick="Auth.signIn()" title="用 Google 帳號登入, 資料跨裝置同步">' +
        '<svg width="16" height="16" viewBox="0 0 48 48" style="vertical-align:middle;margin-right:6px"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l5.7-5.7C34 6.5 29.3 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5 43.5 34.8 43.5 24c0-1.2-.1-2.4-.3-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.1 8 3l5.7-5.7C34 6.5 29.3 4.5 24 4.5 16.3 4.5 9.6 8.8 6.3 14.7z"/><path fill="#4CAF50" d="M24 43.5c5.2 0 9.9-2 13.4-5.2l-6.2-5.1c-2 1.5-4.5 2.3-7.2 2.3-5.2 0-9.6-3.3-11.3-8l-6.6 5.1C9.5 39 16.2 43.5 24 43.5z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.3-4.1 5.7l6.2 5.1c-.4.4 6.6-4.8 6.6-14.8 0-1.2-.1-2.4-.4-3.5z"/></svg>' +
        "<span>Google 登入</span>" +
        "</button>";
    }
  }

  function escapeHtml(s) {
    return String(s || "").replace(/[&<>"']/g, function (c) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c];
    });
  }
  function escapeAttr(s) {
    return escapeHtml(s);
  }

  // export
  window.Auth = {
    signIn: signIn,
    signOut: signOutFn,
    getUser: function () {
      return currentUser;
    },
    onChange: function (cb) {
      if (typeof cb === "function") changeCallbacks.push(cb);
    },
    _toggleMenu: function (el) {
      if (el && el.classList) el.classList.toggle("open");
    },
  };

  // 點外面關 menu
  document.addEventListener("click", function (e) {
    const openMenus = document.querySelectorAll(".auth-w-loggedin.open");
    openMenus.forEach(function (m) {
      if (!m.contains(e.target)) m.classList.remove("open");
    });
  });

  // CSS inject
  const css = `
.auth-w-signin { display: inline-flex; align-items: center; gap: 0; background: #fff; border: 1px solid #dadce0; border-radius: 999px; padding: .35rem .9rem .35rem .55rem; cursor: pointer; font-size: .85rem; color: #3c4043; font-weight: 600; transition: box-shadow .15s, background .15s; }
.auth-w-signin:hover { background: #f8f9fa; box-shadow: 0 1px 3px rgba(60,64,67,.2); }
.auth-w-loggedin { display: inline-flex; align-items: center; gap: .4rem; cursor: pointer; background: #fff; border: 1px solid #e5e7eb; border-radius: 999px; padding: .2rem .7rem .2rem .25rem; position: relative; font-size: .85rem; }
.auth-w-loggedin:hover { background: #f9fafb; }
.auth-w-avatar { width: 26px; height: 26px; border-radius: 50%; }
.auth-w-avatar-placeholder { width: 26px; height: 26px; display: inline-flex; align-items: center; justify-content: center; background: #ede9fe; border-radius: 50%; font-size: .9rem; }
.auth-w-name { font-weight: 600; color: #1f2937; max-width: 100px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.auth-w-caret { font-size: .7rem; color: #6b7280; }
.auth-w-menu { display: none; position: absolute; top: calc(100% + 4px); right: 0; background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,.1); min-width: 200px; z-index: 9999; padding: .5rem; }
.auth-w-loggedin.open .auth-w-menu { display: block; }
.auth-w-menu-email { font-size: .78rem; color: #6b7280; padding: .4rem .5rem; border-bottom: 1px solid #f3f4f6; margin-bottom: .3rem; word-break: break-all; }
.auth-w-menu-btn { display: block; width: 100%; padding: .5rem; background: none; border: none; text-align: left; cursor: pointer; font-size: .85rem; color: #dc2626; border-radius: 4px; }
.auth-w-menu-btn:hover { background: #fef2f2; }
`;
  if (!document.getElementById("auth-css")) {
    const s = document.createElement("style");
    s.id = "auth-css";
    s.textContent = css;
    document.head.appendChild(s);
  }

  // 初次 render (auth state 還沒回 → 顯示登入 button)
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderWidget);
  } else {
    renderWidget();
  }
})();
