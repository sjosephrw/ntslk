console.log("Hello from sw.js");

const staticCacheName = "site-static-v1";

const assets = [
  "/",
  "/main.js",
  "/styles.css",
  "https://use.fontawesome.com/releases/v5.13.0/css/all.css",
  "https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap"
];

self.addEventListener("install", event => {
  console.log("Service Worker installing.");
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      console.log("Caching all shell assets!");
      cache.addAll(assets);
    })
  );
});

self.addEventListener("activate", event => {
  console.log("Service Worker activating.");
  event.waitUntil(
    caches.keys().then(keys => {
      console.log("Cached keys!", keys);
        return Promise.all(keys.filter(key => key !== staticCacheName).map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", event => {
  console.log("Fetch.", event);
  event.respondWith(
    caches.match(event.request).then(cacheRes => {
      return cacheRes || fetch(event.request);
    })
  );
});
