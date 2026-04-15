'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useHeroReveal } from '@/components/motion/useHeroReveal'

// Hero — primary above-the-fold section for every page.
// GSAP reveal via useHeroReveal — staggered fade-up on mount.
// Elements initialise at opacity:0 via .gsap-hidden class (globals.css).
//
// Accessibility:
//   - Decorative grid overlay and radial glow: aria-hidden="true"
//   - Eyebrow wrapper: no aria-hidden — text is available to assistive tech
//   - Decorative line span inside eyebrow: aria-hidden="true"
//   - h1 has id="hero-headline" for section aria-labelledby
//   - Both CTAs use min-h-[44px] for WCAG touch target compliance
//
// Usage:
//   <Hero
//     eyebrow="Qordova Labs Inc — Enterprise AI Governance"
//     headline={<>Governed AI execution for <em>enterprise</em></>}
//     subhead="Qordova builds infrastructure that governs how AI is invoked..."
//     primaryCta={{ label: 'Request Briefing', href: '/contact' }}
//     secondaryCta={{ label: 'See KAIS', href: '/kais' }}
//   />

interface CtaProps {
  label: string
  href:  string
}

interface HeroProps {
  eyebrow?:     string
  headline:     React.ReactNode
  subhead:      string
  primaryCta:   CtaProps
  secondaryCta?: CtaProps
  subheadWidth?: string
}

export default function Hero({
  eyebrow,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  subheadWidth = 'max-w-[600px]',
}: HeroProps) {
  const eyebrowRef  = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subheadRef  = useRef<HTMLParagraphElement>(null)
  const ctasRef     = useRef<HTMLDivElement>(null)

  useHeroReveal(
    [eyebrowRef, headlineRef, subheadRef, ctasRef],
    { delay: 0.08, stagger: 0.13, duration: 0.9 }
  )

  return (
    <section
      className={[
        'relative flex items-center overflow-hidden',
        'min-h-[100svh] md:min-h-[88svh]',
        'pt-[96px] pb-16 md:pt-[120px] md:pb-20',
        'bg-[#0A0A0B]',
      ].join(' ')}
      aria-labelledby="hero-headline"
    >
      {/* Decorative grid overlay — purely visual, hidden from AT */}
      <div
        className="absolute inset-0 grid-overlay pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative radial glow — purely visual, hidden from AT */}
      <div
        className="hero-glow"
        aria-hidden="true"
      />

      <div className="container relative z-10 w-full">
        <div className="max-w-[860px]">

          {/* Eyebrow — wrapper is NOT aria-hidden; text is available to AT */}
          {eyebrow && (
            <div
              ref={eyebrowRef}
              className="gsap-hidden flex items-center gap-3 mb-7"
            >
              {/* Decorative line — hidden from AT */}
              <span
                className="block flex-shrink-0 w-7 h-px bg-[#C8A84B]"
                aria-hidden="true"
              />
              <span className="font-mono text-[10px] tracking-[0.20em] uppercase text-[#C8A84B] leading-none">
                {eyebrow}
              </span>
            </div>
          )}

          {/* Headline */}
          <h1
            id="hero-headline"
            ref={headlineRef}
            className={[
              'gsap-hidden',
              'text-display-xl font-light leading-[1.06] tracking-[-0.02em]',
              'text-[#F5F5F0] mb-6 md:mb-7',
              '[&_em]:not-italic [&_em]:text-[#C8A84B] [&_em]:font-light [&_em]:italic',
            ].join(' ')}
          >
            {headline}
          </h1>

          {/* Subhead */}
          <p
            ref={subheadRef}
            className={[
              'gsap-hidden',
              'text-[17px] md:text-[18px] font-light leading-[1.7]',
              'text-[#B8B8B0] mb-10 md:mb-12',
              subheadWidth,
            ].join(' ')}
          >
            {subhead}
          </p>

          {/* CTAs */}
          <div
            ref={ctasRef}
            className="gsap-hidden flex flex-wrap items-center gap-3 md:gap-4"
          >
            <Link
              href={primaryCta.href}
              className={[
                'inline-flex items-center justify-center',
                'px-6 py-3 md:px-7 md:py-[13px]',
                'text-[11px] tracking-[0.14em] uppercase font-medium',
                'bg-[#C8A84B] text-[#0A0A0B] rounded-[2px]',
                'transition-opacity duration-200 hover:opacity-85 active:opacity-90',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A84B]',
                'focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]',
                'min-h-[44px]',
              ].join(' ')}
            >
              {primaryCta.label}
            </Link>

            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={[
                  'inline-flex items-center justify-center',
                  'px-6 py-3 md:px-7 md:py-[13px]',
                  'text-[11px] tracking-[0.14em] uppercase',
                  'text-[#C8A84B] bg-transparent',
                  'border border-[rgba(200,168,75,0.30)]',
                  'rounded-[2px]',
                  'transition-all duration-200',
                  'hover:border-[#C8A84B] hover:bg-[rgba(200,168,75,0.08)]',
                  'active:opacity-80',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A84B]',
                  'focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]',
                  'min-h-[44px]',
                ].join(' ')}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
