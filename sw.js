importScripts('./version.js');
const CACHE_NAME = 'dental-all-' + self.APP_VERSION + '-close-overlay-auto-scan';
const PRECACHE = [
  './',
  './index.html',
  './mnemonics.html',
  './themes.css',
  './version.js',
  './ya3/index.html',
  './ya3/ya3-data.js',
  './ya4/index.html',
  './ya4/os-data.js',
  './ya4/rad-data.js',
  './ya4/diagrams.js',
  './ya5/index.html',
  './ya5/prostho-data.js',
  './ya6/index.html',
  './ya6/ya6-data.js',
  './ya3/tw3-data.js',
  './ya4/tw4-data.js',
  './ya5/tw5-data.js',
  './ya6/tw6-data.js',
  './sync.js',
  './exam/index.html',
  './exam/questions-data.js',
  './exam/compare.html',
  './exam/numbers.html',
  './exam/flashcards.html',
  './exam/duplicates.html',
];

self.addEventListener('install', e => {
  // Precache individually — don't let one 404 block the whole install
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      Promise.all(PRECACHE.map(url =>
        cache.add(url).catch(() => console.warn('SW precache skip:', url))
      ))
    )
  );
  self.skipWaiting();
});

// Allow pages to force-activate a waiting SW
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim()).then(() => {
      // 🛡 v308:新版啟動後通知所有開啟的分頁,讓他們秀「新版本已就緒」toast
      self.clients.matchAll({ includeUncontrolled: true }).then(cs => {
        cs.forEach(c => c.postMessage({ type: 'NEW_VERSION_READY', cache: CACHE_NAME }));
      });
    })
  );
});

// Data files that update frequently → network first, fall back to cache
const NETWORK_FIRST = [
  'questions-data.js',
  'ya3-data.js',
  'prostho-data.js',
  'os-data.js',
  'rad-data.js',
  'ya6-data.js',
  'diagrams.js',
  'tw3-data.js',
  'tw4-data.js',
  'tw5-data.js',
  'tw6-data.js',
];

function isDataFile(url) {
  return NETWORK_FIRST.some(f => url.includes(f));
}

self.addEventListener('fetch', e => {
  // 只處理 http/https,跳過 chrome-extension:// / file:// 等不支援 cache 的 scheme
  if (!e.request.url.startsWith('http')) return;
  if (e.request.url.includes('supabase')) return;
  if (e.request.url.includes('firebase') || e.request.url.includes('firebaseio')) return;
  // 第三方 CDN(TipTap ESM、gstatic 等)直接交給瀏覽器,不過 SW
  // 否則 fetch 失敗時 fallback 到 index.html 會回 HTML,導致 ESM 模組載入失敗
  if (e.request.url.includes('esm.sh') ||
      e.request.url.includes('unpkg.com') ||
      e.request.url.includes('cdn.jsdelivr.net') ||
      e.request.url.includes('gstatic.com')) return;
  // v318:口訣區從 GitHub 拉資料,SW 不要攔(避免快取出髒資料,Safari Tahoe ITP 也可能讓快取錯亂)
  if (e.request.url.includes('raw.githubusercontent.com') ||
      e.request.url.includes('api.github.com')) return;

  if (isDataFile(e.request.url)) {
    // Network first for data files (題庫、各科 data 要拿最新)
    e.respondWith(
      fetch(e.request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return res;
      }).catch(() => caches.match(e.request))
    );
    return;
  }

  // 🚀 v308:靜態檔(HTML / CSS / JS) 改用 stale-while-revalidate
  //         立刻回 cache → 同時背景拉新版更新 cache → 下次更新
  //         好處:第二次以後打開幾乎瞬間;網路慢也不會卡
  e.respondWith(
    caches.match(e.request).then(cached => {
      const fetchPromise = fetch(e.request).then(res => {
        if (res.ok && e.request.method === 'GET') {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return res;
      }).catch(() => cached || caches.match('./index.html'));
      // 有 cache 就立刻回(fast path),沒 cache 才等網路
      return cached || fetchPromise;
    })
  );
});
