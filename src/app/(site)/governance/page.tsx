import type { Metadata } from 'next'
import { PAGE_META } from '@/components/seo/PageMeta'
import JsonLd, { SCHEMA } from '@/components/seo/JsonLd'
import Hero from '@/components/sections/Hero'
import SectionBlock from '@/components/sections/SectionBlock'
import ListSection from '@/components/sections/ListSection'
import PostureGrid from '@/components/sections/PostureGrid'
import PullQuote from '@/components/sections/PullQuote'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = PAGE_META.governance

export default function GovernancePage() {
  return (
    <>
      <JsonLd schema={SCHEMA.breadcrumb.governance} />

      <Hero
        eyebrow="Qordova Labs Inc — Governance"
        headline={<>Governance as an operating<br />condition for <em>AI execution</em>.</>}
        subhead="Qordova is built for environments where authority, review boundaries, execution conditions, and auditability must remain explicit throughout the operating model."
        primaryCta={{ label: 'Discuss your governance model', href: '/contact' }}
        secondaryCta={{ label: 'Contact Qordova', href: '/contact' }}
      />

      <SectionBlock
        label="Posture"
        heading="Governance before execution, not after."
        body="Qordova treats governance as the structure under which AI work is allowed to run. It is not an after-the-fact review layer. It defines the authority, conditions, and review boundaries around execution."
        background="surface"
        right={
          <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#555552] leading-[1.9] pt-1">
            Platform: KAIS<br />
            Governed by: ORION<br />
            Model: Permit-bound
          </div>
        }
      />

      <ListSection
        label="Governance areas"
        heading="Where authority and boundary must hold."
        background="base"
        items={[
          { num: '01', title: 'Authority model',      copy: 'AI execution should operate under explicit authority, not implied permission.' },
          { num: '02', title: 'Review boundaries',    copy: 'Outputs require clear review conditions and accountability paths.' },
          { num: '03', title: 'Execution conditions', copy: 'Governance must define when execution is allowed, constrained, denied, or degraded.' },
          { num: '04', title: 'Auditability',         copy: 'Decisions and outputs should remain reconstructible after execution.' },
          { num: '05', title: 'Policy continuity',    copy: 'Governance should persist across workflows, teams, and providers.' },
          { num: '06', title: 'Operating discipline', copy: 'Real governance depends on consistent control surfaces and enforceable process boundaries.' },
        ]}
      />

      <PullQuote
        label="Why governance matters here"
        quote="AI capability without governance creates ambiguity around authority, review, and responsibility."
        points={[
          'Qordova focuses on making authority conditions explicit before execution proceeds.',
          'Review boundaries need to be defined at the point of execution, not applied retrospectively.',
          'ORION enforces these conditions at the control plane — not as policy aspirations, but as operating gates.',
        ]}
        background="surface"
      />

      <PostureGrid
        label="Governance posture"
        heading="How KAIS makes governance operational."
        background="base"
        columns={5}
        items={[
          { title: 'Explicit authority' },
          { title: 'Structured review' },
          { title: 'Enforced boundaries' },
          { title: 'Reconstructible decisions' },
          { title: 'Fail closed discipline' },
        ]}
      />

      <FinalCTA
        headline="Start with authority and boundary, not adoption theater."
        primaryCta={{ label: 'Discuss your governance model', href: '/contact' }}
        secondaryCta={{ label: 'Back to Qordova', href: '/' }}
        background="surface"
        layout="split"
      />
    </>
  )
}
