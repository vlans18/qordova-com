'use client'

import { useRef } from 'react'
import { useScrollReveal } from '@/components/motion/useScrollReveal'
import SectionLabel from '@/components/ui/SectionLabel'
import Divider from '@/components/ui/Divider'

// SectionBlock — reusable two-column content section.
// Left column: label + divider + heading + body.
// Right column: arbitrary content (visual, list, callout, etc).
// Scroll-triggered fade-up reveal on the section container.
// layout prop controls column ratio and order.
//
// Usage:
//   <SectionBlock
//     label="The operating problem"
//     heading="AI capability is moving faster than enterprise control."
//     body="Most organizations now face..."
//     background="base"
//     right={<MattersAside />}
//   />

type SectionBackground = 'base' | 'surface' | 'surface-2'
type SectionLayout     = 'left-primary' | 'right-primary' | 'equal'

const bgMap: Record<SectionBackground, string> = {
  'base':      'bg-[#0A0A0B]',
  'surface':   'bg-[#111114]',
  'surface-2': 'bg-[#18181C]',
}

const gridMap: Record<SectionLayout, string> = {
  'left-primary':  'grid-cols-1 lg:grid-cols-[1fr_1fr]',
  'right-primary': 'grid-cols-1 lg:grid-cols-[1fr_1fr]',
  'equal':         'grid-cols-1 lg:grid-cols-2',
}

interface SectionBlockProps {
  label?:       string
  heading:      string
  body?:        React.ReactNode
  right?:       React.ReactNode
  background?:  SectionBackground
  layout?:      SectionLayout
  // Optional extra classes on the section element
  className?:   string
  // Pass id for anchor linking from nav
  id?:          string
  // Reverse column order on desktop
  reverseOnDesktop?: boolean
}

export default function SectionBlock({
  label,
  heading,
  body,
  right,
  background       = 'base',
  layout           = 'equal',
  className        = '',
  id,
  reverseOnDesktop = false,
}: SectionBlockProps) {
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
        <div
          className={[
            'grid gap-12 lg:gap-20 items-start',
            gridMap[layout],
            reverseOnDesktop ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : '',
          ].filter(Boolean).join(' ')}
        >
          {/* Left — label, heading, body */}
          <div className="flex flex-col gap-5">
            {label && <SectionLabel>{label}</SectionLabel>}
            <Divider />
            <h2 className="section-heading">
              {heading}
            </h2>
            {body && (
              <div className="flex flex-col gap-4">
                {typeof body === 'string' ? (
                  <p className="text-body-md text-[#B8B8B0] leading-[1.75] body-measure">
                    {body}
                  </p>
                ) : (
                  body
                )}
              </div>
            )}
          </div>

          {/* Right — arbitrary content */}
          {right && (
            <div className="flex flex-col">
              {right}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
