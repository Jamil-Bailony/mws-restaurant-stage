var cacheName = 'restaurant-v3';

self.addEventListener('install', function(event) {

    event.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll([
          '/',
          'index.html',
          'restaurant.html',
          'css/styles.css',
          'css/responsive.css',
          'js/dbhelper.js',
          'js/main.js',
          'js/restaurant_info.js',
          'img/1.jpg',
          'img/2.jpg',
          'img/3.jpg',
          'img/4.jpg',
          'img/5.jpg',
          'img/6.jpg',
          'img/7.jpg',
          'img/8.jpg',
          'img/9.jpg',
          'img/10.jpg',
          'data/restaurants.json'
        ]);
      })
    );
  });

  self.addEventListener('fetch', function(event) {
  
    event.respondWith(
      caches.match(event.request).then(function(response) {
          // if the respond within the cache, go and get it
        if(response){
            return response;
        } else {  // if not, fech it from the network and then cache it
            return fetch(event.request)
            .then(function(respond){
                const clonedResponed = respond.clone();
                caches.open(cacheName).then(function(cache){
                    cache.put(event.request, clonedResponed);
                })
                return respond;
            })
            .catch(function(err){
                console.log(err);
            })
        }
      })
    );
  });