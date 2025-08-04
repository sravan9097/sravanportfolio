const CACHE_NAME = 'sravan-portfolio-v2';
const STATIC_CACHE = 'static-v2';
const DYNAMIC_CACHE = 'dynamic-v2';
const IMAGES_CACHE = 'images-v2';

// Cache strategies for different content types
const CACHE_STRATEGIES = {
  // Images: Cache first, long-term storage
  images: {
    cacheName: IMAGES_CACHE,
    maxAge: 365 * 24 * 60 * 60 * 1000, // 1 year
    maxEntries: 50
  },
  // Static assets: Cache first with revalidation
  static: {
    cacheName: STATIC_CACHE,
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    maxEntries: 100
  },
  // Dynamic content: Network first with cache fallback
  dynamic: {
    cacheName: DYNAMIC_CACHE,
    maxAge: 5 * 60 * 1000, // 5 minutes
    maxEntries: 50
  }
};

// URLs to cache on install
const STATIC_URLS = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/favicon.ico',
  '/og-image.svg'
];

const CRITICAL_IMAGES = [
  '/Hero_Images/designsystemhero.png',
  '/bcwebsite/beautifulcodeCover.png',
  '/Hero_Images/sharechatCover.png',
  '/profile_photo.jpg'
];

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    Promise.all([
      // Cache static assets
      caches.open(STATIC_CACHE).then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_URLS);
      }),
      // Cache critical images
      caches.open(IMAGES_CACHE).then((cache) => {
        console.log('Caching critical images');
        return cache.addAll(CRITICAL_IMAGES);
      })
    ])
  );
});

// Fetch event with advanced strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle different content types with appropriate strategies
  if (isImage(request)) {
    event.respondWith(cacheFirst(request, CACHE_STRATEGIES.images));
  } else if (isStaticAsset(request)) {
    event.respondWith(staleWhileRevalidate(request, CACHE_STRATEGIES.static));
  } else if (isAPI(request)) {
    event.respondWith(networkFirst(request, CACHE_STRATEGIES.dynamic));
  } else {
    event.respondWith(networkFirst(request, CACHE_STRATEGIES.dynamic));
  }
});

// Cache First Strategy (for images and long-lived assets)
async function cacheFirst(request, strategy) {
  const cache = await caches.open(strategy.cacheName);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Return a fallback for images
    if (isImage(request)) {
      return new Response(
        '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="#f0f0f0"/><text x="200" y="150" text-anchor="middle" fill="#666">Image not available</text></svg>',
        { headers: { 'Content-Type': 'image/svg+xml' } }
      );
    }
    throw error;
  }
}

// Stale While Revalidate Strategy (for CSS, JS, fonts)
async function staleWhileRevalidate(request, strategy) {
  const cache = await caches.open(strategy.cacheName);
  const cachedResponse = await cache.match(request);
  
  // Return cached response immediately if available
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  });

  return cachedResponse || fetchPromise;
}

// Network First Strategy (for HTML and API calls)
async function networkFirst(request, strategy) {
  const cache = await caches.open(strategy.cacheName);
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page for HTML requests
    if (request.headers.get('accept')?.includes('text/html')) {
      return cache.match('/');
    }
    
    throw error;
  }
}

// Helper functions to determine content type
function isImage(request) {
  return request.destination === 'image' || 
         request.url.match(/\.(png|jpg|jpeg|gif|svg|webp|avif)$/i);
}

function isStaticAsset(request) {
  return request.destination === 'style' || 
         request.destination === 'script' ||
         request.url.match(/\.(css|js|woff|woff2|ttf|eot)$/i);
}

function isAPI(request) {
  return request.url.includes('/api/') || 
         request.url.includes('supabase') ||
         request.url.includes('emailjs');
}

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!Object.values(CACHE_STRATEGIES).some(strategy => strategy.cacheName === cacheName)) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('Background sync triggered');
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle any pending form submissions or data sync
  console.log('Performing background sync...');
}

// Message handling for cache management
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_UPDATED') {
    // Clear old caches when new version is available
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  }
}); 