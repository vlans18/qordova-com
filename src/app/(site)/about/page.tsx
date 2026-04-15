import type { Metadata } from 'next'
import { PAGE_META } from '@/components/seo/PageMeta'
import JsonLd, { SCHEMA } from '@/components/seo/JsonLd'
import Hero from '@/components/sections/Hero'
import SectionBlock from '@/components/sections/SectionBlock'
import CardGrid from '@/components/sections/CardGrid'
import PostureGrid from '@/components/sections/PostureGrid'
import PullQuote from '@/components/sections/PullQuote'
import FinalCTA from '@/components/sections/FinalCTA'
import FAQBlock from '@/components/sections/FAQBlock'

export const metadata: Metadata = PAGE_META.about

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={SCHEMA.breadcrumb.about} />
      <JsonLd schema={SCHEMA.faq.about} />

      <Hero
        eyebrow="Qordova Labs Inc — About"
        headline={<>Qordova builds governed AI<br />infrastructure for <em>enterprise</em>.</>}
        subhead="Qordova Labs Inc is focused on the architectures, operating methods, and control structures required for AI execution in serious enterprise and regulated environments."
        primaryCta={{ label: 'Discuss enterprise architecture', href: '/contact' }}
        secondaryCta={{ label: 'Contact Qordova', href: '/contact' }}
      />

      <SectionBlock
        label="Company"
        heading="Not a model vendor. Not a generic AI wrapper."
        body="Qordova builds governed AI infrastructure — systems that define how AI work is authorized, constrained, reviewed, and evidenced under explicit operating conditions."
        background="surface"
        right={
          <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#555552] leading-[1.9] pt-1">
            Incorporated: Singapore<br />
            Entity: Qordova Labs Inc Pte. Ltd.<br />
            Focus: Governed AI Infrastructure
          </div>
        }
      />

      <CardGrid
        label="Platform structure"
        heading="How the operating model is organized."
        columns={2}
        background="base"
        cards={[
          {
            tag:  'Parent company',
            title: 'Qordova Labs Inc',
            body:  'The parent company defining the architecture, operating posture, and governance direction of the platform.',
          },
          {
            tag:  'Flagship platform',
            title: 'KAIS',
            body:  'The flagship enterprise governed AI execution platform designed for authorization, boundary enforcement, reviewability, and audit-evidenced operation.',
          },
          {
            tag:  'Control plane authority',
            title: 'ORION',
            body:  'The control plane authority inside KAIS. ORION governs whether execution is allowed, constrained, denied, or degraded under approved conditions.',
          },
          {
            tag:  'Execution model',
            title: 'Permit-bound governance',
            body:  'No ORION permit means no execution. The constitutional enforcement posture is fail-closed, provider-neutral, and audit-evidenced.',
          },
        ]}
      />

      <PullQuote
        label="Why this structure matters"
        quote="Most organizations adopt AI through fragmented tools and inconsistent control models."
        points={[
          'Qordova\'s structure keeps authority, execution, review, and responsibility legible across the operating environment.',
          'A clear platform hierarchy reduces ambiguity in governance and makes accountability traceable.',
          'KAIS and ORION each carry a defined and non-overlapping role — by design, not by convention.',
        ]}
        background="surface"
      />

      <PostureGrid
        label="Operating posture"
        heading="How Qordova is positioned to operate."
        background="base"
        columns={5}
        items={[
          { title: 'Governance first' },
          { title: 'Control plane authority' },
          { title: 'Reviewable output' },
          { title: 'Provider neutral design' },
          { title: 'Long horizon infrastructure' },
        ]}
      />

      <FAQBlock
        label="About Qordova"
        heading="Common questions about the company."
        background="surface"
        items={[
          { q: 'Where is Qordova Labs Inc incorporated?', a: 'Qordova Labs Inc is incorporated in Singapore as Qordova Labs Inc Pte. Ltd.' },
          { q: 'What does Qordova build?',                a: 'Qordova builds governed AI infrastructure — systems that define how AI work is authorized, constrained, reviewed, and evidenced under explicit operating conditions. It is not a model vendor and not a generic AI wrapper.' },
          { q: 'What is the relationship between Qordova, KAIS, and ORION?', a: 'Qordova Labs Inc is the parent company. KAIS is the flagship governed AI execution platform. ORION is the control plane authority inside KAIS — the sole permit issuer. No ORION permit means no execution.' },
        ]}
      />

      <FinalCTA
        headline="Start with structure and operating method, not surface features."
        primaryCta={{ label: 'Discuss enterprise architecture', href: '/contact' }}
        secondaryCta={{ label: 'Back to Qordova', href: '/' }}
        background="base"
        layout="split"
      />
    </>
  )
}
