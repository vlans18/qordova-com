'use client'

import { useRef } from 'react'
import { useScrollRevealGroup } from '@/components/motion/useScrollReveal'

// TrustBar — horizontal bar of four governance signal statements.
// Items stagger-reveal on scroll entry via useScrollRevealGroup.
// Uses data-reveal attribute as the group selector target.
// On mobile: stacks vertically with border separators.
// Accepts custom items or uses the locked default set.

const DEFAULT_ITEMS = [
  'Deterministic execution gates',
  'Traceable outputs and audit artifacts',
  'Provider neutral control plane',
  'Fail closed governance posture',
] as const

interface TrustBarProps {
  items?: readonly string[]
}

export default function TrustBar({ items = DEFAULT_ITEMS }: TrustBarProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useScrollRevealGroup(containerRef, {
    selector:  '[data-reveal]',
    start:     'top 88%',
    duration:  0.7,
    stagger:   0.09,
  })

  return (
    <div
      className="bg-[#111114] border-y border-[#2A2A2E]"
      aria-label="Platform trust signals"
    >
      <div
        ref={containerRef}
        className="container"
      >
        <ul className="flex flex-col md:flex-row md:divide-x md:divide-[#2A2A2E]">
          {items.map((item) => (
            <li
              key={item}
              data-reveal
              className={[
                'gsap-hidden',
                'flex items-center gap-3',
                'py-4 md:py-5 px-0 md:px-7',
                'first:md:pl-0 last:md:pr-0',
                'border-b border-[#2A2A2E] last:border-b-0 md:border-b-0',
                'flex-1',
              ].join(' ')}
            >
              <span
                className="block w-[5px] h-[5px] rounded-full bg-[#C8A84B] flex-shrink-0"
                aria-hidden="true"
              />
              <span className="font-mono text-[10px] md:text-[10.5px] tracking-[0.10em] uppercase text-[#B8B8B0] leading-none">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
