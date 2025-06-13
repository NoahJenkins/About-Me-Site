const CACHE_NAME = 'noah-jenkins-portfolio-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/main.css',
  '/assets/css/noscript.css',
  '/assets/css/fontawesome-all.min.css',
  '/assets/js/jquery.min.js',
  '/assets/js/browser.min.js',
  '/assets/js/breakpoints.min.js',
  '/assets/js/util.js',
  '/assets/js/main.js',
  '/assets/js/backgroundGenerator.js',
  '/images/icon.jpeg',
  '/images/beach+pose.jpeg',
  '/assets/audio/Noah_Jenkins_Commercial.mp3',
  '/assets/audio/NoahJenkins_CharacterDemo.mp3',
  '/assets/webfonts/fa-solid-900.woff2',
  '/assets/webfonts/fa-brands-400.woff2',
  '/assets/webfonts/fa-regular-400.woff2'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('Service Worker: Installation complete');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Cache failed', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker: Activation complete');
      return self.clients.claim();
    })
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          console.log('Service Worker: Serving from cache', event.request.url);
          return response;
        }
        
        console.log('Service Worker: Fetching from network', event.request.url);
        return fetch(event.request).then((response) => {
          // Don't cache non-successful responses
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response as it can only be consumed once
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
      .catch(() => {
        // Return a fallback page when both cache and network fail
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
      })
  );
});

// Background sync for form submissions (future enhancement)
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    console.log('Service Worker: Background sync triggered');
    // Handle background sync for contact form submissions
  }
});

// Push notifications (future enhancement)
self.addEventListener('push', (event) => {
  console.log('Service Worker: Push received');
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: '/images/icon-192.png',
    badge: '/images/icon-192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };

  event.waitUntil(
    self.registration.showNotification('Noah Jenkins Portfolio', options)
  );
});
