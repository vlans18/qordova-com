'use client'

import { useRef } from 'react'
import { useScrollRevealGroup } from '@/components/motion/useScrollReveal'
import SectionLabel from '@/components/ui/SectionLabel'
import Divider from '@/components/ui/Divider'

// PostureGrid — horizontal grid of principle or posture blocks.
// Each block: gold marker line + title + optional description.
// Gold marker extends on hover (CSS transition).
// Blocks stagger-reveal on scroll via useScrollRevealGroup.
// Default: 5 columns on desktop, 3 on tablet, 2 on mobile.
// Configurable column count for non-standard use cases.
//
// Usage:
//   <PostureGrid
//     label="Operating posture"
//     heading="How KAIS holds the boundary."
//     items={[
//       { title: 'Governance first', desc: 'Policy is the primary constraint.' },
//     ]}
//   />

interface PostureItem {
  title: string
  desc?: string
}

interface PostureGridProps {
  label?:      string
  heading?:    string
  items:       PostureItem[]
  columns?:    3 | 4 | 5 | 6
  background?: 'base' | 'surface' | 'surface-2'
  id?:         string
  className?:  string
}

const bgMap = {
  'base':      'bg-[#0A0A0B]',
  'surface':   'bg-[#111114]',
  'surface-2': 'bg-[#18181C]',
}

const colMap: Record<3 | 4 | 5 | 6, string> = {
  3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
  4: 'grid-cols-2 md:grid-cols-4',
  5: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
  6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
}

export default function PostureGrid({
  label,
  heading,
  items,
  columns    = 5,
  background = 'base',
  id,
  className  = '',
}: PostureGridProps) {
  const gridRef = useRef<HTMLDivElement>(null)

  useScrollRevealGroup(gridRef, {
    selector: '[data-reveal]',
    start:    'top 80%',
    duration: 0.6,
    stagger:  0.06,
  })

  return (
    <section
      id={id}
      className={[
        'section',
        bgMap[background],
        className,
      ].filter(Boolean).join(' ')}
    >
      <div className="container">

        {/* Optional header */}
        {(label || heading) && (
          <div className="mb-12 md:mb-14 flex flex-col gap-5">
            {label   && <SectionLabel>{label}</SectionLabel>}
            {label   && <Divider />}
            {heading && <h2 className="section-heading">{heading}</h2>}
          </div>
        )}

        {/* Grid */}
        <div
          ref={gridRef}
          className={[
            'grid gap-0',
            'border-t border-l border-[#2A2A2E]',
            colMap[columns],
          ].join(' ')}
          role="list"
        >
          {items.map(({ title, desc }) => (
            <div
              key={title}
              data-reveal
              role="listitem"
              className={[
                'gsap-hidden group',
                'flex flex-col gap-4',
                'p-7 md:p-8',
                'border-b border-r border-[#2A2A2E]',
                'transition-colors duration-200',
                'hover:bg-[rgba(200,168,75,0.035)]',
              ].join(' ')}
            >
              {/* Gold marker — extends on hover */}
              <div
                className={[
                  'w-6 h-px bg-[#C8A84B]',
                  'transition-[width] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
                  'group-hover:w-10',
                ].join(' ')}
                aria-hidden="true"
              />

              {/* Title */}
              <h3 className="text-[15px] font-normal leading-[1.3] text-[#F5F5F0]">
                {title}
              </h3>

              {/* Description */}
              {desc && (
                <p className="text-[12px] md:text-[13px] text-[#888884] leading-[1.65]">
                  {desc}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
