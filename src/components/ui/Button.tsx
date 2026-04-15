import Link from 'next/link'
import { forwardRef } from 'react'

// ── Types ──────────────────────────────────────────────────────
type ButtonVariant = 'primary' | 'ghost' | 'text'
type ButtonSize    = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?:  ButtonVariant
  size?:     ButtonSize
  disabled?: boolean
  className?: string
  children:  React.ReactNode
}

// As a button element
interface ButtonAsButton extends ButtonBaseProps {
  as?: 'button'
  href?: never
  type?: 'button' | 'submit' | 'reset'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

// As a Next.js Link
interface ButtonAsLink extends ButtonBaseProps {
  as: 'link'
  href: string
  type?: never
  onClick?: never
}

type ButtonProps = ButtonAsButton | ButtonAsLink

// ── Style maps ─────────────────────────────────────────────────
const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    'bg-[#C8A84B] text-[#0A0A0B]',
    'hover:bg-[#D4B55A] active:opacity-90',
    'focus-visible:ring-[#C8A84B]',
    'font-medium',
  ].join(' '),

  ghost: [
    'bg-transparent text-[#C8A84B]',
    'border border-[rgba(200,168,75,0.30)]',
    'hover:border-[#C8A84B] hover:bg-[rgba(200,168,75,0.08)]',
    'active:opacity-80',
    'focus-visible:ring-[#C8A84B]',
    'font-normal',
  ].join(' '),

  text: [
    'bg-transparent text-[#B8B8B0] px-0',
    'hover:text-[#F5F5F0]',
    'active:opacity-80',
    'focus-visible:ring-[#C8A84B]',
    'font-normal',
    'underline-offset-4 hover:underline',
  ].join(' '),
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-[8px]  text-[10px] tracking-[0.14em]',
  md: 'px-5 py-[10px] text-[10px] tracking-[0.14em]',
  lg: 'px-7 py-[13px] text-[11px] tracking-[0.14em]',
}

// ── Base class string ──────────────────────────────────────────
const baseClass = [
  'inline-flex items-center justify-center gap-2',
  'uppercase rounded-[2px] whitespace-nowrap',
  'transition-all duration-200 ease-in-out',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]',
  'disabled:opacity-40 disabled:pointer-events-none',
  'select-none',
].join(' ')

// ── Button component ───────────────────────────────────────────
const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(props, ref) {
  const {
    variant  = 'primary',
    size     = 'md',
    disabled = false,
    className = '',
    children,
  } = props

  const classes = [
    baseClass,
    variantStyles[variant],
    sizeStyles[size],
    className,
  ].filter(Boolean).join(' ')

  // Render as Next.js Link
  if (props.as === 'link') {
    return (
      <Link
        href={props.href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        aria-disabled={disabled || undefined}
      >
        {children}
      </Link>
    )
  }

  // Render as button element
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={disabled}
      className={classes}
      aria-disabled={disabled || undefined}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
export type { ButtonProps, ButtonVariant, ButtonSize }
