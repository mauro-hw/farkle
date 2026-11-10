const CACHE = 'farkle-v3';
const FILES = ["./", "index.html", "manifest.webmanifest", "icons/icon.svg", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/apple-touch-icon.png", "icons/favicon-32.png", "fonts/grenze-gotisch-latin-ext-500-normal.woff2", "fonts/grenze-gotisch-latin-500-normal.woff2", "fonts/grenze-gotisch-latin-ext-700-normal.woff2", "fonts/grenze-gotisch-latin-700-normal.woff2", "fonts/alegreya-sans-latin-ext-400-normal.woff2", "fonts/alegreya-sans-latin-400-normal.woff2", "fonts/alegreya-sans-latin-ext-500-normal.woff2", "fonts/alegreya-sans-latin-500-normal.woff2", "fonts/alegreya-sans-latin-ext-700-normal.woff2", "fonts/alegreya-sans-latin-700-normal.woff2"];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Serve from the cache straight away (works offline) and refresh the copy in the background,
// so a new version shows up the next time the app is opened.
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async cache => {
    const hit = await cache.match(req, {ignoreSearch: true});
    const net = fetch(req).then(res => { if (res.ok) cache.put(req, res.clone()); return res; }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    const res = await net;
    if (res) return res;
    if (req.mode === 'navigate') return (await cache.match('index.html')) || Response.error();
    return Response.error();
  }));
});
