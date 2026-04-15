'use client'

import { useRef } from 'react'
import { useScrollRevealGroup } from '@/components/motion/useScrollReveal'
import SectionLabel from '@/components/ui/SectionLabel'
import Divider from '@/components/ui/Divider'
import Tag from '@/components/ui/Tag'

// CardGrid — reusable grid of content cards.
// Supports 2-col and 3-col layouts.
// Cards stagger-reveal on scroll via useScrollRevealGroup.
// Gold top-accent bar appears on hover via CSS (card-gold-top class).
// Optional section label, divider, and heading above the grid.
//
// Usage:
//   <CardGrid
//     label="Solution areas"
//     heading="Where governed execution applies."
//     columns={2}
//     cards={[
//       { tag: 'Enterprise', title: 'Enterprise internal AI', body: '...' },
//     ]}
//   />

interface CardItem {
  tag?:   string
  num?:   string   // e.g. '01', '02'
  title:  string
  body?:  string
}

type GridColumns = 2 | 3

interface CardGridProps {
  label?:      string
  heading?:    string
  cards:       CardItem[]
  columns?:    GridColumns
  background?: 'base' | 'surface' | 'surface-2'
  id?:         string
  className?:  string
}

const bgMap = {
  'base':      'bg-[#0A0A0B]',
  'surface':   'bg-[#111114]',
  'surface-2': 'bg-[#18181C]',
}

const colMap: Record<GridColumns, string> = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
}

export default function CardGrid({
  label,
  heading,
  cards,
  columns    = 2,
  background = 'base',
  id,
  className  = '',
}: CardGridProps) {
  const gridRef = useRef<HTMLDivElement>(null)

  useScrollRevealGroup(gridRef, {
    selector: '[data-reveal]',
    start:    'top 80%',
    duration: 0.65,
    stagger:  0.07,
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

        {/* Card grid */}
        <div
          ref={gridRef}
          className={[
            'grid gap-px bg-[#2A2A2E]',
            'border border-[#2A2A2E]',
            colMap[columns],
          ].join(' ')}
        >
          {cards.map((card, i) => (
            <article
              key={card.title}
              data-reveal
              className={[
                'gsap-hidden',
                'relative flex flex-col gap-4',
                'p-8 md:p-10',
                bgMap[background],
                'overflow-hidden',
                // Gold top accent on hover
                'before:content-[""] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px]',
                'before:bg-[#C8A84B] before:scale-x-0 before:origin-left',
                'before:transition-transform before:duration-300 before:ease-[cubic-bezier(0.16,1,0.3,1)]',
                'hover:before:scale-x-100',
                'transition-colors duration-200 hover:bg-[#18181C]',
              ].join(' ')}
            >
              {/* Tag or number */}
              {card.tag && (
                <Tag variant="gold">{card.tag}</Tag>
              )}
              {!card.tag && card.num && (
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#C8A84B]">
                  {card.num}
                </span>
              )}
              {!card.tag && !card.num && (
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#C8A84B]">
                  {String(i + 1).padStart(2, '0')}
                </span>
              )}

              {/* Title */}
              <h3 className="text-[18px] md:text-[20px] font-light leading-[1.3] tracking-[-0.01em] text-[#F5F5F0]">
                {card.title}
              </h3>

              {/* Body */}
              {card.body && (
                <p className="text-[13px] md:text-[14px] text-[#888884] leading-[1.72]">
                  {card.body}
                </p>
              )}
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
