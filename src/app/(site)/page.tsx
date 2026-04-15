import type { Metadata } from 'next'
import { PAGE_META } from '@/components/seo/PageMeta'
import JsonLd, { SCHEMA } from '@/components/seo/JsonLd'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import SectionBlock from '@/components/sections/SectionBlock'
import CardGrid from '@/components/sections/CardGrid'
import PostureGrid from '@/components/sections/PostureGrid'
import PullQuote from '@/components/sections/PullQuote'
import FinalCTA from '@/components/sections/FinalCTA'
import FAQBlock from '@/components/sections/FAQBlock'

export const metadata: Metadata = PAGE_META.home

// ── Home page structured data ──────────────────────────────────
// FAQ schema supports GEO retrieval by answer engines.
// Breadcrumb is minimal for root — just the org name.

export default function HomePage() {
  return (
    <>
      <JsonLd schema={SCHEMA.breadcrumb.home} />
      <JsonLd schema={SCHEMA.faq.home} />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <Hero
        eyebrow="Qordova Labs Inc — Enterprise AI Governance"
        headline={
          <>
            Governed AI execution<br />
            for <em>enterprise</em> and<br />
            regulated environments.
          </>
        }
        subhead="Qordova Labs Inc is the parent company. KAIS is its flagship governed AI execution platform, built to govern how AI is invoked, constrained, audited, and evidenced across providers, teams, and workflows."
        primaryCta={{ label: 'Request Briefing', href: '/contact' }}
        secondaryCta={{ label: 'See KAIS', href: '/kais' }}
      />

      {/* ── Trust bar ─────────────────────────────────────────── */}
      <TrustBar />

      {/* ── Why this matters ──────────────────────────────────── */}
      <PullQuote
        label="The operating problem"
        quote="AI capability is moving faster than enterprise control."
        points={[
          'Most organizations now face AI tools multiplying across teams, providers, and workflows faster than governance can mature.',
          'The result is execution without clear boundaries, weak traceability, and rising cost and policy drift.',
          'Qordova addresses this at the point of execution — before invocation proceeds.',
        ]}
        background="surface"
        id="governance"
      />

      {/* ── What Qordova delivers ─────────────────────────────── */}
      <SectionBlock
        label="What Qordova delivers"
        heading="From experimentation to governed operation."
        body="Qordova helps enterprises move from informal AI usage to governed execution models. The flagship platform, KAIS, is designed to authorize, constrain, review, and evidence AI execution under explicit operating conditions."
        background="base"
        id="solutions"
        right={
          <div className="flex flex-col border border-[#2A2A2E] bg-[#111114] relative">
            <div className="absolute top-0 left-10 w-14 h-[2px] bg-[#C8A84B]" aria-hidden="true" />
            {[
              'Authorize AI invocation under defined conditions',
              'Constrain execution within explicit parameters',
              'Review outputs against governance criteria',
              'Evidence every decision with immutable audit artifacts',
              'Operate across providers without lock-in',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-8 py-4 border-b border-[#2A2A2E] last:border-b-0"
              >
                <span className="font-mono text-[10px] tracking-[0.15em] text-[#C8A84B] flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[13px] text-[#B8B8B0] leading-[1.65]">{item}</span>
              </div>
            ))}
          </div>
        }
      />

      {/* ── What KAIS is ──────────────────────────────────────── */}
      <SectionBlock
        label="KAIS — Governed AI execution platform"
        heading="What KAIS is."
        background="surface"
        id="kais"
        body={
          <div className="flex flex-col gap-4">
            <p className="text-[16px] text-[#B8B8B0] leading-[1.75]">
              KAIS is the flagship governed AI execution platform of Qordova Labs Inc. It acts as the control surface through which AI execution is approved, bounded, audited, and reviewed.
            </p>
            <p className="text-[13px] text-[#888884] leading-[1.7] font-mono tracking-[0.03em]">
              ORION — Orchestrated Reasoning and Intelligence Over Networks — is the sole permit issuer within KAIS. No ORION permit, no execution.
            </p>
          </div>
        }
        right={
          <div className="flex flex-col border-t border-[#2A2A2E]">
            {[
              { text: 'Not a model vendor.',                              affirm: false },
              { text: 'Not a chatbot wrapper.',                          affirm: false },
              { text: 'Not only an LLM gateway.',                        affirm: false },
              { text: 'The control surface for authorizing AI execution.', affirm: true },
              { text: 'Fail-closed. Audit-evidenced. Provider neutral.',  affirm: true },
            ].map(({ text, affirm }) => (
              <div
                key={text}
                className="flex items-baseline gap-4 py-5 border-b border-[#2A2A2E]"
              >
                <span
                  className="flex-shrink-0 text-[13px]"
                  style={{ color: affirm ? '#C8A84B' : 'rgba(250,250,250,0.18)' }}
                  aria-hidden="true"
                >
                  {affirm ? '✦' : '×'}
                </span>
                <span
                  className="text-[13px] leading-[1.5]"
                  style={{ color: affirm ? '#F5F5F0' : '#888884' }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        }
      />

      {/* ── Execution model ───────────────────────────────────── */}
      <CardGrid
        label="Execution model"
        heading="How governed execution works."
        columns={3}
        background="base"
        id="security"
        cards={[
          { num: '01', title: 'Capture',  body: 'Every invocation request is intercepted and logged before any downstream action is taken.' },
          { num: '02', title: 'Permit',   body: 'ORION evaluates the request against active policy and issues or denies an execution permit.' },
          { num: '03', title: 'Gate',     body: 'Execution is blocked at the enforcement boundary until a valid permit is present.' },
          { num: '04', title: 'Execute',  body: 'Permitted tasks proceed within the exact parameters defined in the permit schema.' },
          { num: '05', title: 'Audit',    body: 'Every execution emits an immutable, cryptographically chained audit artifact.' },
          { num: '06', title: 'Review',   body: 'Outputs and decisions are available for structured post-execution review and governance reporting.' },
        ]}
      />

      {/* ── Operating environments ────────────────────────────── */}
      <CardGrid
        label="Operating environments"
        heading="Designed for serious operating environments."
        columns={2}
        background="surface"
        id="industries"
        cards={[
          { tag: 'Enterprise',       title: 'Enterprise internal AI',                     body: 'Policy enforcement across teams, tools, and providers with traceable output.' },
          { tag: 'Regulated',        title: 'Financial and regulated workflows',           body: 'Bounded execution and reviewable outputs where compliance matters.' },
          { tag: 'High consequence', title: 'Healthcare and high consequence operations',  body: 'Controlled invocation paths where human accountability remains explicit.' },
          { tag: 'Knowledge work',   title: 'Research and analysis workflows',             body: 'Evidence discipline and reconstructible output for serious research work.' },
        ]}
      />

      {/* ── What sets Qordova apart ───────────────────────────── */}
      <PostureGrid
        label="Differentiation"
        heading="What sets Qordova apart."
        background="base"
        items={[
          { title: 'Governance first',       desc: 'Policy is the primary design constraint, not an afterthought.' },
          { title: 'Deterministic gates',    desc: 'Execution boundaries are enforced, not approximated.' },
          { title: 'Provider neutrality',    desc: 'No architectural lock-in to any single AI model or vendor.' },
          { title: 'Evidence by design',     desc: 'Every decision emits a replayable, immutable audit artifact.' },
          { title: 'Operational discipline', desc: 'Fail-closed posture across every critical enforcement boundary.' },
        ]}
        columns={5}
      />

      {/* ── Engagement paths ──────────────────────────────────── */}
      <SectionBlock
        label="Engagement"
        heading="Engage Qordova the right way."
        body="Qordova works with enterprise teams that are serious about AI governance. Conversations start with architecture and operating context, not demos."
        background="surface"
        id="about"
        right={
          <div className="flex flex-col border-t border-[#2A2A2E] mt-1">
            {[
              'Request an enterprise briefing',
              'Discuss a pilot or controlled evaluation',
              'Explore architecture and governance fit',
              'Open a strategic or implementation conversation',
            ].map((path) => (
              <div
                key={path}
                className="flex items-center gap-5 py-5 border-b border-[#2A2A2E] group cursor-default"
              >
                <span className="text-[13px] text-[#C8A84B] flex-shrink-0" aria-hidden="true">→</span>
                <span className="text-[15px] text-[#B8B8B0]">{path}</span>
              </div>
            ))}
          </div>
        }
      />

      {/* ── Contact framing ───────────────────────────────────── */}
      <SectionBlock
        label="Contact"
        heading="Start the right conversation."
        body="Qordova engages with enterprise and regulated-sector organisations evaluating governed AI infrastructure. Initial conversations focus on operating context and architecture — not product demonstrations."
        background="base"
        id="contact"
        right={
          <div className="flex flex-col gap-4 pt-2">
            <a
              href="mailto:enterprise@qordova.com"
              className="inline-flex items-center justify-center min-h-[44px] px-7 py-[13px] text-[11px] tracking-[0.14em] uppercase font-medium bg-[#C8A84B] text-[#0A0A0B] rounded-[2px] transition-opacity duration-200 hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A84B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]"
            >
              Request Briefing
            </a>
            <a
              href="mailto:contact@qordova.com"
              className="inline-flex items-center justify-center min-h-[44px] px-7 py-[13px] text-[11px] tracking-[0.14em] uppercase text-[#C8A84B] border border-[rgba(200,168,75,0.30)] rounded-[2px] transition-all duration-200 hover:border-[#C8A84B] hover:bg-[rgba(200,168,75,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A84B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]"
            >
              Contact Qordova
            </a>
          </div>
        }
      />

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <FAQBlock
        label="Common questions"
        heading="What enterprises ask about Qordova."
        background="surface"
        items={[
          { q: 'What is Qordova Labs Inc?',                       a: 'Qordova Labs Inc is the parent company. It is a Singapore-incorporated company that builds governed AI infrastructure for enterprise and regulated environments. KAIS is its flagship platform.' },
          { q: 'What is KAIS?',                          a: 'KAIS is a governed AI execution platform from Qordova Labs Inc. It provides permit-bound, fail-closed execution authority through ORION. KAIS governs whether AI execution is allowed to proceed, under what conditions, and produces immutable audit evidence.' },
          { q: 'What is ORION?',                         a: 'ORION — Orchestrated Reasoning and Intelligence Over Networks — is the control plane authority inside KAIS. ORION is the sole permit issuer. No ORION permit means no execution.' },
          { q: 'How is KAIS different from an AI gateway?', a: 'AI gateways focus on request routing, cost controls, and throughput. KAIS centers permit-bound execution governance as its constitutional core. Adjacent systems may intercept or route requests, but that is not equivalent to ORION-issued execution authority with fail-closed enforcement and immutable audit obligations.' },
          { q: 'Who is this for?',                    a: 'Qordova Labs Inc and KAIS serve enterprise and regulated-sector organizations that need AI execution to remain bounded, reviewable, and auditable, including financial services, healthcare, public sector, and multi-provider enterprise environments.' },
        ]}
      />

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <FinalCTA
        headline="Bring governed AI execution into your operating model."
        primaryCta={{ label: 'Request Briefing', href: '/contact' }}
        secondaryCta={{ label: 'Contact Qordova', href: '/contact' }}
        background="base"
      />
    </>
  )
}












