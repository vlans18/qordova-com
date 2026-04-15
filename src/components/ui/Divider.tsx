// Divider — decorative separator line in amber-gold.
// Used between SectionLabel and section heading.
// aria-hidden on all variants — purely decorative.

type DividerVariant = 'gold' | 'border' | 'subtle'
type DividerOrientation = 'horizontal' | 'vertical'

interface DividerProps {
  variant?:     DividerVariant
  orientation?: DividerOrientation
  className?:   string
  // Width override for horizontal (default: 36px)
  width?:       string
  // Height override for vertical (default: full)
  height?:      string
}

const variantColor: Record<DividerVariant, string> = {
  gold:   'bg-[rgba(200,168,75,0.30)]',
  border: 'bg-[#2A2A2E]',
  subtle: 'bg-[rgba(255,255,255,0.06)]',
}

export default function Divider({
  variant     = 'gold',
  orientation = 'horizontal',
  className   = '',
  width,
  height,
}: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <span
        aria-hidden="true"
        role="separator"
        aria-orientation="vertical"
        className={[
          'block w-px flex-shrink-0',
          variantColor[variant],
          className,
        ].filter(Boolean).join(' ')}
        style={{ height: height ?? '100%' }}
      />
    )
  }

  return (
    <span
      aria-hidden="true"
      role="separator"
      aria-orientation="horizontal"
      className={[
        'block h-px flex-shrink-0',
        variantColor[variant],
        className,
      ].filter(Boolean).join(' ')}
      style={{ width: width ?? '36px' }}
    />
  )
}
