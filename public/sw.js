const ASSETS_CACHE_NAME = 'assets-cache-v1';

const ASSETS_TO_CACHE = [
    "_next/static"
]


self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activating.');
});

self.addEventListener('fetch', (event) => {
    console.log('Fetching:', event.request.url);
    // Check if the request is for a file in the _next/static directory
    if (event.request.url.includes('_next/static')) {
        event.respondWith(
            (async () => {
                const cachedResponse = await caches.match(event.request);
                if (cachedResponse) {
                    return cachedResponse;
                }
                const fetchResponse = await fetch(event.request);
                const cache = await caches.open(ASSETS_CACHE_NAME);
                await cache.put(event.request, fetchResponse.clone());
                return fetchResponse;
            })()
        );
    } else {
        event.respondWith(fetch(event.request));
    }
});