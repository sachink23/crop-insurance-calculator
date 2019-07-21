const cacheName = 'crop-ins-cal-1.0.1';
const startPage = '/?utm_source=pwa';
const offlinePage = '/ofline.html';
const filesToCache = [startPage, offlinePage, '/PikvimaCalculator/', '/PikvimaCalculator', '/affiliate/','/PikvimaCalculator/Jalna/','/PikvimaCalculator/assets/js/script.js','/PikvimaCalculator/Jalna/assets/js/script.js', '/PikvimaCalculator/Aurangabad/assets/js/script.js', '/PikvimaCalculator/Aurangabad', '/PikvimaCalculator/Aurangabad/', '/PikvimaCalculator/assets/img/logo-rect.png','/PikvimaCalculator/assets/img/background1.jpg', '/PikvimaCalculator/assets/img/title-back.png', '/PikvimaCalculator/assets/img/logo.ico', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css', 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', 'https://code.jquery.com/jquery-3.2.1.slim.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.bundle.min.js'];
const neverCacheUrls = [/preview=true/];

// Install
self.addEventListener('install', function(e) {
	console.log('PWA service worker installation');
	e.waitUntil(
		caches.open(cacheName).then(function(cache) {
			console.log('PWA service worker caching dependencies');
			filesToCache.map(function(url) {
				return cache.add(url).catch(function (reason) {
					return console.log('PWA: ' + String(reason) + ' ' + url);
				});
			});
		})
	);
});

// Activate
self.addEventListener('activate', function(e) {
	console.log('PWA service worker activation');
	e.waitUntil(
		caches.keys().then(function(keyList) {
			return Promise.all(keyList.map(function(key) {
				if ( key !== cacheName ) {
					console.log('PWA old cache removed', key);
					return caches.delete(key);
				}
			}));
		})
	);
	return self.clients.claim();
});

// Fetch
self.addEventListener('fetch', function(e) {

	// Return if the current request url is in the never cache list
	if ( ! neverCacheUrls.every(checkNeverCacheList, e.request.url) ) {
	  console.log( 'PWA: Current request is excluded from cache.' );
	  return;
	}

	// Return if request url protocal isn't http or https
	if ( ! e.request.url.match(/^(http|https):\/\//i) )
		return;

	// Return if request url is from an external domain.
	if ( new URL(e.request.url).origin !== location.origin )
		return;

	// For POST requests, do not use the cache. Serve offline page if offline.
	if ( e.request.method !== 'GET' ) {
		e.respondWith(
			fetch(e.request).catch( function() {
				return caches.match(offlinePage);
			})
		);
		return;
	}

	// Revving strategy
	if ( e.request.mode === 'navigate' && navigator.onLine ) {
		e.respondWith(
			fetch(e.request).then(function(response) {
				return caches.open(cacheName).then(function(cache) {
					cache.put(e.request, response.clone());
					return response;
				});
			})
		);
		return;
	}

	e.respondWith(
		caches.match(e.request).then(function(response) {
			return response || fetch(e.request).then(function(response) {
				return caches.open(cacheName).then(function(cache) {
					cache.put(e.request, response.clone());
					return response;
				});
			});
		}).catch(function() {
			return caches.match(offlinePage);
		})
	);
});

// Check if current url is in the neverCacheUrls list
function checkNeverCacheList(url) {
	if ( this.match(url) ) {
		return false;
	}
	return true;
}
