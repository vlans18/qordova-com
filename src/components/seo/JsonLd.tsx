// src/components/seo/JsonLd.tsx
// Structured data injection — renders JSON-LD script tags for per-page schemas.
// Server component — no client state or hooks.
//
// Public entity model — locked:
//   Qordova Labs Inc  — parent company
//   KAIS              — flagship governed AI execution platform
//   ORION             — control plane authority inside KAIS, sole permit issuer
//   Kodana            — NOT in public schema (internal only)
//
// contact email field removed from ContactPage schema until confirmed public.
//
// Usage in page.tsx:
//   import JsonLd, { SCHEMA } from '@/components/seo/JsonLd'
//   export default function Page() {
//     return (
//       <>
//         <JsonLd schema={SCHEMA.softwareApp.kais} />
//         <JsonLd schema={SCHEMA.faq.home} />
//         {/* page content */}
//       </>
//     )
//   }

interface JsonLdProps {
  schema: Record<string, unknown> | Record<string, unknown>[]
}

// ── Component ──────────────────────────────────────────────────
export default function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

// ── Schema library ─────────────────────────────────────────────
const SITE_URL = 'https://qordova.com'
const ORG_ID   = `${SITE_URL}/#organization`
const SITE_ID  = `${SITE_URL}/#website`

// ── Breadcrumb builder ─────────────────────────────────────────
function breadcrumb(
  items: { name: string; href: string }[]
): Record<string, unknown> {
  return {
    '@context':      'https://schema.org',
    '@type':         'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type':  'ListItem',
      position: i + 1,
      name:     item.name,
      item:     `${SITE_URL}${item.href}`,
    })),
  }
}

// ── FAQ builder ────────────────────────────────────────────────
function faqSchema(
  items: { q: string; a: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type':    'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type':        'Question',
      name:           q,
      acceptedAnswer: {
        '@type': 'Answer',
        text:    a,
      },
    })),
  }
}

