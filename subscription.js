// subscription.js — 訂閱狀態判斷 + 狀態徽章 UI (里程碑 1c-1)
// v510
//
// 對外 API:
//   Subscription.getStatus(cb)   → cb({ ok, reason, days_left, plan, user })
//   Subscription.canSee()        → boolean (async, wraps getStatus)
//   Subscription.renderBadge()   → 手動觸發重畫 badge
//   Subscription.onChange(cb)    → 訂閱狀態變化時 callback
//
// Reason:
//   not_logged_in       - 沒 Google 登入
//   trial               - 試用中 (days_left)
//   paid                - 訂閱中 (days_left, plan)
//   trial_expired       - 試用過期 (該催訂閱)
//   subscription_expired- 訂閱過期
//
// UI:
//   加 <span id="sub-badge"></span> 到 header 位置, 這邊 auto render

(function () {
  if (typeof firebase === "undefined" || !firebase.database) return;

  const TRIAL_DAYS = 7;
  const db = firebase.database();
  let cachedStatus = null;
  const changeCbs = [];

  async function loadUserData(uid) {
    const snap = await db.ref("users/" + uid).once("value");
    return snap.val() || {};
  }

  function computeStatus(user, userData) {
    if (!user || !user.uid) return { ok: false, reason: "not_logged_in" };
    const now = Date.now();
    const profile = (userData && userData.profile) || {};
    const sub = (userData && userData.subscription) || null;

    // 有訂閱
    if (sub && sub.expires_at && now < sub.expires_at) {
      return {
        ok: true,
        reason: "paid",
        plan: sub.plan,
        days_left: Math.ceil((sub.expires_at - now) / 86400_000),
        expires_at: sub.expires_at,
        user,
      };
    }

    // 訂閱過期
    if (sub && sub.expires_at && now >= sub.expires_at) {
      return {
        ok: false,
        reason: "subscription_expired",
        expires_at: sub.expires_at,
        user,
      };
    }

    // 試用期
    const trialStart = profile.trial_started_at || profile.created_ts;
    if (trialStart) {
      const trialEnd = trialStart + TRIAL_DAYS * 86400_000;
      if (now < trialEnd) {
        return {
          ok: true,
          reason: "trial",
          days_left: Math.ceil((trialEnd - now) / 86400_000),
          trial_end: trialEnd,
          user,
        };
      }
      return { ok: false, reason: "trial_expired", trial_end: trialEnd, user };
    }

    // 從未試用 (剛登入還沒寫 trial_started_at)
    return { ok: true, reason: "trial", days_left: TRIAL_DAYS, user };
  }

  async function getStatus(cb) {
    const user = window.Auth ? window.Auth.getUser() : null;
    if (!user) {
      const s = { ok: false, reason: "not_logged_in" };
      cachedStatus = s;
      if (cb) cb(s);
      return s;
    }
    try {
      const data = await loadUserData(user.uid);
      const s = computeStatus(user, data);
      cachedStatus = s;
      if (cb) cb(s);
      return s;
    } catch (e) {
      const s = { ok: false, reason: "error", err: e.message };
      if (cb) cb(s);
      return s;
    }
  }

  async function canSee() {
    const s = await getStatus();
    return s.ok === true;
  }

  function renderBadge() {
    const el = document.getElementById("sub-badge");
    if (!el || !cachedStatus) return;
    const s = cachedStatus;
    if (s.reason === "not_logged_in" || s.reason === "error") {
      el.innerHTML = "";
      return;
    }
    if (s.reason === "trial") {
      const cls = s.days_left <= 2 ? "sub-b-warn" : "sub-b-trial";
      el.innerHTML = `<span class="sub-b ${cls}" title="試用中,還剩 ${s.days_left} 天"><span>試用</span><b>剩 ${s.days_left} 天</b><a href="/subscribe.html" class="sub-b-btn">訂閱</a></span>`;
    } else if (s.reason === "paid") {
      const cls = s.days_left <= 5 ? "sub-b-warn" : "sub-b-paid";
      const planName =
        { monthly: "月", quarterly: "季", semi: "半年" }[s.plan] || s.plan;
      el.innerHTML = `<span class="sub-b ${cls}" title="會員 · 剩 ${s.days_left} 天"><span>✨會員</span><b>剩 ${s.days_left} 天</b></span>`;
    } else if (s.reason === "trial_expired") {
      el.innerHTML = `<span class="sub-b sub-b-expired"><span>試用結束</span><a href="/subscribe.html" class="sub-b-btn">訂閱解鎖</a></span>`;
    } else if (s.reason === "subscription_expired") {
      el.innerHTML = `<span class="sub-b sub-b-expired"><span>已過期</span><a href="/subscribe.html" class="sub-b-btn">續訂</a></span>`;
    }
  }

  function applyBodyClass() {
    if (!cachedStatus) return;
    const locked =
      cachedStatus.ok === false &&
      (cachedStatus.reason === "trial_expired" ||
        cachedStatus.reason === "subscription_expired");
    document.body.classList.toggle("sub-locked", locked);
  }

  function isLocked() {
    if (!cachedStatus) return false;
    return (
      cachedStatus.ok === false &&
      (cachedStatus.reason === "trial_expired" ||
        cachedStatus.reason === "subscription_expired")
    );
  }

  // v537: 全鎖 (方案 A) — 過期就蓋全螢幕 overlay,什麼都不能用
  //   白名單 (不鎖,過期的人要能去訂閱/兌換/回報): 首頁、訂閱、獎勵、回饋、裝置
  //   其他頁 (練習本、筆記本、口訣、牙三四五六、故事、遊戲) 一律鎖
  //   資料不動: 只是蓋一層,users/{uid} 的筆記/標記/紀錄都在,付費後拿掉 overlay 即恢復
  const UNLOCKED_PAGES = [
    "/",
    "/index.html",
    "/subscribe.html",
    "/rewards.html",
    "/feedback.html",
    "/devices.html",
  ];
  function isUnlockedPage() {
    const p = location.pathname.replace(/\/+$/, "") || "/";
    return UNLOCKED_PAGES.some(
      (u) => p === u || p === u.replace(/\/$/, "") || p.endsWith(u),
    );
  }

  function renderBlockOverlay() {
    const id = "sub-block-overlay";
    let el = document.getElementById(id);
    const locked = isLocked();
    if (!locked || isUnlockedPage()) {
      if (el) el.remove();
      return;
    }
    if (el) return;
    const s = cachedStatus || {};
    const isTrial = s.reason === "trial_expired";
    const title = isTrial ? "免費試用已結束" : "訂閱已到期";
    const desc = isTrial
      ? "7 天試用期滿,訂閱後即可繼續使用全部功能。"
      : "續訂後即可繼續使用全部功能。";
    // 首頁相對路徑: 從子目錄 (exam/、ya3/) 要回上一層
    const depth = (location.pathname.match(/\//g) || []).length - 1;
    const base = depth > 0 ? "../".repeat(depth) : "./";
    el = document.createElement("div");
    el.id = id;
    el.innerHTML = `
      <div class="sbo-card">
        <div class="sbo-emoji">🔒</div>
        <h2>${title}</h2>
        <p>${desc}<br><b>妳的筆記本、標記題、做題紀錄都保留著</b>,開通後原樣恢復。</p>
        <a href="${base}subscribe.html" class="sbo-btn">前往訂閱</a>
        <p class="sbo-sub"><a href="${base}rewards.html">有兌換序號?</a> · <a href="${base}index.html">回首頁</a></p>
      </div>`;
    document.body.appendChild(el);
  }

  // 首頁: 過期時把練習本 / 筆記本 / 口訣入口卡標 🔒 並導去訂閱
  function markHomeCards() {
    if (!isUnlockedPage()) return;
    const locked = isLocked();
    document
      .querySelectorAll(
        'a.card[href^="exam/"], a.card[href="mnemonics.html"], a.card[href^="ya"]',
      )
      .forEach((a) => {
        const nameEl = a.querySelector(".name");
        if (!nameEl) return;
        let tag = nameEl.querySelector(".sub-lock-tag");
        if (locked) {
          if (!tag) {
            tag = document.createElement("span");
            tag.className = "sub-lock-tag";
            tag.textContent = "🔒 需訂閱";
            nameEl.appendChild(tag);
          }
          if (!a.dataset.subLockBound) {
            a.dataset.subLockBound = "1";
            a.addEventListener("click", (e) => {
              if (!isLocked()) return;
              e.preventDefault();
              location.href = "subscribe.html";
            });
          }
          a.classList.add("sub-card-locked");
        } else {
          if (tag) tag.remove();
          a.classList.remove("sub-card-locked");
        }
      });
  }

  async function refreshAndRender() {
    await getStatus();
    renderBadge();
    applyBodyClass();
    renderBlockOverlay();
    markHomeCards();
    changeCbs.forEach((cb) => {
      try {
        cb(cachedStatus);
      } catch (e) {}
    });
  }

  window.Subscription = {
    getStatus: getStatus,
    canSee: canSee,
    isLocked: isLocked,
    renderBadge: renderBadge,
    refresh: refreshAndRender,
    onChange: function (cb) {
      if (typeof cb === "function") changeCbs.push(cb);
    },
    _cache: function () {
      return cachedStatus;
    },
  };

  // Subscribe Auth changes → auto refresh
  function subscribe() {
    if (window.Auth && window.Auth.onChange) {
      window.Auth.onChange(function () {
        setTimeout(refreshAndRender, 500); // 等 profile 寫入 firebase
      });
    } else {
      setTimeout(subscribe, 300);
    }
  }
  subscribe();

  // CSS
  const css = `
.sub-b { display: inline-flex; align-items: center; gap: .35rem; padding: .18rem .45rem .18rem .55rem; border-radius: 999px; font-size: .75rem; font-weight: 600; border: 1px solid transparent; white-space: nowrap; }
.sub-b span { line-height: 1; }
.sub-b b { font-weight: 700; }
.sub-b-trial { background: #e0f2fe; color: #0369a1; border-color: #bae6fd; }
.sub-b-paid { background: linear-gradient(135deg, #fef3c7, #fde68a); color: #92400e; border-color: #fbbf24; }
.sub-b-warn { background: #fef3c7; color: #92400e; border-color: #fbbf24; }
.sub-b-expired { background: #fee2e2; color: #991b1b; border-color: #fca5a5; }
.sub-b-btn { display: inline-block; margin-left: .3rem; padding: .1rem .5rem; background: #dc2626; color: #fff !important; border-radius: 999px; font-size: .7rem; text-decoration: none !important; font-weight: 700; }
.sub-b-btn:hover { background: #b91c1c; }
.sub-b-paid .sub-b-btn { background: #7c2d12; }

/* v512: 詳解 gate — 試用/訂閱過期時鎖詳解 */
body.sub-locked details.gemini-expl > div,
body.sub-locked details.nb-expl > div,
body.sub-locked details.expl-block > div {
  position: relative;
  overflow: hidden;
  min-height: 80px;
  max-height: 200px;
}
body.sub-locked details.gemini-expl > div > *,
body.sub-locked details.nb-expl > div > *,
body.sub-locked details.expl-block > div > * {
  filter: blur(5px);
  user-select: none;
  pointer-events: none;
}
body.sub-locked details.gemini-expl > div::after,
body.sub-locked details.nb-expl > div::after,
body.sub-locked details.expl-block > div::after {
  content: "🔒 訂閱後看完整詳解 (試用已結束)";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255,255,255,.4) 0%, rgba(255,255,255,.96) 40%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .95rem;
  font-weight: 700;
  color: #7c3aed;
  z-index: 10;
  padding: 1rem;
  text-align: center;
}
/* v537: 全鎖 overlay */
#sub-block-overlay {
  position: fixed; inset: 0; z-index: 99998;
  background: rgba(30, 20, 10, .78); backdrop-filter: blur(6px);
  display: flex; align-items: center; justify-content: center; padding: 1rem;
}
#sub-block-overlay .sbo-card {
  background: #fff; border-radius: 14px; padding: 2rem 1.5rem; max-width: 440px;
  text-align: center; box-shadow: 0 20px 60px rgba(0,0,0,.4);
}
#sub-block-overlay .sbo-emoji { font-size: 3rem; margin-bottom: .5rem; }
#sub-block-overlay h2 { font-size: 1.3rem; color: #dc2626; margin-bottom: .8rem; }
#sub-block-overlay p { color: #4b5563; line-height: 1.7; margin-bottom: 1rem; font-size: .93rem; }
#sub-block-overlay p b { color: #16a34a; }
#sub-block-overlay .sbo-btn {
  display: inline-block; padding: .8rem 1.6rem;
  background: linear-gradient(135deg, #7c3aed, #6d28d9); color: #fff !important;
  border-radius: 999px; text-decoration: none !important; font-weight: 700; font-size: .95rem;
  margin: .5rem 0 1rem;
}
#sub-block-overlay .sbo-sub { font-size: .78rem; color: #9ca3af; margin: 0; }
#sub-block-overlay .sbo-sub a { color: #7c3aed; text-decoration: underline; }
/* 首頁入口卡 🔒 標記 */
.sub-lock-tag {
  display: inline-block; margin-left: .45rem; padding: .12rem .5rem;
  background: #fee2e2; color: #991b1b; border-radius: 999px;
  font-size: .68rem; font-weight: 700; vertical-align: middle;
}
a.card.sub-card-locked { opacity: .7; filter: grayscale(.35); }

body.sub-locked .sub-unlock-btn {
  display: inline-block;
  margin: .5rem auto;
  padding: .6rem 1.2rem;
  background: #7c3aed;
  color: #fff !important;
  border-radius: 999px;
  text-decoration: none !important;
  font-weight: 700;
  font-size: .9rem;
}
`;
  if (!document.getElementById("sub-css")) {
    const s = document.createElement("style");
    s.id = "sub-css";
    s.textContent = css;
    document.head.appendChild(s);
  }
})();
