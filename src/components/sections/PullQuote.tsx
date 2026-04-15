'use client'

import { useRef } from 'react'
import { useScrollReveal } from '@/components/motion/useScrollReveal'
import SectionLabel from '@/components/ui/SectionLabel'
import Divider from '@/components/ui/Divider'

// PullQuote — two-column section with a large pull quote left
// and a supporting dot-list of points right.
// Used for "Why this matters" style sections.
// Scroll-triggered reveal on the section container.
//
// Usage:
//   <PullQuote
//     label="Why this matters"
//     quote="AI capability without governance creates ambiguity..."
//     points={['Point one.', 'Point two.']}
//     background="surface"
//   />

interface PullQuoteProps {
  label?:      string
  quote:       string
  points?:     string[]
  background?: 'base' | 'surface' | 'surface-2'
  id?:         string
  className?:  string
}

const bgMap = {
  'base':      'bg-[#0A0A0B]',
  'surface':   'bg-[#111114]',
  'surface-2': 'bg-[#18181C]',
}

export default function PullQuote({
  label,
  quote,
  points,
  background = 'surface',
  id,
  className  = '',
}: PullQuoteProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useScrollReveal(sectionRef, { start: 'top 82%', duration: 0.85 })

  return (
    <section
      ref={sectionRef}
      id={id}
      className={[
        'gsap-hidden section',
        bgMap[background],
        className,
      ].filter(Boolean).join(' ')}
    >
      <div className="container">

        {label && (
          <div className="flex flex-col gap-5 mb-10 md:mb-14">
            <SectionLabel>{label}</SectionLabel>
            <Divider />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Pull quote */}
          <blockquote
            className={[
              'pull-quote',
              'text-[clamp(20px,2.5vw,30px)] font-light text-[#F5F5F0]',
              'leading-[1.45] tracking-[-0.01em]',
            ].join(' ')}
          >
            {quote}
          </blockquote>

          {/* Supporting points */}
          {points && points.length > 0 && (
            <ul
              className="flex flex-col border-t border-[#2A2A2E]"
              role="list"
            >
              {points.map((point, i) => (
                <li
                  key={i}
                  className={[
                    'flex items-start gap-4',
                    'py-[18px] border-b border-[#2A2A2E]',
                  ].join(' ')}
                >
                  <span
                    className="block w-[5px] h-[5px] rounded-full bg-[#C8A84B] flex-shrink-0 mt-[7px]"
                    aria-hidden="true"
                  />
                  <span className="text-[14px] text-[#B8B8B0] leading-[1.65]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          )}

        </div>
      </div>
    </section>
  )
}
