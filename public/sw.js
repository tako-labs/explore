if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>n(e,a),o={module:{uri:a},exports:c,require:r};s[a]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-5afaf374"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/C0inzBRje145IeUa1LOKL/_buildManifest.js",revision:"C0inzBRje145IeUa1LOKL"},{url:"/_next/static/C0inzBRje145IeUa1LOKL/_middlewareManifest.js",revision:"C0inzBRje145IeUa1LOKL"},{url:"/_next/static/C0inzBRje145IeUa1LOKL/_ssgManifest.js",revision:"C0inzBRje145IeUa1LOKL"},{url:"/_next/static/chunks/843.e24357b3fdb73363.js",revision:"C0inzBRje145IeUa1LOKL"},{url:"/_next/static/chunks/95-8c355d774f2b20de.js",revision:"C0inzBRje145IeUa1LOKL"},{url:"/_next/static/chunks/cb1608f2-a1cf63d47712b304.js",revision:"C0inzBRje145IeUa1LOKL"},{url:"/_next/static/chunks/framework-bb5c596eafb42b22.js",revision:"C0inzBRje145IeUa1LOKL"},{url:"/_next/static/chunks/main-a04ae2520a7fa6dc.js",revision:"C0inzBRje145IeUa1LOKL"},{url:"/_next/static/chunks/pages/_error-0509152792d2b207.js",revision:"C0inzBRje145IeUa1LOKL"},{url:"/_next/static/chunks/pages/connect-7ae5540bf1a374b1.js",revision:"C0inzBRje145IeUa1LOKL"},{url:"/_next/static/chunks/pages/index-a270fbf8d1c00635.js",revision:"C0inzBRje145IeUa1LOKL"},{url:"/_next/static/chunks/pages/stats-48e0a16283781ad4.js",revision:"C0inzBRje145IeUa1LOKL"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"C0inzBRje145IeUa1LOKL"},{url:"/_next/static/chunks/webpack-2b079251f8655b9c.js",revision:"C0inzBRje145IeUa1LOKL"},{url:"/_next/static/css/06ab20b33c947179.css",revision:"C0inzBRje145IeUa1LOKL"},{url:"/favicon.png",revision:"49fb48f50dde5c65a3ee932ec042a8c9"},{url:"/logo512.png",revision:"44546de5b7d89354ade92ea2c0066f34"},{url:"/manifest.json",revision:"295e4b21c01ab1c455c2618f220bcefb"},{url:"/robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
