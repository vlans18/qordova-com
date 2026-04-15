// SectionLabel — amber-gold eyebrow label used above section headings.
// Renders as a <p> with role="text" for clean screen reader output.
// The decorative gold line is CSS ::before — hidden from assistive tech.
// Use above every <h2> or <h3> to establish section context.

interface SectionLabelProps {
  children:   React.ReactNode
  className?: string
  as?:        'p' | 'span' | 'div'
}

export default function SectionLabel({
  children,
  className = '',
  as: Tag   = 'p',
}: SectionLabelProps) {
  return (
    <Tag
      className={[
        // Layout
        'flex items-center gap-3',
        // Typography
        'font-mono text-[10px] tracking-[0.20em] uppercase leading-none',
        // Color
        'text-[#C8A84B]',
        // Decorative line via pseudo-element replicated as sibling span
        className,
      ].filter(Boolean).join(' ')}
    >
      {/* Decorative line — aria-hidden */}
      <span
        className="block flex-shrink-0 w-7 h-px bg-[#C8A84B]"
        aria-hidden="true"
      />
      {children}
    </Tag>
  )
}