// ── Schema presets ─────────────────────────────────────────────
export const SCHEMA = {

  // Breadcrumbs — one per page
  breadcrumb: {
    home: breadcrumb([
      { name: 'Qordova Labs Inc', href: '/' },
    ]),
    kais: breadcrumb([
      { name: 'Qordova Labs Inc', href: '/' },
      { name: 'KAIS',             href: '/kais' },
    ]),
    solutions: breadcrumb([
      { name: 'Qordova Labs Inc', href: '/' },
      { name: 'Solutions',        href: '/solutions' },
    ]),
    industries: breadcrumb([
      { name: 'Qordova Labs Inc', href: '/' },
      { name: 'Industries',       href: '/industries' },
    ]),
    security: breadcrumb([
      { name: 'Qordova Labs Inc', href: '/' },
      { name: 'Security',         href: '/security' },
    ]),
    governance: breadcrumb([
      { name: 'Qordova Labs Inc', href: '/' },
      { name: 'Governance',       href: '/governance' },
    ]),
    research: breadcrumb([
      { name: 'Qordova Labs Inc', href: '/' },
      { name: 'Research',         href: '/research' },
    ]),
    about: breadcrumb([
      { name: 'Qordova Labs Inc', href: '/' },
      { name: 'About',            href: '/about' },
    ]),
    contact: breadcrumb([
      { name: 'Qordova Labs Inc', href: '/' },
      { name: 'Contact',          href: '/contact' },
    ]),
  },

  // Software application — KAIS page
  // alternateName removed — Kodana is not in the public entity model
  softwareApp: {
    kais: {
      '@context':          'https://schema.org',
      '@type':             'SoftwareApplication',
      '@id':               `${SITE_URL}/kais#software`,
      name:                'KAIS',
      applicationCategory: 'BusinessApplication',
      operatingSystem:     'Cloud',
      url:                 `${SITE_URL}/kais`,
      description:
        'KAIS is the flagship governed AI execution platform from Qordova Labs Inc. It provides permit-bound, fail-closed execution authority through ORION, with immutable audit artifacts and provider-neutral control.',
      publisher: { '@id': ORG_ID },
      offers: {
        '@type':       'Offer',
        availability:  'https://schema.org/InStock',
        priceCurrency: 'SGD',
        priceSpecification: {
          '@type':      'PriceSpecification',
          description:  'Enterprise pricing — contact Qordova for briefing',
        },
      },
      featureList: [
        'Permit-bound AI execution control',
        'Fail-closed enforcement via ORION',
        'Immutable audit artifacts',
        'Provider-neutral policy enforcement',
        'Multi-workflow governance',
      ],
    },
  },

  // Contact page schema
  // email field removed — not confirmed public. Add back when confirmed.
  contactPage: {
    '@context':  'https://schema.org',
    '@type':     'ContactPage',
    '@id':       `${SITE_URL}/contact#page`,
    name:        'Contact Qordova Labs Inc',
    url:         `${SITE_URL}/contact`,
    description: 'Start an enterprise conversation about governed AI infrastructure, KAIS, and operating model fit.',
    publisher:   { '@id': ORG_ID },
    isPartOf:    { '@id': SITE_ID },
    contactPoint: {
      '@type':           'ContactPoint',
      contactType:       'Enterprise Sales',
      availableLanguage: ['English'],
      areaServed:        'Worldwide',
    },
  },

  // FAQ schemas — GEO-optimised
  // Entity model locked: Qordova Labs Inc, KAIS, ORION only
  faq: {
    home: faqSchema([
      {
        q: 'What is Qordova?',
        a: 'Qordova Labs Inc is a Singapore-incorporated company that builds governed AI infrastructure for enterprise and regulated environments. Its flagship platform is KAIS.',
      },
      {
        q: 'What is KAIS?',
        a: 'KAIS is a governed AI execution platform from Qordova Labs Inc. It provides permit-bound, fail-closed execution authority through ORION. KAIS governs whether AI execution is allowed to proceed, under what conditions, and produces immutable audit evidence.',
      },
      {
        q: 'What is ORION?',
        a: 'ORION — Orchestrated Reasoning and Intelligence Over Networks — is the control plane authority inside KAIS. ORION is the sole permit issuer. No ORION permit means no execution.',
      },
      {
        q: 'Who is Qordova for?',
        a: 'Qordova is for enterprise and regulated-sector organizations that need AI execution to remain bounded, reviewable, and auditable. Relevant sectors include financial services, healthcare, public sector, and multi-provider enterprise environments.',
      },
      {
        q: 'How does KAIS differ from an AI gateway?',
        a: 'AI gateways focus on request routing, cost controls, and throughput. KAIS centers permit-bound execution governance as its constitutional core. Adjacent systems may intercept or route requests, but that is not equivalent to ORION-issued execution authority with fail-closed enforcement and immutable audit obligations.',
      },
    ]),

    kais: faqSchema([
      {
        q: 'What does fail-closed execution mean in KAIS?',
        a: 'Fail-closed means that if a valid ORION permit is not present, execution does not proceed. There is no soft fail, no default-allow, and no bypass path. This is the constitutional enforcement posture of KAIS.',
      },
      {
        q: 'What is an immutable audit artifact in KAIS?',
        a: 'Every execution event in KAIS produces a cryptographically chained, append-only audit artifact. These artifacts are reconstructible, replayable, and cannot be altered after creation. They provide the evidence base for post-execution review.',
      },
      {
        q: 'Is KAIS provider-neutral?',
        a: 'Yes. KAIS governs AI execution across providers without architectural preference or lock-in. ORION enforces policy regardless of which model or workflow execution target is involved.',
      },
    ]),

    about: faqSchema([
      {
        q: 'Where is Qordova Labs Inc incorporated?',
        a: 'Qordova Labs Inc is incorporated in Singapore as Qordova Labs Inc Pte. Ltd.',
      },
      {
        q: 'What does Qordova build?',
        a: 'Qordova builds governed AI infrastructure — systems that define how AI work is authorized, constrained, reviewed, and evidenced under explicit operating conditions. It is not a model vendor and not a generic AI wrapper.',
      },
    ]),
  },

} as const
