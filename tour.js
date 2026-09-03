// ═══════════════════════════════════════════════════════════════
//  tour.js — 各頁「第一次使用教學」(v566)
//  ─ 聚光燈式:背景暗掉、只亮現在講的那個元件,底下小卡說明,可 上一步/下一步/跳過
//  ─ 每一頁 (或頁內的某個畫面) 一組步驟,元素不存在或看不到的步驟自動略過
//  ─ 每組只自動跑一次:localStorage tour_done:{id} (裝置層級);左下角 ❓ 可隨時重看
//  ─ 有登入/訂閱鎖 overlay 在時不啟動 (等使用者進到真正畫面再教)
//  載入位置:</body> 前 (需要 DOM);對外 window.Tour = { start(id), reset(id), list() }
// ═══════════════════════════════════════════════════════════════
(function () {
  var CSS =
    "#tour-spot{position:absolute;z-index:13000;border-radius:14px;box-shadow:0 0 0 9999px rgba(20,18,30,.62),0 0 0 3px #fff,0 0 22px rgba(255,255,255,.35);pointer-events:none;transition:all .28s ease}" +
    "#tour-card{position:absolute;z-index:13001;width:min(320px,calc(100vw - 32px));background:#fff;color:#1f2937;border-radius:16px;padding:.95rem 1.05rem 1rem;box-shadow:0 12px 40px rgba(0,0,0,.35);font-family:'Noto Sans TC',system-ui,sans-serif;font-size:.92rem;line-height:1.6}" +
    "#tour-card .tc-step{font-size:.7rem;color:#9ca3af;letter-spacing:.08em;margin-bottom:.25rem}" +
    "#tour-card .tc-title{font-weight:900;font-size:1.02rem;margin-bottom:.3rem}" +
    "#tour-card .tc-body{color:#4b5563;font-size:.88rem}" +
    "#tour-card .tc-btns{display:flex;gap:.45rem;margin-top:.8rem;align-items:center}" +
    "#tour-card button{font:inherit;font-size:.84rem;font-weight:700;border-radius:999px;padding:.4rem .95rem;cursor:pointer;border:1.5px solid #e5e7eb;background:#fff;color:#374151}" +
    "#tour-card .tc-next{background:#7c3aed;border-color:#7c3aed;color:#fff;margin-left:auto}" +
    "#tour-card .tc-skip{border:0;color:#9ca3af;padding-left:.2rem}" +
    "#tour-card::before{content:'';position:absolute;width:14px;height:14px;background:#fff;transform:rotate(45deg);left:28px}" +
    "#tour-card.below::before{top:-7px}#tour-card.above::before{bottom:-7px}" +
    "#tour-help{position:fixed;left:12px;bottom:62px;z-index:12000;width:40px;height:40px;border-radius:50%;border:1.5px solid rgba(0,0,0,.12);background:#fff;box-shadow:0 3px 10px rgba(0,0,0,.15);cursor:pointer;font-size:1.1rem;display:grid;place-items:center;padding:0;font-family:system-ui}" +
    "#tour-help:hover{transform:scale(1.06)}" +
    "@media (max-width:899px){#tour-help{left:0;bottom:auto;top:calc(46vh + 44px);width:30px;height:36px;border-radius:0 12px 12px 0;border-left:0;font-size:.95rem;opacity:.85}}" +
    "@media print{#tour-help,#tour-spot,#tour-card{display:none!important}}" +
    "body.tour-open{overflow:hidden}";

  // ── 每頁的步驤 ──
  // s = 選擇器, t = 標題, b = 說明。trigger = 這組要在哪個元素看得到時才跑 (沒寫 = 頁面載入)
  var TOURS = {
    home: {
      match: function (p) {
        return (
          /(^|\/)(index\.html)?$/.test(p) &&
          !/\/(exam|ya\d|story|game)\//.test(p)
        );
      },
      trigger: "#main-content",
      steps: [
        {
          s: ".hero-cta",
          t: "先看這裡",
          b: "作者怎麼用這個網站、一個半月考到平均 80 分。第一次來建議先花兩分鐘看完。",
        },
        {
          s: ".countdown",
          t: "距離下次國考",
          b: "每天打開都提醒你還剩幾天,粗估值,精確日期以考選部公告為準。",
        },
        {
          s: 'a.card[href^="exam/"]',
          t: "練習本 — 主戰場",
          b: "6720 題歷屆試題。照試卷練或照考點練,每題都能標記,錯的會自動整理。",
        },
        {
          s: 'a.card[href$="#notebook"]',
          t: "我的筆記本",
          b: "做題時把題目丟進來,AI 幫你整理成共筆等級的筆記,類似題會串在一起。",
        },
        {
          s: 'a.card[href="mnemonics.html"]',
          t: "口訣區",
          b: "牙三到牙六分科,大家一起寫口訣,有版本歷史。",
        },
        {
          s: 'a.card[href="subscribe.html"]',
          t: "訂閱方案",
          b: "免費試用 7 天,之後在這裡續。想支持作者也是這裡。",
        },
        {
          s: 'a.card[href="rewards.html"]',
          t: "我的獎勵",
          b: "推薦朋友訂閱,你會自動收到 30 天序號,可以自己用或送人。",
        },
        {
          s: "#skin-picker-btn",
          t: "換個風格",
          b: "左下角這顆可以切換六種網站風格,選了會記住。旁邊的 ❓ 隨時可以重看教學。",
        },
      ],
    },
    examHome: {
      match: function (p) {
        return /\/exam\/(index\.html)?$/.test(p);
      },
      trigger: "#screen-home .home-modes",
      steps: [
        {
          s: "#hm-paper",
          t: "照試卷練",
          b: "選一份年度試卷,80 題完整走一遍。適合模擬考、抓手感。",
        },
        {
          s: "#hm-topic",
          t: "照考點練 — 最厲害的功能之一",
          b: "挑一個考點,把十年來同一個觀念的題目一次寫熟。每個考點做過幾題、錯誤率多少一眼看到。",
        },
        {
          s: "#home-how",
          t: "作答方式",
          b: "邊做邊看答案,或模擬考交卷才看。隨機、計時在這裡勾。",
        },
        {
          s: "#home-start",
          t: "開始",
          b: "這裡會告訴你目前條件符合幾題,按下去就開始。",
        },
        {
          s: "#stats-card",
          t: "你的標記統計",
          b: "簡單 / 猜的 / 再努力 / 送他吧 各有幾題,一目了然。",
        },
        {
          s: "#btn-wrongbook",
          t: "錯題本",
          b: "做錯的、標記的題目都收在這裡,考前回來掃一遍。",
        },
        {
          s: "#btn-notebook",
          t: "筆記本",
          b: "AI 幫你做的筆記在這裡,跨章節搜尋。",
        },
      ],
    },
    examPractice: {
      match: function (p) {
        return /\/exam\/(index\.html)?$/.test(p);
      },
      trigger: "#screen-practice #pq-options",
      steps: [
        {
          s: "#pq-options",
          t: "選項可以劃線、螢光筆",
          b: "點選項文字一下是刪去線、再點一下是螢光筆,像在紙本上作記號,下次回來還在。",
        },
        {
          s: "#btn-similar-qs-top",
          t: "右上角:10 題類似題",
          b: "一題卡住?點這裡拉出同一個觀念最像的 10 題,一次把這個洞補起來。",
        },
        {
          s: "#ans-0",
          t: "按 A B C D 作答",
          b: "答完立刻看對錯與詳解 (模擬考模式則交卷才看)。",
        },
        {
          s: ".mark-row",
          t: "標記這一題",
          b: "🚩 收進錯題本;🟢 簡單 🤔 猜的 🟡 再努力 🔴 送他吧,之後可以只練某一種。",
        },
        {
          s: "#btn-add-notebook",
          t: "加入筆記本",
          b: "這題值得記?丟進筆記本,AI 在背景幫你整理,不會打斷作答。",
        },
        {
          s: ".nav-row",
          t: "下一題",
          b: "底下這排:回考試首頁、跳過、下一題。答完會自動出現「下一題」。",
        },
      ],
    },
    mnemonics: {
      match: function (p) {
        return /\/mnemonics\.html$/.test(p);
      },
      trigger: ".subject-tabs",
      steps: [
        { s: ".subject-tabs", t: "選科目", b: "牙三到牙六,每科各自一份口訣。" },
        {
          s: ".search-row",
          t: "跨科搜尋",
          b: "記得關鍵字就直接搜,四科一起找。",
        },
        {
          s: ".chapter-list",
          t: "章節列表",
          b: "點一個章節,內容會出現在下面 (手機會自動捲過去)。",
        },
        {
          s: ".editor-card",
          t: "口訣內容",
          b: "有編輯權的人可以在這裡寫;其他人可看、可留言。",
        },
        {
          s: ".comments-open-btn",
          t: "留言",
          b: "對這章有想法或補充,留言給大家。",
        },
      ],
    },
    subscribe: {
      match: function (p) {
        return /\/subscribe\.html$/.test(p);
      },
      trigger: "#plans",
      steps: [
        {
          s: "#status-card",
          t: "你的狀態",
          b: "試用還剩幾天、會員到哪天,都在這裡。",
        },
        {
          s: "#plans",
          t: "選方案",
          b: "月費 / 季費 / 半年,選了下面會出現匯款資訊。",
        },
        {
          s: "#redeem-box",
          t: "有序號?",
          b: "推薦獎勵或朋友送的序號,在這裡輸入直接開通 30 天。",
        },
      ],
    },
    rewards: {
      match: function (p) {
        return /\/rewards\.html$/.test(p);
      },
      trigger: "#rewards-list",
      steps: [
        {
          s: ".hint",
          t: "怎麼拿獎勵",
          b: "朋友訂閱時填你的 Google email 當推薦人,開通後你會自動收到 30 天序號。",
        },
        {
          s: "#rewards-list",
          t: "你的序號",
          b: "在這裡直接「續命 30 天」自己用,或複製送人。",
        },
      ],
    },
    feedback: {
      match: function (p) {
        return /\/feedback\.html$/.test(p);
      },
      trigger: ".type-row",
      steps: [
        {
          s: ".type-row",
          t: "許願或回報 Bug",
          b: "選一個類型。作者有時間一定第一時間處理。",
        },
        {
          s: "textarea",
          t: "寫下來",
          b: "越具體越好:哪一頁、哪一題、發生什麼事。",
        },
      ],
    },
    devices: {
      match: function (p) {
        return /\/devices\.html$/.test(p);
      },
      trigger: "#device-list, .device-row",
      steps: [
        {
          s: "#device-list, .device-row",
          t: "你的裝置",
          b: "同一帳號最多三台。多出來的會被自動登出,也可以在這裡手動移除。",
        },
      ],
    },
    subject: {
      match: function (p) {
        return /\/ya[3-6]\/(index\.html)?$/.test(p);
      },
      trigger: ".home-cards",
      steps: [
        {
          s: ".home-cards",
          t: "選一個分科",
          b: "點進去是這科的互動筆記:左邊目錄、右邊內容,依出題頻率標色。",
        },
      ],
    },
    subjectSection: {
      match: function (p) {
        return /\/ya[3-6]\/(index\.html)?$/.test(p);
      },
      trigger: ".section-view .content-body, .content-body",
      steps: [
        {
          s: ".menu-btn, .sidebar",
          t: "目錄",
          b: "章節目錄在這裡 (手機是左上角 ☰)。紅點是極高頻必考。",
        },
        { s: ".search-box", t: "搜尋", b: "輸入關鍵字,直接跳到那一段。" },
        { s: ".review-btn", t: "讀完打勾", b: "讀完一節按一下,進度會記住。" },
      ],
    },
    story: {
      match: function (p) {
        return /\/story\/(index\.html)?$/.test(p);
      },
      trigger: ".book-grid",
      steps: [
        {
          s: ".book-grid",
          t: "選一本故事書",
          b: "用醫師和學生的對話把難懂的觀念講成故事,先懂再背。灰色的是即將推出。",
        },
      ],
    },
  };

  var KEY = "tour_done:";
  var active = null; // {id, steps, i}
  var els = {};

  function done(id) {
    try {
      return localStorage.getItem(KEY + id) === "1";
    } catch (e) {
      return false;
    }
  }
  function markDone(id) {
    try {
      localStorage.setItem(KEY + id, "1");
    } catch (e) {}
  }
  function visible(el) {
    if (!el) return false;
    var r = el.getBoundingClientRect();
    return (
      r.width > 0 &&
      r.height > 0 &&
      getComputedStyle(el).visibility !== "hidden"
    );
  }
  function q(sel) {
    var list = sel.split(",");
    for (var i = 0; i < list.length; i++) {
      var els2 = document.querySelectorAll(list[i].trim());
      for (var j = 0; j < els2.length; j++)
        if (visible(els2[j])) return els2[j];
    }
    return null;
  }
  function blocked() {
    var o = document.getElementById("sub-block-overlay");
    if (o && visible(o)) return true;
    var u = document.getElementById("user-overlay");
    if (u && visible(u) && !u.classList.contains("hidden")) return true;
    var d = document.getElementById("device-block-overlay");
    if (d && visible(d)) return true;
    return false;
  }

  var cssDone = false;
  function injectCSS() {
    if (cssDone) return;
    cssDone = true;
    var st = document.createElement("style");
    st.textContent = CSS;
    document.head.appendChild(st);
  }
  function ensureEls() {
    injectCSS();
    if (!els.spot) {
      els.spot = document.createElement("div");
      els.spot.id = "tour-spot";
      els.card = document.createElement("div");
      els.card.id = "tour-card";
      els.card.innerHTML =
        '<div class="tc-step"></div><div class="tc-title"></div><div class="tc-body"></div>' +
        '<div class="tc-btns"><button type="button" class="tc-skip">跳過教學</button><button type="button" class="tc-prev">上一步</button><button type="button" class="tc-next">下一步</button></div>';
      els.card.querySelector(".tc-skip").onclick = function () {
        end(true);
      };
      els.card.querySelector(".tc-prev").onclick = function () {
        go(active.i - 1);
      };
      els.card.querySelector(".tc-next").onclick = function () {
        go(active.i + 1);
      };
      document.addEventListener("keydown", function (e) {
        if (!active) return;
        if (e.key === "Escape") end(true);
        if (e.key === "ArrowRight" || e.key === "Enter") go(active.i + 1);
        if (e.key === "ArrowLeft") go(active.i - 1);
      });
      window.addEventListener("resize", function () {
        if (active) place();
      });
      window.addEventListener(
        "scroll",
        function () {
          if (active) place();
        },
        true,
      );
    }
  }

  function start(id) {
    var t = TOURS[id];
    if (!t) return false;
    var steps = t.steps.filter(function (s) {
      return q(s.s);
    });
    if (!steps.length) return false;
    ensureEls();
    if (active) end(false);
    active = { id: id, steps: steps, i: 0 };
    document.body.appendChild(els.spot);
    document.body.appendChild(els.card);
    go(0);
    return true;
  }
  function go(i) {
    if (!active) return;
    if (i < 0) i = 0;
    if (i >= active.steps.length) {
      end(true);
      return;
    }
    active.i = i;
    var s = active.steps[i];
    var el = q(s.s);
    if (!el) {
      active.steps.splice(i, 1);
      if (!active.steps.length) return end(true);
      return go(Math.min(i, active.steps.length - 1));
    }
    active.el = el;
    els.card.querySelector(".tc-step").textContent =
      i + 1 + " / " + active.steps.length;
    els.card.querySelector(".tc-title").textContent = s.t;
    els.card.querySelector(".tc-body").textContent = s.b;
    els.card.querySelector(".tc-prev").style.visibility =
      i === 0 ? "hidden" : "visible";
    els.card.querySelector(".tc-next").textContent =
      i === active.steps.length - 1 ? "完成 ✓" : "下一步";
    try {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    } catch (e) {
      el.scrollIntoView();
    }
    setTimeout(place, 320);
    place();
  }
  function place() {
    if (!active || !active.el) return;
    var r = active.el.getBoundingClientRect();
    var pad = 8,
      sx = window.scrollX,
      sy = window.scrollY;
    els.spot.style.left = r.left + sx - pad + "px";
    els.spot.style.top = r.top + sy - pad + "px";
    els.spot.style.width = r.width + pad * 2 + "px";
    els.spot.style.height = r.height + pad * 2 + "px";
    var cw = els.card.offsetWidth || 320,
      ch = els.card.offsetHeight || 160;
    var below = r.bottom + 16 + ch < window.innerHeight || r.top - 16 - ch < 0;
    var top = below ? r.bottom + sy + 16 : r.top + sy - 16 - ch;
    var left = Math.max(
      16 + sx,
      Math.min(r.left + sx, window.innerWidth + sx - cw - 16),
    );
    els.card.className = below ? "below" : "above";
    els.card.style.left = left + "px";
    els.card.style.top = top + "px";
  }
  function end(mark) {
    if (!active) return;
    if (mark) markDone(active.id);
    active = null;
    if (els.spot && els.spot.parentNode)
      els.spot.parentNode.removeChild(els.spot);
    if (els.card && els.card.parentNode)
      els.card.parentNode.removeChild(els.card);
  }

  // ── 自動啟動:每 1.2 秒看一次有沒有「該跑、還沒跑過、觸發元素看得到」的教學 (一次只跑一組) ──
  var path = location.pathname;
  var mine = Object.keys(TOURS).filter(function (k) {
    return TOURS[k].match(path);
  });
  var pollN = 0;
  var poll = setInterval(function () {
    pollN++;
    if (pollN > 150) {
      clearInterval(poll);
      return;
    } // 3 分鐘後不再自動
    if (active || blocked()) return;
    for (var i = 0; i < mine.length; i++) {
      var k = mine[i];
      if (done(k)) continue;
      if (!q(TOURS[k].trigger)) continue;
      // 等 skin/首頁初始化一拍再開
      setTimeout(
        (function (kk) {
          return function () {
            if (!active && !done(kk) && q(TOURS[kk].trigger) && !blocked())
              start(kk);
          };
        })(k),
        900,
      );
      break;
    }
  }, 1200);

  // ── ❓ 重看教學 ──
  function buildHelp() {
    if (!mine.length || document.getElementById("tour-help")) return;
    injectCSS(); // v566: ❓ 鈕的樣式要先進來,不能等教學開始才注入
    var b = document.createElement("button");
    b.type = "button";
    b.id = "tour-help";
    b.title = "看這一頁的使用教學";
    b.textContent = "❓";
    b.onclick = function () {
      // 挑目前畫面上觸發元素看得到的那組;都沒有就第一組
      var pick = mine.filter(function (k) {
        return q(TOURS[k].trigger);
      });
      var k = pick.length ? pick[pick.length - 1] : mine[0];
      start(k);
    };
    document.body.appendChild(b);
  }
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", buildHelp);
  else buildHelp();

  window.Tour = {
    start: start,
    end: function () {
      end(false);
    },
    reset: function (id) {
      try {
        if (id) localStorage.removeItem(KEY + id);
        else
          Object.keys(TOURS).forEach(function (k) {
            localStorage.removeItem(KEY + k);
          });
      } catch (e) {}
    },
    list: function () {
      return mine.slice();
    },
    _active: function () {
      return active;
    },
  };
})();
