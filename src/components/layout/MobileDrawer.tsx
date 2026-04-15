'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { PRIMARY_NAV, SECONDARY_NAV } from '@/lib/nav'

// Navigation sourced from src/lib/nav.ts.
// No import from Header.tsx — circular dependency eliminated.
// Focus restoration on close is handled by Header.tsx (hamburger ref + timeout).
// This component manages: open focus (to close button), escape key, focus trap.

interface MobileDrawerProps {
  isOpen:      boolean
  onClose:     () => void
  currentPath: string
}

export default function MobileDrawer({
  isOpen,
  onClose,
  currentPath,
}: MobileDrawerProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const drawerRef      = useRef<HTMLDivElement>(null)

  // Focus close button when drawer opens
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus()
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Escape key closes drawer
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onClose])

  // Focus trap
  useEffect(() => {
    if (!isOpen || !drawerRef.current) return
    const drawer   = drawerRef.current
    const focusable = drawer.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last  = focusable[focusable.length - 1]

    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }
    document.addEventListener('keydown', trap)
    return () => document.removeEventListener('keydown', trap)
  }, [isOpen])

  // Active state helper
  const isActive = (href: string) => {
    if (href === '/') return currentPath === '/'
    return currentPath === href || currentPath.startsWith(href + '/')
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={[
          'fixed inset-0 z-[199] bg-[rgba(10,10,11,0.6)] backdrop-blur-sm',
          'transition-opacity duration-300',
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none',
        ].join(' ')}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        id="mobile-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={[
          'fixed top-0 right-0 bottom-0 z-[200]',
          'w-full max-w-[360px] flex flex-col',
          'bg-[#0A0A0B] border-l border-[#2A2A2E]',
          'transition-transform duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >

        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-[64px] border-b border-[#2A2A2E] flex-shrink-0">
          <Link
            href="/"
            onClick={onClose}
            className="flex flex-col gap-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A84B] rounded-[2px]"
            aria-label="Qordova Labs Inc — Home"
          >
            <span className="text-[16px] font-semibold tracking-[0.02em] text-[#F5F5F0] leading-none">
              Qordova Labs Inc
            </span>
            <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-[#C8A84B] leading-none">
              Governed AI Infrastructure
            </span>
          </Link>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className={[
              'flex items-center justify-center w-10 h-10 rounded-[2px]',
              'text-[#888884] hover:text-[#F5F5F0] transition-colors duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A84B]',
            ].join(' ')}
            aria-label="Close navigation menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M5 5L15 15M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Nav content */}
        <nav
          className="flex-1 overflow-y-auto py-6 px-6 flex flex-col"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {/* Primary — Platform */}
          <p className="font-mono text-[9px] tracking-[0.20em] uppercase text-[#555552] mb-3 px-1">
            Platform
          </p>
          <ul className="flex flex-col gap-0 mb-8">
            {PRIMARY_NAV.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={onClose}
                  className={[
                    'flex items-center justify-between px-1 py-[14px]',
                    'text-[15px] tracking-[0.02em] border-b border-[#1E1E23]',
                    'transition-colors duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A84B] focus-visible:ring-offset-1 focus-visible:ring-offset-[#0A0A0B] rounded-[2px]',
                    isActive(href)
                      ? 'text-[#C8A84B] font-medium'
                      : 'text-[#F5F5F0] hover:text-[#C8A84B]',
                  ].join(' ')}
                  aria-current={isActive(href) ? 'page' : undefined}
                >
                  {label}
                  {isActive(href) && (
                    <span className="w-1 h-1 rounded-full bg-[#C8A84B] flex-shrink-0" aria-hidden="true" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Secondary — Company */}
          <p className="font-mono text-[9px] tracking-[0.20em] uppercase text-[#555552] mb-3 px-1">
            Company
          </p>
          <ul className="flex flex-col gap-0">
            {SECONDARY_NAV.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={onClose}
                  className={[
                    'flex items-center justify-between px-1 py-[14px]',
                    'text-[15px] tracking-[0.02em] border-b border-[#1E1E23]',
                    'transition-colors duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A84B] focus-visible:ring-offset-1 focus-visible:ring-offset-[#0A0A0B] rounded-[2px]',
                    isActive(href)
                      ? 'text-[#C8A84B] font-medium'
                      : 'text-[#B8B8B0] hover:text-[#F5F5F0]',
                  ].join(' ')}
                  aria-current={isActive(href) ? 'page' : undefined}
                >
                  {label}
                  {isActive(href) && (
                    <span className="w-1 h-1 rounded-full bg-[#C8A84B] flex-shrink-0" aria-hidden="true" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA — bottom anchored */}
        <div className="px-6 pb-8 pt-4 flex-shrink-0 border-t border-[#2A2A2E]">
          <Link
            href="/contact"
            onClick={onClose}
            className={[
              'flex items-center justify-center w-full',
              'px-5 py-4 text-[11px] tracking-[0.14em] uppercase font-medium',
              'bg-[#C8A84B] text-[#0A0A0B] rounded-[2px]',
              'transition-opacity duration-200 hover:opacity-85',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A84B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]',
            ].join(' ')}
          >
            Request Briefing
          </Link>
          <p className="mt-4 text-center font-mono text-[9px] tracking-[0.12em] uppercase text-[#555552]">
            Qordova Labs Inc Pte. Ltd.
          </p>
        </div>

      </div>
    </>
  )
}
