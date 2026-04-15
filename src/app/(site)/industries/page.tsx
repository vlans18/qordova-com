import type { Metadata } from 'next'
import { PAGE_META } from '@/components/seo/PageMeta'
import JsonLd, { SCHEMA } from '@/components/seo/JsonLd'
import Hero from '@/components/sections/Hero'
import SectionBlock from '@/components/sections/SectionBlock'
import CardGrid from '@/components/sections/CardGrid'
import PostureGrid from '@/components/sections/PostureGrid'
import PullQuote from '@/components/sections/PullQuote'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = PAGE_META.industries

export default function IndustriesPage() {
  return (
    <>
      <JsonLd schema={SCHEMA.breadcrumb.industries} />

      <Hero
        eyebrow="Qordova Labs Inc — Industries"
        headline={<>Governed AI execution for<br />serious operating environments.</>}
        subhead="Qordova supports organizations operating in environments where accountability, reviewability, execution boundaries, and audit evidence are not optional."
        primaryCta={{ label: 'Discuss your environment', href: '/contact' }}
        secondaryCta={{ label: 'Contact Qordova', href: '/contact' }}
      />

      <SectionBlock
        label="Context"
        heading="Where Qordova is relevant."
        body="Qordova is relevant wherever AI use intersects with operational consequence, approval boundaries, sensitive workflows, and multi-provider environments."
        background="surface"
        right={
          <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#555552] leading-[1.9] pt-1">
            Platform: KAIS<br />
            Governed by: ORION<br />
            Sectors: Regulated + Enterprise
          </div>
        }
      />

      <CardGrid
        label="Industry segments"
        heading="Operating environments we support."
        columns={3}
        background="base"
        cards={[
          { num: '01', title: 'Financial services',                   body: 'AI-assisted workflows in financially regulated environments require bounded execution, traceable output, and explicit review conditions.' },
          { num: '02', title: 'Healthcare and clinical operations',    body: 'AI use in high consequence environments requires human accountability, controlled invocation paths, and reviewable outputs.' },
          { num: '03', title: 'Enterprise operations',                 body: 'Internal enterprise AI requires policy enforcement across teams, tools, providers, and changing workflow conditions.' },
          { num: '04', title: 'Research and knowledge environments',   body: 'Research support benefits from governed execution where evidence discipline and reconstructible output matter.' },
          { num: '05', title: 'Public sector and regulated institutions', body: 'Sensitive operating environments require execution controls that are explicit, reviewable, and operationally defensible.' },
          { num: '06', title: 'Multi-entity enterprises',             body: 'Large organizations require governance that persists across execution boundaries, departments, vendors, and systems.' },
        ]}
      />

      <PullQuote
        label="Why industry context matters"
        quote="The same model capability can produce very different operational risk depending on where and how it is used."
        points={[
          'Qordova focuses on the operating conditions around AI execution, not capability in isolation.',
          'Execution boundaries that are appropriate in one workflow may be insufficient in another.',
          'KAIS applies governance at the point of execution — consistently, regardless of provider or workflow.',
        ]}
        background="surface"
      />

      <PostureGrid
        label="What changes with Qordova"
        heading="Governance applied at the point of execution."
        background="base"
        columns={5}
        items={[
          { title: 'Clear execution boundaries' },
          { title: 'Reviewable outputs' },
          { title: 'Provider neutral control' },
          { title: 'Governance visibility' },
          { title: 'Operational discipline' },
        ]}
      />

      <FinalCTA
        headline="Start with the operating environment, not the demo."
        primaryCta={{ label: 'Discuss your environment', href: '/contact' }}
        secondaryCta={{ label: 'Back to Qordova', href: '/' }}
        background="surface"
        layout="split"
      />
    </>
  )
}
