// visitor-log.js — 訪客追蹤 + 爬蟲偵測 (v487)
// 每次頁面載入寫一筆到 Firebase traffic_log
// Fire-and-forget: 完全不阻塞、失敗不影響網站
//
// v711 (2026-09-14) HUA:「後台真的有如實記錄所有訪客嗎?」→ 沒有。
//   這支跑的時候 Firebase app 通常還沒 initializeApp (sync.js 是之後才 init、auth.js 排在這支後面),
//   firebase.database() 直接丟「No Firebase App」、被 swallow → 9 月幾乎一個訪客都沒記到
//   (Cloudflare 一天上百個獨立訪客,資料庫一天 0~2 筆)。改成「等到有 app 再寫」,最多等 15 秒。
//   IP 改先問同網域的 Cloudflare trace (不跨網域、不會被擋),失敗再退回 ipify。多記 host,入口網站跟牙醫站才分得開。
(function () {
  if (typeof firebase === "undefined" || !firebase.database) return;
  var BOT_PATTERNS =
    /bot|crawler|spider|scraper|GPTBot|ChatGPT|Claude|anthropic|Perplexity|Bytespider|CCBot|Amazonbot|SemrushBot|AhrefsBot|MJ12bot|DotBot|Diffbot|python-requests|python-urllib|libwww-perl|curl\/|wget\/|Java\/|Go-http|okhttp\/|node-fetch|axios\/|Headless|PhantomJS|Selenium|puppeteer|playwright/i;
  // 2026-09-11 HUA:「這些可疑爬蟲是什麼? 是你的測試嗎? 那不要顯示在上面啊」
  //   —— 是。我用 puppeteer 開真瀏覽器驗線上,每跑一次就寫一筆訪客紀錄進去,
  //   把她的統計洗掉了。自動化瀏覽器 (webdriver / Headless) 一律不記錄,
  //   真實使用者不會有這兩個特徵。爬蟲偵測本來就抓得到它們,現在直接連記都不記。
  try {
    if (
      navigator.webdriver === true ||
      /HeadlessChrome|puppeteer|playwright|Selenium|PhantomJS/i.test(
        navigator.userAgent || "",
      )
    )
      return;
  } catch (e) {}

  var tries = 0;
  function write() {
    try {
      if (!firebase.apps || !firebase.apps.length) {
        // app 還沒建好:等一下再試 (200ms × 75 = 15 秒),還是沒有就算了
        if (tries++ < 75) {
          setTimeout(write, 200);
          return;
        }
        return;
      }
      var db = firebase.database();
      var ua = navigator.userAgent || "";
      var isBot = false;
      var reasons = [];
      if (BOT_PATTERNS.test(ua)) {
        isBot = true;
        reasons.push("ua");
      }
      if (navigator.webdriver === true) {
        isBot = true;
        reasons.push("webdriver");
      }
      if (!ua) {
        isBot = true;
        reasons.push("empty_ua");
      }
      if (/HeadlessChrome/i.test(ua)) {
        isBot = true;
        reasons.push("headless");
      }
      // Chrome/Edge 應該有 window.chrome, 沒有 → 疑似假裝
      if (!window.chrome && /Chrome|Chromium|Edg/i.test(ua)) {
        isBot = true;
        reasons.push("no_chrome_obj");
      }
      // 找已登入 uid (若有)
      var uid = null;
      try {
        var cur = localStorage.getItem("dental_cur_user");
        if (cur) uid = cur;
        else {
          var users = JSON.parse(localStorage.getItem("dental_users") || "[]");
          uid = (users[0] && users[0].id) || null;
        }
      } catch (e) {}
      var payload = {
        ts: firebase.database.ServerValue.TIMESTAMP,
        ua: ua.slice(0, 300),
        host: (location.hostname || "").slice(0, 80),
        url: (location.pathname + location.search).slice(0, 200),
        ref: (document.referrer || "").slice(0, 200),
        tz: (Intl.DateTimeFormat().resolvedOptions().timeZone || "").slice(
          0,
          50,
        ),
        lang: (navigator.language || "").slice(0, 20),
        screen: (screen.width || 0) + "x" + (screen.height || 0),
        is_bot: isBot,
        bot_reason: reasons.join(","),
        uid: uid,
      };
      // Push 拿到 key, 之後補 IP
      var ref = db.ref("traffic_log").push();
      ref.set(payload).catch(function () {});
      // 抓 IP (async, 不阻塞):先問同網域的 Cloudflare trace,失敗再用 ipify
      fetch("/cdn-cgi/trace", { cache: "no-store" })
        .then(function (r) {
          if (!r.ok) throw new Error("trace " + r.status);
          return r.text();
        })
        .then(function (t) {
          var m = /^ip=(.+)$/m.exec(t || "");
          if (!m) throw new Error("no ip");
          return m[1].trim();
        })
        .catch(function () {
          return fetch("https://api.ipify.org?format=json", {
            cache: "no-store",
          })
            .then(function (r) {
              return r.json();
            })
            .then(function (d) {
              return d && d.ip;
            });
        })
        .then(function (ip) {
          if (ip)
            ref
              .child("ip")
              .set(String(ip).slice(0, 60))
              .catch(function () {});
        })
        .catch(function () {});
    } catch (e) {
      // 不能影響網站, 完全 swallow
    }
  }
  write();
})();
