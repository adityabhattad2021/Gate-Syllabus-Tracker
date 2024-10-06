const CACHE_NAME = 'syllabigenius-static-assets-v1';


const STATIC_ASSETS_REGEX = /\/_next\/static\/.+\.(js|css|woff|woff2|svg|png|jpg|jpeg)$/;

self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activating.');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {

    if (event.request.method === 'GET' && STATIC_ASSETS_REGEX.test(event.request.url)) {
        event.respondWith(
            caches.open(CACHE_NAME).then((cache) => {
                return cache.match(event.request).then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }

                    return fetch(event.request).then((fetchedResponse) => {
                        if (fetchedResponse.ok) {
                            cache.put(event.request, fetchedResponse.clone());
                        }
                        return fetchedResponse;
                    });
                });
            })
        );
    }

});