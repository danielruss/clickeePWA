console.log('Hello from service-worker.js');
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

// This will trigger the importScripts() for workbox.strategies and its dependencies:
workbox.loadModule('workbox-strategies');
