import type { Metadata } from 'next'

// PageMeta — per-page metadata factory.
//
// Title discipline:
// Root src/app/layout.tsx owns the title template: '%s | Qordova Labs Inc'
// generatePageMeta() returns the page-level title string only — no site name.
// Next.js composes: title becomes '%s | Qordova Labs Inc' automatically.
//
// Usage in page.tsx:
//   import { generatePageMeta } from '@/components/seo/PageMeta'
//   export const metadata = generatePageMeta({ ... })

const SITE_URL = 'https://qordova.com'
const OG_IMAGE = `${SITE_URL}/og/og-default.png`

export interface PageMetaInput {
  title:       string    // Page-level title only — site name added by root layout
  description: string    // 140–160 chars
  path?:       string    // Canonical path e.g. '/kais' — default '/'
  ogImage?:    string    // Full URL — overrides default OG image
  ogType?:     'website' | 'article'
  noIndex?:    boolean
  keywords?:   string[]
}

// ── Shared keyword base ────────────────────────────────────────
const BASE_KEYWORDS = [
  'governed AI infrastructure',
  'enterprise AI governance',
  'AI execution control',
  'AI auditability',
  'KAIS',
  'Qordova',
  'Singapore AI governance',
]

// ── Generator ─────────────────────────────────────────────────
export function generatePageMeta(input: PageMetaInput): Metadata {
  const {
    title,
    description,
    path     = '/',
    ogImage  = OG_IMAGE,
    ogType   = 'website',
    noIndex  = false,
    keywords = [],
  } = input

  // Page title only — root layout template appends ' | Qordova Labs Inc'
  const canonicalUrl = `${SITE_URL}${path}`

  // OG and Twitter use the composed title for social sharing clarity
  const composedTitle = `${title} | Qordova Labs Inc`

  return {
    // Pass page title only — Next.js applies root template
    title,
    description,

    keywords: [...BASE_KEYWORDS, ...keywords],

    authors:   [{ name: 'Qordova Labs Inc', url: SITE_URL }],
    creator:   'Qordova Labs Inc',
    publisher: 'Qordova Labs Inc',

    robots: noIndex
      ? { index: false, follow: false }
      : {
          index:  true,
          follow: true,
          googleBot: {
            index:               true,
            follow:              true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet':       -1,
          },
        },

    alternates: {
      canonical: path,
    },

    openGraph: {
      type:        ogType,
      locale:      'en_SG',
      url:         canonicalUrl,
      siteName:    'Qordova Labs Inc',
      title:       composedTitle,
      description,
      images: [
        {
          url:    ogImage,
          width:  1200,
          height: 630,
          alt:    `${title} — Qordova Labs Inc`,
          type:   'image/png',
        },
      ],
    },

    twitter: {
      card:        'summary_large_image',
      title:       composedTitle,
      description,
      images:      [ogImage],
    },
  }
}

// ── Per-page metadata presets ──────────────────────────────────
// Page titles are page-level strings only.
// Root layout template produces: '[title] | Qordova Labs Inc'

export const PAGE_META = {
  home: generatePageMeta({
    title:       'Governed AI Infrastructure for Enterprise',
    description: 'Qordova builds governed AI infrastructure for enterprise and regulated environments. KAIS is the flagship platform for authorizing, constraining, auditing, and reviewing AI execution.',
    path:        '/',
    keywords:    ['governed AI execution', 'AI control plane', 'enterprise AI control layer'],
  }),

  kais: generatePageMeta({
    title:       'KAIS — Governed AI Execution Platform',
    description: 'KAIS is the flagship governed AI execution platform from Qordova Labs Inc. It provides a control surface for authorizing, constraining, auditing, and reviewing AI execution across providers and workflows.',
    path:        '/kais',
    keywords:    ['KAIS platform', 'governed AI execution platform', 'ORION permit authority', 'fail-closed AI execution'],
  }),

  solutions: generatePageMeta({
    title:       'Solutions — Applied Governance for Enterprise AI Workflows',
    description: 'Qordova supports organizations that need AI execution to remain bounded, reviewable, and operationally usable across real enterprise workflows.',
    path:        '/solutions',
    keywords:    ['enterprise AI solutions', 'governed AI workflows', 'AI execution boundaries'],
  }),

  industries: generatePageMeta({
    title:       'Industries — Governed AI for Serious Operating Environments',
    description: 'Qordova supports organizations in financial services, healthcare, enterprise operations, research, public sector, and multi-entity environments where AI governance is not optional.',
    path:        '/industries',
    keywords:    ['AI governance financial services', 'healthcare AI governance', 'regulated industry AI'],
  }),

  security: generatePageMeta({
    title:       'Security — Security Posture for Governed AI Execution',
    description: 'Qordova is designed for environments where execution control, reviewability, audit evidence, and operational discipline matter. Security is an operating condition, not a decorative layer.',
    path:        '/security',
    keywords:    ['AI execution security', 'governed AI security posture', 'AI audit evidence'],
  }),

  governance: generatePageMeta({
    title:       'Governance — AI Governance as an Operating Condition',
    description: 'Qordova treats governance as the structure under which AI work is allowed to run. It defines authority, execution conditions, and review boundaries — not an afterthought.',
    path:        '/governance',
    keywords:    ['AI governance framework', 'execution governance', 'AI authority model', 'AI review boundaries'],
  }),

  research: generatePageMeta({
    title:       'Research — Research Discipline for Governed AI Infrastructure',
    description: 'Qordova approaches research as a practical engineering discipline focused on execution control, authority boundaries, auditability, and long-horizon operating models.',
    path:        '/research',
    keywords:    ['AI governance research', 'governed AI architecture', 'AI control plane research'],
  }),

  about: generatePageMeta({
    title:       'About',
    description: 'Qordova Labs Inc Pte. Ltd. is a Singapore-incorporated company building governed AI infrastructure for enterprise and regulated environments. KAIS is the flagship platform.',
    path:        '/about',
    keywords:    ['Qordova Labs Inc', 'Singapore AI company', 'governed AI infrastructure company'],
  }),

  contact: generatePageMeta({
    title:       'Contact — Start the Enterprise Conversation',
    description: 'Qordova engages with organizations that need governed AI infrastructure and a clear operating model for AI execution. Start with operating context, not a generic demo request.',
    path:        '/contact',
    keywords:    ['contact Qordova', 'enterprise AI briefing', 'KAIS briefing request'],
  }),

  privacy: generatePageMeta({
    title:       'Privacy Policy',
    description: 'Privacy policy for Qordova Labs Inc Pte. Ltd. and the Qordova.com website.',
    path:        '/privacy',
  }),

  terms: generatePageMeta({
    title:       'Terms of Use',
    description: 'Terms of use for Qordova Labs Inc Pte. Ltd. and the Qordova.com website.',
    path:        '/terms',
  }),

  disclosure: generatePageMeta({
    title:       'Disclosure',
    description: 'Disclosure statement for Qordova Labs Inc Pte. Ltd.',
    path:        '/disclosure',
  }),
} as const
