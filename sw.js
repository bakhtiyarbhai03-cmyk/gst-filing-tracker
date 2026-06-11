const CACHE_NAME = 'height-meter-v2';
const urlsToCache = [
  './index.html',
  './manifest.json'
  './logo.png'
];

// Install and cache the files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Serve cached files when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return the cached file if found, otherwise fetch from network
        return response || fetch(event.request);
      })
  );
});
