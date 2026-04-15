import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

/* ── Viewport ─────────────────────────────────────────────────── */
export const viewport: Viewport = {
  themeColor: '#0A0A0B',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

/* ── Root metadata ────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL('https://qordova.com'),
  title: {
    default: 'Qordova Labs Inc | Governed AI Infrastructure for Enterprise',
    template: '%s | Qordova Labs Inc',
  },
  description:
    'Qordova builds governed AI infrastructure for enterprise and regulated environments. KAIS is the flagship platform for authorizing, constraining, auditing, and reviewing AI execution across providers and workflows.',
  keywords: [
    'governed AI infrastructure',
    'enterprise AI governance',
    'AI execution control',
    'AI auditability enterprise',
    'AI governance platform regulated',
    'fail-closed AI execution',
    'KAIS platform',
    'Qordova Labs',
    'AI control plane enterprise',
    'Singapore AI governance',
    'governed AI operations',
    'enterprise AI control layer',
    'AI infrastructure regulated environments',
  ],
  authors: [{ name: 'Qordova Labs Inc', url: 'https://qordova.com' }],
  creator: 'Qordova Labs Inc',
  publisher: 'Qordova Labs Inc',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: 'https://qordova.com',
    siteName: 'Qordova Labs Inc',
    title: 'Qordova Labs Inc | Governed AI Infrastructure for Enterprise',
    description:
      'Qordova builds governed AI infrastructure for enterprise and regulated environments. KAIS governs AI execution through permit-bound, fail-closed control with immutable audit evidence.',
    images: [
      {
        url: '/og/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Qordova Labs Inc — Governed AI Infrastructure for Enterprise',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qordova Labs Inc | Governed AI Infrastructure for Enterprise',
    description:
      'Governed AI infrastructure for enterprise and regulated environments. KAIS governs how AI is authorized, constrained, audited, and reviewed.',
    images: ['/og/og-default.png'],
  },
  icons: {
    icon: [
      { url: '/icons/favicon.ico', sizes: 'any' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/icons/favicon.ico',
  },
  manifest: '/manifest.webmanifest',
  category: 'technology',
  classification: 'Enterprise Software',
  other: {
    'msapplication-TileColor': '#0A0A0B',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Qordova',
    'mobile-web-app-capable': 'yes',
    'format-detection': 'telephone=no',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://qordova.com/#organization',
  name: 'Qordova Labs Inc',
  legalName: 'Qordova Labs Inc Pte. Ltd.',
  url: 'https://qordova.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://qordova.com/icons/icon-512.png',
    width: 512,
    height: 512,
  },
  description:
    'Qordova Labs Inc builds governed AI infrastructure for enterprise and regulated environments. The flagship platform KAIS governs AI execution through permit-bound, fail-closed control with immutable audit evidence.',
  foundingLocation: { '@type': 'Place', addressCountry: 'SG', addressLocality: 'Singapore' },
  areaServed: 'Worldwide',
  knowsAbout: [
    'Governed AI infrastructure',
    'Enterprise AI governance',
    'AI execution control',
    'AI auditability',
    'Regulated AI environments',
    'AI control plane',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://qordova.com/#website',
  url: 'https://qordova.com',
  name: 'Qordova Labs Inc',
  description: 'Governed AI Infrastructure for Enterprise',
  publisher: { '@id': 'https://qordova.com/#organization' },
  inLanguage: 'en',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="application-name" content="Qordova" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker'in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js',{scope:'/'}).catch(function(e){console.warn('SW registration failed:',e)})})}`,
          }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[500] focus:px-4 focus:py-2 focus:bg-qordova-gold focus:text-qordova-bg focus:text-sm focus:font-medium focus:rounded"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
