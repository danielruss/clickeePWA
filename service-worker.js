console.log('Hello from service-worker.js');
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

const { registerRoute } = workbox.routing;

registerRoute(/.+/, new NetworkFirst({ cacheName: 'tmpCache' }))
