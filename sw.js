// offline cache: network first so updates show up as soon as you're online, cache when not
const C = 'tasks-v1';
self.oninstall = e => { self.skipWaiting(); e.waitUntil(caches.open(C).then(c => c.addAll(['./', 'index.html', 'manifest.webmanifest', 'icon.png', 'icon-512.png']))); };
self.onactivate = e => e.waitUntil(clients.claim());
self.onfetch = e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(C).then(c => c.put(e.request, copy)); return r; }).catch(() => caches.match(e.request)));
};
