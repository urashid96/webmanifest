var cacheName ='petstore-v1';
var
cacheFiles = [
    'index.html',
    'products.js',
    'petstore.webmanifest',
    'images/Cat Bed.jpg',
    'images/Cat Litter.jpg',
    'images/Cat Scratching Post.jpg',
    'images/product-fullsize.png',
    ];
        self.addEventListener('install',(e) => {
        console.log('[Service Worker] Install'); 
        e.waitUntil(
            caches.open(cacheName).then((cache) => {
                console.log('[Service Worker] Caching all the files');
                return cache.addAll(cacheFiles); 
            }) 
        ); 
    });
    self.addEventListener('fetch',function (e) {
         e.respondWith(
        // check if the cache has the file
        caches.match(e.request).then(function (r) {
            console.log('[Service Worker] Fetching resource: '
                + e.request.url);
            // 'r' is the matching file if it exists in the cache
            return r 
        }) 
    ); 
});