'use client'

import { useRef } from 'react'
import { useScrollReveal } from '@/components/motion/useScrollReveal'
import SectionLabel from '@/components/ui/SectionLabel'
import Divider from '@/components/ui/Divider'

// ListSection — vertical list of content rows.
// Each row: number left, title + copy right.
// Used for solution areas, governance areas, and research themes
// where prose-weight copy benefits from a list layout.
// Section reveals as a unit on scroll — no per-row stagger
// (rows are closely spaced; per-row stagger would feel janky).
//
// Usage:
//   <ListSection
//     label="Solution areas"
//     heading="Where governed execution applies."
//     items={[{ num: '01', title: 'Enterprise AI', copy: '...' }]}
//   />

interface ListItem {
  num?:   string    // Optional — auto-generated if omitted
  title:  string
  copy?:  string
}

interface ListSectionProps {
  label?:      string
  heading?:    string
  items:       ListItem[]
  background?: 'base' | 'surface' | 'surface-2'
  id?:         string
  className?:  string
}

const bgMap = {
  'base':      'bg-[#0A0A0B]',
  'surface':   'bg-[#111114]',
  'surface-2': 'bg-[#18181C]',
}

export default function ListSection({
  label,
  heading,
  items,
  background = 'base',
  id,
  className  = '',
}: ListSectionProps) {
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

        {/* Optional header */}
        {(label || heading) && (
          <div className="mb-12 md:mb-14 flex flex-col gap-5">
            {label   && <SectionLabel>{label}</SectionLabel>}
            {label   && <Divider />}
            {heading && <h2 className="section-heading">{heading}</h2>}
          </div>
        )}

        {/* List */}
        <ol
          className="flex flex-col border-t border-[#2A2A2E]"
          role="list"
        >
          {items.map((item, i) => (
            <li
              key={item.title}
              className={[
                'group grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-4 sm:gap-12',
                'py-8 md:py-10 border-b border-[#2A2A2E]',
                'relative',
                // Subtle hover background
                'transition-colors duration-200',
                'hover:bg-[rgba(200,168,75,0.025)]',
                // Full-bleed hover — negative margin trick
                '-mx-6 px-6 md:-mx-10 md:px-10',
              ].join(' ')}
            >
              {/* Number + title block */}
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#C8A84B]">
                  {item.num ?? String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-[18px] md:text-[20px] font-light leading-[1.25] tracking-[-0.01em] text-[#F5F5F0]">
                  {item.title}
                </h3>
              </div>

              {/* Copy */}
              {item.copy && (
                <p className="text-[14px] md:text-[15px] text-[#B8B8B0] leading-[1.75] self-start pt-[2px] sm:pt-[26px]">
                  {item.copy}
                </p>
              )}
            </li>
          ))}
        </ol>

      </div>
    </section>
  )
}
