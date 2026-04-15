import type { Metadata } from 'next'
import { PAGE_META } from '@/components/seo/PageMeta'
import JsonLd, { SCHEMA } from '@/components/seo/JsonLd'
import Hero from '@/components/sections/Hero'
import SectionBlock from '@/components/sections/SectionBlock'
import CardGrid from '@/components/sections/CardGrid'
import PostureGrid from '@/components/sections/PostureGrid'
import PullQuote from '@/components/sections/PullQuote'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = PAGE_META.contact

// Contact rule C:
// enterprise@qordova.com — briefings and enterprise inquiries
// contact@qordova.com    — general contact, legal, and admin matters

export default function ContactPage() {
  return (
    <>
      <JsonLd schema={SCHEMA.breadcrumb.contact} />
      <JsonLd schema={SCHEMA.contactPage} />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <Hero
        eyebrow="Qordova Labs Inc — Contact"
        headline={<>Start the enterprise conversation<br />with <em>context</em>.</>}
        subhead="Qordova engages with organizations that need governed AI infrastructure, explicit control boundaries, and a clear operating model for AI execution."
        primaryCta={{ label: 'Request Enterprise Briefing', href: 'mailto:enterprise@qordova.com' }}
        secondaryCta={{ label: 'Back to Qordova', href: '/' }}
      />

      {/* ── Contact framing ───────────────────────────────────── */}
      <SectionBlock
        label="Starting point"
        heading="Context before the conversation."
        body="The best starting point is not a generic demo request. It is a clear conversation about your operating environment, governance expectations, architecture constraints, and review requirements."
        background="surface"
        right={
          <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#555552] leading-[1.9] pt-1">
            Platform: KAIS<br />
            Governed by: ORION<br />
            Engagement: Context-first
          </div>
        }
      />

      {/* ── Inquiry paths ─────────────────────────────────────── */}
      <CardGrid
        label="Inquiry paths"
        heading="Choose the right starting point."
        columns={2}
        background="base"
        cards={[
          {
            num:   '01',
            title: 'Enterprise briefing',
            body:  'For organizations evaluating governed AI infrastructure, execution boundaries, and enterprise operating fit.',
          },
          {
            num:   '02',
            title: 'Architecture discussion',
            body:  'For teams that need to understand system structure, control plane authority, reviewability, and execution design.',
          },
          {
            num:   '03',
            title: 'Partnership inquiry',
            body:  'For strategic partners, channel discussions, and selected institutional collaboration.',
          },
          {
            num:   '04',
            title: 'General contact',
            body:  'For broader organizational inquiries related to Qordova, KAIS, and platform direction.',
          },
        ]}
      />

      {/* ── Contact addresses — rule C explicit ───────────────── */}
      <SectionBlock
        label="Contact addresses"
        heading="Use the right address for your inquiry."
        background="surface"
        body={
          <div className="flex flex-col border-t border-[#2A2A2E] mt-2">
            {[
              {
                address: 'enterprise@qordova.com',
                role:    'Enterprise briefings, architecture discussions, partnership inquiries',
              },
              {
                address: 'contact@qordova.com',
                role:    'General inquiries, legal matters, and administrative correspondence',
              },
            ].map(({ address, role }) => (
              <div
                key={address}
                className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-6 border-b border-[#2A2A2E]"
              >
                <a
                  href={`mailto:${address}`}
                  className="font-mono text-[12px] tracking-[0.08em] text-[#C8A84B] hover:underline underline-offset-4 flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A84B] rounded-[2px]"
                >
                  {address}
                </a>
                <span className="text-[13px] text-[#888884] leading-[1.6]">{role}</span>
              </div>
            ))}
          </div>
        }
      />

      {/* ── Engagement expectations ───────────────────────────── */}
      <PullQuote
        label="Engagement expectations"
        quote="Qordova discussions are structured around operating context, not generic product theater."
        points={[
          'Conversations start with consequence profile, workflow sensitivity, and governance expectations.',
          'The objective is clarity about whether and how KAIS fits the operating environment.',
          'Engagements that lack operating context are not productive for either party.',
        ]}
        background="base"
      />

      {/* ── Contact posture ───────────────────────────────────── */}
      <PostureGrid
        label="Contact posture"
        heading="How Qordova approaches engagement."
        background="surface"
        columns={5}
        items={[
          { title: 'Context first' },
          { title: 'Architecture aware' },
          { title: 'Governance aligned' },
          { title: 'Review conscious' },
          { title: 'Enterprise focused' },
        ]}
      />

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <FinalCTA
        headline="Begin with the operating reality, not a generic form."
        primaryCta={{ label: 'Request Enterprise Briefing', href: 'mailto:enterprise@qordova.com' }}
        secondaryCta={{ label: 'Back to Qordova', href: '/' }}
        background="base"
        layout="split"
      />
    </>
  )
}
