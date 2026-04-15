'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { useScrollReveal } from '@/components/motion/useScrollReveal'
import SectionLabel from '@/components/ui/SectionLabel'
import Divider from '@/components/ui/Divider'

// FAQBlock — accessible controlled accordion FAQ section.
//
// Implementation:
//   - Controlled React accordion — one item open at a time via useState
//   - <button> trigger on each question (keyboard and pointer accessible)
//   - aria-expanded on the trigger button
//   - aria-controls pointing to the answer region by id
//   - <dl>/<dt>/<dd> semantic structure for GEO machine-readability
//   - Answer height measured from the answer element's scrollHeight
//     and applied as a CSS custom property — no fixed max-h cap
//
// GEO purpose: provides scannable, machine-parseable Q&A structure
// that generative answer engines can extract and cite accurately.
// Companion to JsonLd.tsx FAQPage schema — content should match.
//
// Usage:
//   <FAQBlock
//     label="Common questions"
//     heading="What enterprises ask about KAIS."
//     items={[{ q: 'What is KAIS?', a: 'KAIS is...' }]}
//   />

interface FAQItem {
  q: string
  a: string
}

interface FAQBlockProps {
  label?:      string
  heading?:    string
  items:       FAQItem[]
  background?: 'base' | 'surface' | 'surface-2'
  id?:         string
  className?:  string
  openFirst?:  boolean
}

const bgMap = {
  'base':      'bg-[#0A0A0B]',
  'surface':   'bg-[#111114]',
  'surface-2': 'bg-[#18181C]',
}

// ── Single FAQ item ────────────────────────────────────────────
// Measures its own answer height via ref.scrollHeight.
// Applies height as inline style so no content is ever clipped.

interface FAQItemProps {
  item:     FAQItem
  index:    number
  blockId:  string
  isOpen:   boolean
  onToggle: (i: number) => void
}

function FAQItemRow({ item, index, blockId, isOpen, onToggle }: FAQItemProps) {
  const answerRef    = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number>(0)

  // Measure answer height whenever item opens or content changes
  useEffect(() => {
    if (answerRef.current) {
      setHeight(answerRef.current.scrollHeight)
    }
  }, [isOpen, item.a])

  const itemId = `faq-answer-${blockId}-${index}`

  return (
    <div className="border-b border-[#2A2A2E]">

      {/* Question — button trigger */}
      <dt>
        <button
          type="button"
          onClick={() => onToggle(index)}
          aria-expanded={isOpen}
          aria-controls={itemId}
          className={[
            'w-full flex items-center justify-between gap-6',
            'py-6 text-left',
            'group',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A84B]',
            'focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B] rounded-[2px]',
            'transition-colors duration-200',
          ].join(' ')}
        >
          <span
            className={[
              'text-[15px] md:text-[16px] font-light leading-[1.5] tracking-[-0.005em]',
              'transition-colors duration-200',
              isOpen
                ? 'text-[#F5F5F0]'
                : 'text-[#B8B8B0] group-hover:text-[#F5F5F0]',
            ].join(' ')}
          >
            {item.q}
          </span>

          {/* Expand/collapse icon — rotates 45° when open */}
          <span
            className={[
              'flex-shrink-0 w-5 h-5 flex items-center justify-center',
              'text-[#C8A84B]',
              'transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
              isOpen ? 'rotate-45' : 'rotate-0',
            ].join(' ')}
            aria-hidden="true"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 2v12M2 8h12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </button>
      </dt>

      {/* Answer — height driven by measured scrollHeight, never clipped */}
      <dd
        id={itemId}
        role="region"
        aria-hidden={!isOpen}
        className="overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          height:  isOpen ? `${height}px` : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        {/* Inner div measured for scrollHeight */}
        <div ref={answerRef} className="pb-7">
          <p className="text-[14px] md:text-[15px] text-[#888884] leading-[1.75] max-w-[680px]">
            {item.a}
          </p>
        </div>
      </dd>

    </div>
  )
}

// ── FAQBlock ───────────────────────────────────────────────────
export default function FAQBlock({
  label,
  heading,
  items,
  background = 'base',
  id,
  className  = '',
  openFirst  = false,
}: FAQBlockProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(openFirst ? 0 : null)

  useScrollReveal(sectionRef, { start: 'top 82%', duration: 0.85 })

  const toggle = useCallback((i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }, [])

  const blockId = id ?? 'faq'

  return (
    <section
      ref={sectionRef}
      id={id}
      className={[
        'gsap-hidden section',
        bgMap[background],
        className,
      ].filter(Boolean).join(' ')}
      aria-labelledby={heading ? `faq-heading-${blockId}` : undefined}
    >
      <div className="container">

        {/* Optional header */}
        {(label || heading) && (
          <div className="mb-12 md:mb-14 flex flex-col gap-5">
            {label && <SectionLabel>{label}</SectionLabel>}
            {label && <Divider />}
            {heading && (
              <h2
                id={`faq-heading-${blockId}`}
                className="section-heading"
              >
                {heading}
              </h2>
            )}
          </div>
        )}

        {/* FAQ list */}
        <dl className="flex flex-col border-t border-[#2A2A2E]">
          {items.map((item, i) => (
            <FAQItemRow
              key={i}
              item={item}
              index={i}
              blockId={blockId}
              isOpen={openIndex === i}
              onToggle={toggle}
            />
          ))}
        </dl>

      </div>
    </section>
  )
}

