/**
 * sw.js — Qordova Labs Inc Service Worker
 *
 * Strategy: Cache-first for static assets only.
 * HTML pages are NOT cached — always network-first.
 * Offline fallback served only when navigation fails.
 *
 * Rules enforced:
 * - No HTML page caching (prevents stale shell on deploy)
 * - Static assets: JS, CSS, fonts, images, icons cached
 * - skipWaiting + clients.claim — new SW activates immediately
 * - Versioned cache key — forces clean update on deploy
 * - No POST or API interception
 */

const CACHE_VERSION = 'qordova-v1';
const OFFLINE_URL   = '/offline';

const STATIC_CACHE_PATTERNS = [
  /\/_next\/static\//,
  /\/icons\//,
  /\/fonts\//,
  /\.webmanifest$/,
  /favicon\.ico$/,
  /apple-touch-icon\.png$/,
];

/* ── Install ──────────────────────────────────────────────────── */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then((cache) => {
        return cache.addAll([
          OFFLINE_URL,
          '/icons/icon-192.png',
          '/icons/icon-512.png',
          '/manifest.webmanifest',
        ]);
      })
      .then(() => self.skipWaiting())
  );
});

/* ── Activate ─────────────────────────────────────────────────── */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_VERSION)
            .map((name) => caches.delete(name))
        );
      })
      .then(() => self.clients.claim())
  );
});

/* ── Fetch ────────────────────────────────────────────────────── */
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin requests
  if (url.origin !== self.location.origin) return;

  // Never intercept POST, PUT, DELETE, PATCH
  if (request.method !== 'GET') return;

  // Never intercept API routes
  if (url.pathname.startsWith('/api/')) return;

  // Never intercept Next.js internal routes
  if (url.pathname.startsWith('/_next/webpack-hmr')) return;

  // Static asset: cache-first
  const isStaticAsset = STATIC_CACHE_PATTERNS.some((pattern) =>
    pattern.test(url.pathname)
  );

  if (isStaticAsset) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Navigation requests (HTML): network-first, offline fallback
  if (request.mode === 'navigate') {
    event.respondWith(networkFirstNavigation(request));
    return;
  }

  // Everything else: network only (no caching)
});

/* ── Cache-first strategy ────────────────────────────────────── */
async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_VERSION);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    // Static asset fetch failed — return nothing (404 handled by browser)
    return new Response('Asset unavailable', { status: 503 });
  }
}

/* ── Network-first navigation with offline fallback ──────────── */
async function networkFirstNavigation(request) {
  try {
    const response = await fetch(request);
    return response;
  } catch {
    // Network failed — serve offline fallback page
    const cached = await caches.match(OFFLINE_URL);
    if (cached) return cached;

    // Absolute fallback if offline page not cached
    return new Response(
      `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Offline | Qordova Labs Inc</title>
  <style>
    body {
      margin: 0;
      min-height: 100svh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0A0A0B;
      color: #F5F5F0;
      font-family: system-ui, -apple-system, sans-serif;
      text-align: center;
      padding: 24px;
    }
    .wrap { max-width: 480px; }
    .label {
      font-size: 10px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #C8A84B;
      margin-bottom: 20px;
    }
    h1 {
      font-size: clamp(28px, 4vw, 40px);
      font-weight: 300;
      margin-bottom: 16px;
      letter-spacing: -0.01em;
    }
    p { color: #B8B8B0; font-size: 16px; line-height: 1.7; margin-bottom: 32px; }
    a {
      display: inline-block;
      padding: 10px 24px;
      background: #C8A84B;
      color: #0A0A0B;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      text-decoration: none;
      border-radius: 2px;
    }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="label">Qordova Labs Inc</div>
    <h1>You are offline.</h1>
    <p>
      No network connection is available.
      Please check your connection and try again.
    </p>
    <a href="/">Try again</a>
  </div>
</body>
</html>`,
      {
        status: 200,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      }
    );
  }
}
