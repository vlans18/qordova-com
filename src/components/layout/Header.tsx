'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useCallback, useRef } from 'react'
import MobileDrawer from '@/components/layout/MobileDrawer'
import { PRIMARY_NAV, SECONDARY_NAV } from '@/lib/nav'

// Navigation constants sourced from src/lib/nav.ts — no local declarations.
// Circular dependency eliminated: Header → MobileDrawer, both → lib/nav.

export default function Header() {
  const pathname   = usePathname()
  const [scrolled,   setScrolled]   = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Ref to hamburger button — focus returns here when drawer closes
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  // Scroll detection — triggers opaque header at 24px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false)
  }, [pathname])

  // Body scroll lock when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add('drawer-open')
    } else {
      document.body.classList.remove('drawer-open')
    }
    return () => {
      document.body.classList.remove('drawer-open')
    }
  }, [drawerOpen])

  const openDrawer = useCallback(() => setDrawerOpen(true), [])

  // On close: update state, then restore focus to hamburger trigger
  const closeDrawer = useCallback(() => {
    setDrawerOpen(false)
    // Restore focus to trigger after transition completes (350ms drawer)
    setTimeout(() => {
      hamburgerRef.current?.focus()
    }, 360)
  }, [])

  // Active state helper
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <>
      {/* ── Fixed header ──────────────────────────────────────── */}
      <header
        className={[
          'fixed top-0 left-0 right-0 z-[100] h-[64px]',
          'transition-all duration-300 ease-in-out',
          scrolled
            ? 'bg-[rgba(10,10,11,0.93)] backdrop-blur-[16px] border-b border-[#2A2A2E]'
            : 'bg-transparent border-b border-transparent',
        ].join(' ')}
        role="banner"
      >
        <div className="container h-full flex items-center justify-between gap-6">

          {/* Brand */}
          <Link
            href="/"
            className="flex flex-col gap-[2px] flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A84B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B] rounded-[2px]"
            aria-label="Qordova Labs Inc — Home"
          >
            <span className="text-[17px] font-semibold tracking-[0.02em] text-[#F5F5F0] leading-none">
              Qordova Labs Inc
            </span>
            <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-[#C8A84B] leading-none">
              Governed AI Infrastructure for Enterprise
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden lg:flex items-center gap-1"
            role="navigation"
            aria-label="Primary navigation"
          >
            {/* Primary nav */}
            {PRIMARY_NAV.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={[
                  'px-3 py-2 text-[11px] tracking-[0.10em] uppercase transition-colors duration-200 rounded-[2px]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A84B] focus-visible:ring-offset-1 focus-visible:ring-offset-[#0A0A0B]',
                  isActive(href)
                    ? 'text-[#C8A84B]'
                    : 'text-[#B8B8B0] hover:text-[#F5F5F0]',
                ].join(' ')}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}

            {/* Separator */}
            <span
              className="mx-1 h-4 w-px bg-[#2A2A2E]"
              aria-hidden="true"
            />

            {/* Secondary nav */}
            {SECONDARY_NAV.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={[
                  'px-3 py-2 text-[11px] tracking-[0.10em] uppercase transition-colors duration-200 rounded-[2px]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A84B] focus-visible:ring-offset-1 focus-visible:ring-offset-[#0A0A0B]',
                  isActive(href)
                    ? 'text-[#C8A84B]'
                    : 'text-[#888884] hover:text-[#B8B8B0]',
                ].join(' ')}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className={[
              'hidden lg:inline-flex items-center flex-shrink-0',
              'px-5 py-[10px] text-[10px] tracking-[0.14em] uppercase font-medium',
              'bg-[#C8A84B] text-[#0A0A0B] rounded-[2px]',
              'transition-opacity duration-200 hover:opacity-85',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A84B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]',
            ].join(' ')}
          >
            Request Briefing
          </Link>

          {/* Mobile hamburger — ref for focus restoration */}
          <button
            ref={hamburgerRef}
            type="button"
            onClick={openDrawer}
            className={[
              'lg:hidden flex flex-col justify-center items-center gap-[5px]',
              'w-10 h-10 rounded-[2px] -mr-1',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A84B] focus-visible:ring-offset-1 focus-visible:ring-offset-[#0A0A0B]',
            ].join(' ')}
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
          >
            <span className="block w-[22px] h-px bg-[#F5F5F0] transition-all duration-250" aria-hidden="true" />
            <span className="block w-[16px] h-px bg-[#F5F5F0] transition-all duration-250" aria-hidden="true" />
            <span className="block w-[20px] h-px bg-[#F5F5F0] transition-all duration-250" aria-hidden="true" />
          </button>

        </div>
      </header>

      {/* ── Mobile drawer ─────────────────────────────────────── */}
      <MobileDrawer
        isOpen={drawerOpen}
        onClose={closeDrawer}
        currentPath={pathname}
      />
    </>
  )
}

