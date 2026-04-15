// Tag — small label pill for categories, platform identifiers, and status.
// Used on solution cards, industry segments, and KAIS platform references.
// Multiple visual variants to distinguish category types.

type TagVariant = 'gold' | 'surface' | 'outline' | 'ghost'

interface TagProps {
  children:   React.ReactNode
  variant?:   TagVariant
  className?: string
  // Optional: render as an inline span rather than block element
  inline?:    boolean
}

const variantStyles: Record<TagVariant, string> = {
  gold: [
    'bg-[rgba(200,168,75,0.12)] text-[#C8A84B]',
    'border border-[rgba(200,168,75,0.20)]',
  ].join(' '),

  surface: [
    'bg-[#18181C] text-[#888884]',
    'border border-[#2A2A2E]',
  ].join(' '),

  outline: [
    'bg-transparent text-[#B8B8B0]',
    'border border-[#2A2A2E]',
  ].join(' '),

  ghost: [
    'bg-transparent text-[#888884]',
    'border border-transparent',
  ].join(' '),
}

export default function Tag({
  children,
  variant   = 'surface',
  className = '',
  inline    = false,
}: TagProps) {
  const Tag = inline ? 'span' : 'div'

  return (
    <Tag
      className={[
        // Layout
        'inline-flex items-center',
        // Sizing
        'px-2 py-[3px]',
        // Typography
        'font-mono text-[9px] tracking-[0.18em] uppercase leading-none whitespace-nowrap',
        // Shape
        'rounded-[2px]',
        // Variant
        variantStyles[variant],
        className,
      ].filter(Boolean).join(' ')}
    >
      {children}
    </Tag>
  )
}
