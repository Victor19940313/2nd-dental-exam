const CACHE_NAME = 'dental-all-v25';
const PRECACHE = [
  './',
  './index.html',
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
    )
  );
  self.clients.claim();
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
  if (e.request.url.includes('supabase')) return;
  if (e.request.url.includes('firebase') || e.request.url.includes('firebaseio')) return;

  if (isDataFile(e.request.url)) {
    // Network first for data files (get updates immediately)
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

  // Network first for ALL files — always get latest, fall back to cache offline
  e.respondWith(
    fetch(e.request).then(res => {
      if (res.ok && e.request.method === 'GET') {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
      }
      return res;
    }).catch(() => caches.match(e.request).then(c => c || caches.match('./index.html')))
  );
});
