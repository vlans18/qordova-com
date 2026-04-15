import type { Metadata } from 'next'
import { PAGE_META } from '@/components/seo/PageMeta'
import JsonLd, { SCHEMA } from '@/components/seo/JsonLd'
import Hero from '@/components/sections/Hero'
import SectionBlock from '@/components/sections/SectionBlock'
import ListSection from '@/components/sections/ListSection'
import PostureGrid from '@/components/sections/PostureGrid'
import PullQuote from '@/components/sections/PullQuote'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = PAGE_META.solutions

export default function SolutionsPage() {
  return (
    <>
      <JsonLd schema={SCHEMA.breadcrumb.solutions} />

      <Hero
        eyebrow="Qordova Labs Inc — Solutions"
        headline={<>Applied governance for<br /><em>enterprise</em> AI workflows.</>}
        subhead="Qordova supports organizations that need AI execution to remain bounded, reviewable, and operationally usable across real enterprise workflows."
        primaryCta={{ label: 'Discuss your environment', href: '/contact' }}
        secondaryCta={{ label: 'Contact Qordova', href: '/contact' }}
      />

      <SectionBlock
        label="Context"
        heading="Where governed execution matters most."
        body="Qordova's solutions focus on environments with sensitive workflows, approval boundaries, multiple providers, and the need for traceable output."
        background="surface"
        right={
          <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#555552] leading-[1.9] pt-1">
            Platform: KAIS<br />
            Governed by: ORION<br />
            Operator: Enterprise
          </div>
        }
      />

      <ListSection
        label="Solution areas"
        heading="Where governed execution applies."
        background="base"
        id="solutions"
        items={[
          { num: '01', title: 'Enterprise internal AI',                   copy: 'Control internal AI use across teams, tools, and providers with explicit policy boundaries and traceable output.' },
          { num: '02', title: 'Financial and regulated workflows',         copy: 'Support AI-assisted work where reviewability, reason codes, and bounded execution matter.' },
          { num: '03', title: 'Healthcare and high consequence operations', copy: 'Use AI within controlled operating conditions where human accountability remains explicit.' },
          { num: '04', title: 'Research and analysis workflows',           copy: 'Improve structured research support while preserving evidence discipline and reviewable execution paths.' },
          { num: '05', title: 'Multi-provider AI governance',              copy: 'Coordinate execution across providers without losing policy control, audit visibility, or operational discipline.' },
        ]}
      />

      <PullQuote
        label="Why this matters"
        quote="Many enterprises can access model capability. The harder problem is operational control."
        points={[
          'Qordova focuses on the conditions under which AI work is allowed to run, how it is bounded, and how its outputs can be reviewed afterward.',
          'This is distinct from model access, speed optimization, or product integration.',
          'Governance at the point of execution is not the same as governance documentation after the fact.',
        ]}
        background="surface"
      />

      <PostureGrid
        label="What Qordova adds"
        heading="Governance at the point of execution."
        background="base"
        columns={5}
        items={[
          { title: 'Execution boundaries' },
          { title: 'Policy enforcement' },
          { title: 'Traceable output' },
          { title: 'Provider neutrality' },
          { title: 'Governance feedback loops' },
        ]}
      />

      <FinalCTA
        headline="Bring governance into the workflow, not after the incident."
        primaryCta={{ label: 'Discuss your environment', href: '/contact' }}
        secondaryCta={{ label: 'Back to Qordova', href: '/' }}
        background="surface"
        layout="split"
      />
    </>
  )
}
