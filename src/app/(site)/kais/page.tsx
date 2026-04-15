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

export const metadata: Metadata = PAGE_META.kais

export default function KaisPage() {
  return (
    <>
      <JsonLd schema={SCHEMA.breadcrumb.kais} />
      <JsonLd schema={SCHEMA.softwareApp.kais} />
      <JsonLd schema={SCHEMA.faq.kais} />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <Hero
        eyebrow="Qordova Labs Inc — Flagship Platform"
        headline={<>KAIS, <em>governed</em> AI execution<br />for enterprise operations.</>}
        subhead="KAIS provides a control surface for authorizing, constraining, auditing, and reviewing AI execution across providers and workflows."
        primaryCta={{ label: 'Request KAIS Briefing', href: '/contact' }}
        secondaryCta={{ label: 'Contact Qordova', href: '/contact' }}
      />

      {/* ── Platform summary ──────────────────────────────────── */}
      <SectionBlock
        label="Platform"
        heading="Built for governed use."
        body="KAIS is built for organizations that need more than model access. It is designed for governed use, where execution must remain within approved boundaries and produce traceable output."
        background="surface"
        right={
          <div className="flex flex-col gap-3 pt-1">
            <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#C8A84B] border border-[rgba(200,168,75,0.20)] bg-[rgba(200,168,75,0.08)] px-3 py-[5px] rounded-[2px] w-fit">
              KAIS
            </div>
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#555552] leading-[1.9]">
              Enterprise Platform<br />
              Qordova Labs Inc<br />
              Singapore
            </div>
          </div>
        }
      />

      {/* ── Core platform model ───────────────────────────────── */}
      <SectionBlock
        label="Core platform model"
        heading="Two layers. One governed execution model."
        background="base"
        right={
          <div className="grid grid-cols-1 gap-px bg-[#2A2A2E] border border-[#2A2A2E]">
            {[
              {
                tag:  'Control plane authority',
                name: 'ORION',
                body: 'ORION is the control plane authority inside KAIS. It governs whether execution is allowed, bounded, denied, or degraded under approved conditions. No ORION permit — no execution.',
              },
              {
                tag:  'Execution platform',
                name: 'KAIS',
                body: 'KAIS acts as the control surface through which AI execution is approved, bounded, audited, and reviewed across providers, teams, and workflows.',
              },
            ].map(({ tag, name, body }) => (
              <div
                key={name}
                className="relative flex flex-col gap-4 p-8 bg-[#0A0A0B] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-[#C8A84B] before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 transition-colors duration-200 hover:bg-[#111114]"
              >
                <span className="font-mono text-[9px] tracking-[0.20em] uppercase text-[#C8A84B]">{tag}</span>
                <span className="text-[28px] font-light tracking-[-0.02em] text-[#F5F5F0] leading-none">{name}</span>
                <span className="block w-8 h-px bg-[rgba(200,168,75,0.30)]" aria-hidden="true" />
                <p className="text-[13px] text-[#B8B8B0] leading-[1.75]">{body}</p>
              </div>
            ))}
          </div>
        }
      />

      {/* ── Core capabilities ─────────────────────────────────── */}
      <CardGrid
        label="Core capabilities"
        heading="What KAIS governs."
        columns={3}
        background="surface"
        cards={[
          { num: '01', title: 'Request capture and normalization',              body: 'Every invocation is intercepted, normalized, and logged before any action proceeds.' },
          { num: '02', title: 'Permit and policy bound execution',              body: 'ORION evaluates and issues or denies permits under active policy before execution.' },
          { num: '03', title: 'Gate based authorization and deny paths',        body: 'Execution is blocked at the boundary until a valid permit is confirmed present.' },
          { num: '04', title: 'Tool and budget control',                        body: 'Tool access and execution budgets are governed within defined operating parameters.' },
          { num: '05', title: 'Audit artifacts and reconstructible output',     body: 'Every execution emits an immutable, cryptographically chained audit artifact.' },
          { num: '06', title: 'Operator review and governance feedback loops',  body: 'Outputs and decisions are available for structured review and governance reporting.' },
        ]}
      />

      {/* ── Why KAIS matters ──────────────────────────────────── */}
      <PullQuote
        label="Why KAIS matters"
        quote="Many AI systems optimize for capability and speed. KAIS is designed for governed execution under real operational constraints."
        points={[
          'Policy documentation and runtime enforcement are not the same thing. Most organizations can describe what agents should do, but cannot technically constrain what they do.',
          'The boundary between authorization and execution is where governance actually holds — or fails.',
          'KAIS addresses this at the control plane, before invocation proceeds.',
        ]}
        background="base"
      />

      {/* ── Operating principles ──────────────────────────────── */}
      <PostureGrid
        label="Operating principles"
        heading="How KAIS is built to operate."
        background="surface"
        columns={5}
        items={[
          { title: 'Governance first',       desc: 'Policy is the primary constraint on execution — not applied after the fact.' },
          { title: 'Deterministic gates',    desc: 'Authorization boundaries are enforced, not approximated or bypassed under load.' },
          { title: 'Provider neutrality',    desc: 'KAIS governs across providers without architectural preference or lock-in.' },
          { title: 'Evidence by design',     desc: 'Every execution decision produces a replayable, immutable audit artifact.' },
          { title: 'Controlled execution',   desc: 'Fail-closed posture across every critical enforcement and audit boundary.' },
        ]}
      />

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <FAQBlock
        label="KAIS questions"
        heading="What enterprises ask about KAIS."
        background="base"
        items={[
          { q: 'What does fail-closed execution mean in KAIS?',      a: 'Fail-closed means that if a valid ORION permit is not present, execution does not proceed. There is no soft fail, no default-allow, and no bypass path. This is the constitutional enforcement posture of KAIS.' },
          { q: 'What is an immutable audit artifact in KAIS?',        a: 'Every execution event in KAIS produces a cryptographically chained, append-only audit artifact. These artifacts are reconstructible, replayable, and cannot be altered after creation.' },
          { q: 'Is KAIS provider-neutral?',                           a: 'Yes. KAIS governs AI execution across providers without architectural preference or lock-in. ORION enforces policy regardless of which model or workflow execution target is involved.' },
          { q: 'How does KAIS differ from an AI gateway?',            a: 'AI gateways intercept requests and apply routing rules. KAIS centers permit-bound execution governance as its constitutional core — ORION-issued authority with fail-closed enforcement and immutable audit obligations is not equivalent to gateway-level interception.' },
        ]}
      />

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <FinalCTA
        headline="Bring governed AI execution into enterprise operations."
        primaryCta={{ label: 'Request KAIS Briefing', href: '/contact' }}
        secondaryCta={{ label: 'Back to Qordova', href: '/' }}
        background="surface"
      />
    </>
  )
}
