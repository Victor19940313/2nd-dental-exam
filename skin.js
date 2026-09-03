// ═══════════════════════════════════════════════════════════════
//  skin.js — 全站「風格」切換 (v550)
//  ─ 使用者在左下角 🎨 下拉選單選一種風格，存 localStorage.dental_skin (裝置層級，不分帳號)
//  ─ 套用方式: <html data-skin="kawaii">,樣式全部在 skin.css 用 html[data-skin=…] 覆蓋
//  ─ 沒選 (classic) 時 data-skin 不存在 → skin.css 完全不生效，網站跟原本一模一樣
//  ─ 跟練習本/口訣區原有的「配色」(body.theme-xxx, {uid}_nb_theme) 是兩層，互不影響
//  載入位置: <head> 內、version.js 之後 (同步載，避免先閃原本樣式)
// ═══════════════════════════════════════════════════════════════
(function () {
  var KEY = "dental_skin";
  var SKINS = [
    { id: "classic", name: "經典（原本）", em: "🦷", fonts: "" },
    { id: "kawaii", name: "可愛風", em: "🎀", fonts: "Baloo+2:wght@600;800" },
    { id: "toon", name: "動畫電影風", em: "🎈", fonts: "Fredoka:wght@600;700" },
    {
      id: "notebook",
      name: "手繪筆記本",
      em: "✏️",
      fonts: "LXGW+WenKai+TC:wght@400;700",
    },
    { id: "stationery", name: "韓系文具", em: "🧸", fonts: "Gowun+Dodum" },
    { id: "clinic", name: "診所清爽", em: "🩺", fonts: "" },
    {
      id: "watercolor",
      name: "水彩暈染",
      em: "🎨",
      fonts: "Noto+Serif+TC:wght@600;900",
    },
  ];
  var byId = {};
  SKINS.forEach(function (s) {
    byId[s.id] = s;
  });

  // v551: 每個帳號各自記。key = dental_skin:{uid};沒登入用 dental_skin (裝置層級)
  function uid() {
    try {
      var u = localStorage.getItem("dental_cur_user");
      return u && /^[A-Za-z0-9]{20,}$/.test(u) ? u : "";
    } catch (e) {
      return "";
    }
  }
  function storageKey() {
    var u = uid();
    return u ? KEY + ":" + u : KEY;
  }
  function read() {
    try {
      var v = localStorage.getItem(storageKey());
      if (!v && uid()) v = localStorage.getItem(KEY); // 剛登入第一次: 沿用裝置的
      return v && byId[v] ? v : "classic";
    } catch (e) {
      return "classic";
    }
  }
  // 存到雲端 users/{uid}/profile/skin (小欄位),換裝置登入也跟著
  function saveRemote(id) {
    try {
      var u = uid();
      if (!u || !window.firebase || !firebase.apps || !firebase.apps.length) return;
      var user = firebase.auth && firebase.auth().currentUser;
      if (!user || user.uid !== u) return;
      firebase
        .database()
        .ref("users/" + u + "/profile/skin")
        .set(id)
        .catch(function () {});
    } catch (e) {}
  }
  function loadRemote() {
    try {
      var u = uid();
      if (!u || !window.firebase || !firebase.apps || !firebase.apps.length) return;
      firebase
        .database()
        .ref("users/" + u + "/profile/skin")
        .once("value")
        .then(function (snap) {
          var v = snap.val();
          if (v && byId[v] && v !== read()) {
            apply(v, false);
            try {
              localStorage.setItem(storageKey(), v);
            } catch (e) {}
          }
        })
        .catch(function () {});
    } catch (e) {}
  }

  function ensureFont(id) {
    var s = byId[id];
    if (!s || !s.fonts) return;
    var lid = "skin-font-" + id;
    if (document.getElementById(lid)) return;
    var l = document.createElement("link");
    l.id = lid;
    l.rel = "stylesheet";
    l.href =
      "https://fonts.googleapis.com/css2?family=" + s.fonts + "&display=swap";
    (document.head || document.documentElement).appendChild(l);
  }

  function ensureDeco(id) {
    // 水彩: 三團暈染 / 動畫: 一朵雲。其他風格不放裝飾。
    var old = document.getElementById("skin-deco");
    if (old) old.remove();
    if (!document.body) return;
    var html = "";
    if (id === "watercolor")
      html =
        '<i class="sk-blob sk-b1"></i><i class="sk-blob sk-b2"></i><i class="sk-blob sk-b3"></i>';
    else if (id === "toon") html = '<i class="sk-cloud"></i>';
    if (!html) return;
    var d = document.createElement("div");
    d.id = "skin-deco";
    d.setAttribute("aria-hidden", "true");
    d.innerHTML = html;
    document.body.appendChild(d);
  }

  // v560: 首頁 hero 插圖 (只有首頁有 #hero-art),每種風格一張,SVG 直接畫，不載外部圖
  var TOOTH =
    '<svg viewBox="0 0 120 120"><path d="M32 18c14-10 42-10 56 0 14 10 12 34 4 56-4 12-8 34-16 34s-8-22-16-22-8 22-16 22-12-22-16-34C20 52 18 28 32 18z" fill="FILL" stroke="STROKE" stroke-width="3.5" stroke-linejoin="round"/><circle cx="46" cy="52" r="3.5" fill="STROKE"/><circle cx="74" cy="52" r="3.5" fill="STROKE"/><path d="M52 64q8 7 16 0" fill="none" stroke="STROKE" stroke-width="3" stroke-linecap="round"/><circle cx="38" cy="62" r="5" fill="CHEEK" opacity=".9"/><circle cx="82" cy="62" r="5" fill="CHEEK" opacity=".9"/></svg>';
  var ART = {
    kawaii: TOOTH.replace(/FILL/g, "#fff").replace(/STROKE/g, "#4a3b4b").replace(/CHEEK/g, "#ffb3c6"),
    toon: TOOTH.replace(/FILL/g, "#fff").replace(/STROKE/g, "#1c63b8").replace(/CHEEK/g, "#ffc63a"),
    clinic: TOOTH.replace(/FILL/g, "#fff").replace(/STROKE/g, "#1b7fc4").replace(/CHEEK/g, "#bfe3f2"),
    stationery: TOOTH.replace(/FILL/g, "#fff").replace(/STROKE/g, "#a67c6d").replace(/CHEEK/g, "#f3c9b8"),
    watercolor: TOOTH.replace(/FILL/g, "#fff").replace(/STROKE/g, "#c48a9b").replace(/CHEEK/g, "#f9c5d1"),
    notebook: "<svg viewBox=\"0 0 120 120\"><g transform=\"rotate(6 60 60)\"><rect x=\"18\" y=\"22\" width=\"84\" height=\"80\" fill=\"#fff3a3\"/><rect x=\"40\" y=\"12\" width=\"40\" height=\"16\" fill=\"rgba(200,220,240,.8)\" transform=\"rotate(-6 60 20)\"/><text x=\"60\" y=\"56\" text-anchor=\"middle\" font-family=\"LXGW WenKai TC, Noto Sans TC, sans-serif\" font-size=\"17\" fill=\"#5b4a00\">今天也要</text><text x=\"60\" y=\"82\" text-anchor=\"middle\" font-family=\"LXGW WenKai TC, Noto Sans TC, sans-serif\" font-size=\"17\" fill=\"#5b4a00\">念一點！</text></g></svg>",
  };
  function ensureArt(id) {
    var el = document.getElementById("hero-art");
    if (!el) return;
    el.innerHTML = ART[id] || "";
  }

  function apply(id, save) {
    if (!byId[id]) id = "classic";
    if (id === "classic") document.documentElement.removeAttribute("data-skin");
    else {
      document.documentElement.setAttribute("data-skin", id);
      ensureFont(id);
    }
    if (save) {
      try {
        localStorage.setItem(storageKey(), id);
        localStorage.setItem(KEY, id); // 裝置預設也更新 (未登入/新帳號第一次用)
      } catch (e) {}
      saveRemote(id);
    }
    ensureDeco(id);
    ensureArt(id);
    var cur = document.getElementById("skin-picker-cur");
    if (cur) cur.textContent = byId[id].em;
    document.querySelectorAll("#skin-menu button").forEach(function (b) {
      b.setAttribute("aria-checked", b.dataset.skin === id ? "true" : "false");
    });
  }

  // ── 左下角選單 ──
  function buildPicker() {
    if (document.getElementById("skin-picker")) return;
    var id = read();
    var wrap = document.createElement("div");
    wrap.id = "skin-picker";
    wrap.innerHTML =
      '<button type="button" id="skin-picker-btn" title="切換網站風格" aria-haspopup="listbox" aria-expanded="false">' +
      '<span id="skin-picker-cur">' +
      byId[id].em +
      "</span></button>" +
      '<div id="skin-menu" role="listbox" hidden><div class="sk-menu-title">網站風格</div>' +
      SKINS.map(function (s) {
        return (
          '<button type="button" role="option" data-skin="' +
          s.id +
          '" aria-checked="' +
          (s.id === id ? "true" : "false") +
          '"><span class="sk-em">' +
          s.em +
          "</span>" +
          s.name +
          "</button>"
        );
      }).join("") +
      "</div>";
    document.body.appendChild(wrap);
    var btn = document.getElementById("skin-picker-btn");
    var menu = document.getElementById("skin-menu");
    function close() {
      menu.hidden = true;
      btn.setAttribute("aria-expanded", "false");
    }
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = menu.hidden;
      menu.hidden = !open;
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-skin]");
      if (!b) return;
      apply(b.dataset.skin, true);
      close();
    });
    document.addEventListener("click", function (e) {
      if (!wrap.contains(e.target)) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  // 1. 先套 data-skin (head 階段，避免閃)
  apply(read(), false);
  // 2. body 好了再放選單 + 裝飾
  function onReady() {
    buildPicker();
    ensureDeco(read());
    ensureArt(read());
    // 登入狀態確定後: 換帳號要重讀該帳號的風格 + 拉雲端
    var hooked = false;
    function hookAuth() {
      if (hooked || !window.Auth || !window.Auth.onChange) return false;
      hooked = true;
      window.Auth.onChange(function () {
        apply(read(), false);
        loadRemote();
      });
      return true;
    }
    if (!hookAuth()) {
      var tries = 0;
      var t = setInterval(function () {
        if (hookAuth() || ++tries > 40) clearInterval(t);
      }, 250);
    }
  }
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", onReady);
  else onReady();
  // 3. 別的分頁改了 → 跟著換
  window.addEventListener("storage", function (e) {
    if (e.key && e.key.indexOf(KEY) === 0) apply(read(), false);
  });

  window.Skin = { apply: apply, current: read, list: SKINS };
})();
