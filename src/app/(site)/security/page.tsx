import type { Metadata } from 'next'
import { PAGE_META } from '@/components/seo/PageMeta'
import JsonLd, { SCHEMA } from '@/components/seo/JsonLd'
import Hero from '@/components/sections/Hero'
import SectionBlock from '@/components/sections/SectionBlock'
import CardGrid from '@/components/sections/CardGrid'
import PostureGrid from '@/components/sections/PostureGrid'
import PullQuote from '@/components/sections/PullQuote'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = PAGE_META.security

export default function SecurityPage() {
  return (
    <>
      <JsonLd schema={SCHEMA.breadcrumb.security} />

      <Hero
        eyebrow="Qordova Labs Inc — Security"
        headline={<>Security posture for<br /><em>governed</em> AI execution.</>}
        subhead="Qordova is designed for environments where execution control, reviewability, audit evidence, and operational discipline matter."
        primaryCta={{ label: 'Discuss your security context', href: '/contact' }}
        secondaryCta={{ label: 'Contact Qordova', href: '/contact' }}
      />

      <SectionBlock
        label="Posture"
        heading="Security as an operating condition."
        body="Qordova approaches security as an operating condition, not a decorative layer. The platform is built around explicit boundaries for execution, traceable output, and disciplined handling of workflow context."
        background="surface"
        right={
          <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#555552] leading-[1.9] pt-1">
            Platform: KAIS<br />
            Governed by: ORION<br />
            Posture: Fail-closed
          </div>
        }
      />

      <CardGrid
        label="Security areas"
        heading="Where the operating boundary holds."
        columns={3}
        background="base"
        cards={[
          { num: '01', title: 'Access control',              body: 'Role-aware access and explicit boundaries around who can invoke, review, or manage governed execution flows.' },
          { num: '02', title: 'Execution boundaries',        body: 'AI work is constrained within defined operating conditions instead of being allowed to run without policy context.' },
          { num: '03', title: 'Audit artifacts',             body: 'Outputs and decisions are designed to remain reviewable and reconstructible after execution.' },
          { num: '04', title: 'Data handling discipline',    body: 'Sensitive workflow context requires explicit handling boundaries and careful control over what is processed and returned.' },
          { num: '05', title: 'Provider neutral enforcement', body: 'Governance and execution controls persist even when multiple providers or execution targets are involved.' },
          { num: '06', title: 'Operational reliability',     body: 'Security depends on consistent operating behavior, explicit failure handling, and disciplined control surfaces.' },
        ]}
      />

      <PullQuote
        label="Why security matters here"
        quote="In enterprise AI, risk does not come only from model capability."
        points={[
          'It comes from where execution happens and what authority it carries.',
          'From how outputs are reviewed — or whether they are reviewed at all.',
          'From whether the operating boundary remains explicit under real conditions.',
          'Qordova addresses these at the control surface, not after the fact.',
        ]}
        background="surface"
      />

      <PostureGrid
        label="Security posture"
        heading="How KAIS holds the boundary."
        background="base"
        columns={5}
        items={[
          { title: 'Explicit control surface' },
          { title: 'Reviewable output' },
          { title: 'Bounded execution' },
          { title: 'Operational resilience' },
          { title: 'Audit ready discipline' },
        ]}
      />

      <FinalCTA
        headline="Start with the security boundary, not the feature list."
        primaryCta={{ label: 'Discuss your security context', href: '/contact' }}
        secondaryCta={{ label: 'Back to Qordova', href: '/' }}
        background="surface"
        layout="split"
      />
    </>
  )
}
