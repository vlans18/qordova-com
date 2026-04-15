import type { Metadata } from 'next'
import { PAGE_META } from '@/components/seo/PageMeta'
import JsonLd, { SCHEMA } from '@/components/seo/JsonLd'
import Hero from '@/components/sections/Hero'
import SectionBlock from '@/components/sections/SectionBlock'
import CardGrid from '@/components/sections/CardGrid'
import PostureGrid from '@/components/sections/PostureGrid'
import PullQuote from '@/components/sections/PullQuote'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = PAGE_META.research

export default function ResearchPage() {
  return (
    <>
      <JsonLd schema={SCHEMA.breadcrumb.research} />

      <Hero
        eyebrow="Qordova Labs Inc — Research"
        headline={<>Research discipline for<br /><em>governed</em> AI infrastructure.</>}
        subhead="Qordova approaches research as a practical engineering discipline focused on execution control, reviewability, authority boundaries, auditability, and long-horizon operating models."
        primaryCta={{ label: 'Discuss research and architecture', href: '/contact' }}
        secondaryCta={{ label: 'Contact Qordova', href: '/contact' }}
      />

      <SectionBlock
        label="Orientation"
        heading="Architecture and method, not trend commentary."
        body="Qordova research focuses on architecture, governance methods, execution design, operating boundaries, and how intelligent systems behave under real institutional conditions."
        background="surface"
        right={
          <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#555552] leading-[1.9] pt-1">
            Platform: KAIS<br />
            Governed by: ORION<br />
            Focus: Long-horizon infrastructure
          </div>
        }
      />

      <CardGrid
        label="Research themes"
        heading="Where inquiry and architecture meet."
        columns={3}
        background="base"
        cards={[
          { num: '01', title: 'Governed execution models',           body: 'How AI work can be authorized, constrained, reviewed, and evidenced under explicit operating conditions.' },
          { num: '02', title: 'Control plane architecture',          body: 'How authority, routing, boundary enforcement, and execution gating are structured in enterprise AI systems.' },
          { num: '03', title: 'Auditability and evidence',           body: 'Reconstructible output, reviewable decisions, and conditions required for reliable post-execution analysis.' },
          { num: '04', title: 'Multi-provider operating models',     body: 'How policy continuity and execution discipline can persist across heterogeneous providers and targets.' },
          { num: '05', title: 'Workflow consequence analysis',       body: 'How different operating environments change the meaning of review, accountability, and risk.' },
          { num: '06', title: 'Long-horizon infrastructure methods', body: 'Durable methods for building enterprise AI systems that remain governable over time, not just performant in short demos.' },
        ]}
      />

      <PullQuote
        label="Why research matters here"
        quote="Without architectural research, organizations often adopt AI through fragmented tools, inconsistent policies, and weak execution boundaries."
        points={[
          'Qordova research focuses on the structures required for controlled operation, not capability display alone.',
          'Architecture choices made early in AI adoption determine how governable a system remains over time.',
          'Research that ignores institutional context produces methods that fail under real operating conditions.',
        ]}
        background="surface"
      />

      <PostureGrid
        label="Research posture"
        heading="How Qordova approaches the work."
        background="base"
        columns={5}
        items={[
          { title: 'Architecture first' },
          { title: 'Evidence discipline' },
          { title: 'Boundary awareness' },
          { title: 'Institutional context' },
          { title: 'Long horizon design' },
        ]}
      />

      <FinalCTA
        headline="Start with method and structure, not trend repetition."
        primaryCta={{ label: 'Discuss research and architecture', href: '/contact' }}
        secondaryCta={{ label: 'Back to Qordova', href: '/' }}
        background="surface"
        layout="split"
      />
    </>
  )
}
