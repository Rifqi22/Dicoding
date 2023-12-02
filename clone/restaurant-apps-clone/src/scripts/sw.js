import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  './images/heros/hero-image_4-large.jpg',
  './images/heros/hero-image_4-small.jpg',
  './images/heros/hero-image_4.jpg',
  '.images/screenshots/ss-mobile-320x480.png',
  '.images/screenshots/ss-detskop-1280x720.png',
  '.images/icons/icon-1400x1400.png',
  '.images/icons/icon-192x192.png',
  '.images/icons/icon-144x144.png',
  '.images/icons/icon-96x96.png',
  '.images/icons/icon-72x72.png',
  '.images/icons/icon-48x48.png',
  '.images/icons/icon-36x36.png',
  '.images/icons/icon-32x32.png',
  '.images/icons/icon-16x16.png',
  '.images/favicon.png',
  './index.html',
  './app.bundle.js',
  './apk.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
