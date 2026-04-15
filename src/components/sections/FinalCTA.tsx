'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useScrollReveal } from '@/components/motion/useScrollReveal'

// FinalCTA — full-width call-to-action band used at the bottom of every page.
// Scroll-triggered fade-up reveal.
// Decorative radial gold glow — aria-hidden.
// Accepts custom headline and up to two CTAs.
// Default layout: centred text, horizontal CTA buttons.
// Optional: split layout with headline left, CTAs right.
//
// Usage:
//   <FinalCTA
//     headline="Bring governed AI execution into your operating model."
//     primaryCta={{ label: 'Request Briefing', href: '/contact' }}
//     secondaryCta={{ label: 'Contact Qordova', href: '/contact' }}
//   />

interface CtaProps {
  label: string
  href:  string
}

type FinalCTALayout = 'centred' | 'split'

interface FinalCTAProps {
  headline:      string
  primaryCta:    CtaProps
  secondaryCta?: CtaProps
  layout?:       FinalCTALayout
  background?:   'base' | 'surface' | 'surface-2'
  id?:           string
  className?:    string
}

const bgMap = {
  'base':      'bg-[#0A0A0B]',
  'surface':   'bg-[#111114]',
  'surface-2': 'bg-[#18181C]',
}

export default function FinalCTA({
  headline,
  primaryCta,
  secondaryCta,
  layout     = 'centred',
  background = 'surface',
  id,
  className  = '',
}: FinalCTAProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useScrollReveal(sectionRef, { start: 'top 85%', duration: 0.9 })

  const isSplit = layout === 'split'

  return (
    <section
      ref={sectionRef}
      id={id}
      className={[
        'gsap-hidden',
        'relative overflow-hidden',
        'py-[96px] md:py-[128px]',
        'border-t border-b border-[#2A2A2E]',
        bgMap[background],
        className,
      ].filter(Boolean).join(' ')}
    >
      {/* Decorative radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(200,168,75,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        {isSplit ? (
          /* Split layout */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <h2 className="text-[clamp(26px,3.5vw,46px)] font-light leading-[1.2] tracking-[-0.01em] text-[#F5F5F0]">
              {headline}
            </h2>
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-3 md:gap-4">
                <CTAButtons primary={primaryCta} secondary={secondaryCta} />
              </div>
            </div>
          </div>
        ) : (
          /* Centred layout */
          <div className="flex flex-col items-center text-center gap-10 max-w-[720px] mx-auto">
            <h2 className="text-[clamp(28px,4vw,52px)] font-light leading-[1.15] tracking-[-0.015em] text-[#F5F5F0]">
              {headline}
            </h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <CTAButtons primary={primaryCta} secondary={secondaryCta} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

// ── Internal CTA button pair ───────────────────────────────────
function CTAButtons({
  primary,
  secondary,
}: {
  primary:    CtaProps
  secondary?: CtaProps
}) {
  return (
    <>
      <Link
        href={primary.href}
        className={[
          'inline-flex items-center justify-center min-h-[44px]',
          'px-7 py-[13px] text-[11px] tracking-[0.14em] uppercase font-medium',
          'bg-[#C8A84B] text-[#0A0A0B] rounded-[2px]',
          'transition-opacity duration-200 hover:opacity-85 active:opacity-90',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A84B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]',
        ].join(' ')}
      >
        {primary.label}
      </Link>

      {secondary && (
        <Link
          href={secondary.href}
          className={[
            'inline-flex items-center justify-center min-h-[44px]',
            'px-7 py-[13px] text-[11px] tracking-[0.14em] uppercase',
            'text-[#C8A84B] bg-transparent',
            'border border-[rgba(200,168,75,0.30)] rounded-[2px]',
            'transition-all duration-200',
            'hover:border-[#C8A84B] hover:bg-[rgba(200,168,75,0.08)]',
            'active:opacity-80',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A84B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]',
          ].join(' ')}
        >
          {secondary.label}
        </Link>
      )}
    </>
  )
}
