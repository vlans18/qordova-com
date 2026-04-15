import Link from 'next/link'
import { FOOTER_NAV, LEGAL_NAV } from '@/lib/nav'

// Footer is a server component — no client state needed.
// Nav constants sourced from src/lib/nav.ts — no local declarations.
// Legal nav (Privacy, Terms, Disclosure) appears here only.
// Rendered identically on every public route via PageShell.

export default function Footer() {
  return (
    <footer
      className="bg-[#0A0A0B] border-t border-[#2A2A2E]"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container py-16 md:py-20">

        {/* Top row — brand + nav */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-16 pb-12 border-b border-[#1E1E23]">

          {/* Brand block */}
          <div className="flex flex-col gap-4 max-w-[320px]">
            <Link
              href="/"
              className="flex flex-col gap-[3px] w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A84B] rounded-[2px]"
              aria-label="Qordova Labs Inc — Home"
            >
              <span className="text-[18px] font-light tracking-[0.01em] text-[#F5F5F0] leading-none">
                Qordova Labs Inc
              </span>
              <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-[#C8A84B] leading-none">
                Governed AI Infrastructure for Enterprise
              </span>
            </Link>
            <p className="text-[13px] text-[#888884] leading-relaxed max-w-[280px]">
              Governed AI execution for enterprise and regulated environments.
              KAIS is the flagship platform for AI execution control.
            </p>
          </div>

          {/* Footer navigation */}
          <nav
            className="flex flex-col gap-6"
            aria-label="Footer navigation"
          >
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-12 gap-y-0">
              {FOOTER_NAV.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={[
                      'inline-block py-[8px] text-[12px] tracking-[0.08em] uppercase',
                      'text-[#888884] hover:text-[#B8B8B0] transition-colors duration-200',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A84B] rounded-[2px]',
                    ].join(' ')}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>

        {/* Bottom row — legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

          <p className="font-mono text-[9.5px] tracking-[0.12em] uppercase text-[#555552]">
            QORDOVA LABS INC PTE. LTD.
          </p>

          <ul className="flex items-center gap-6">
            {LEGAL_NAV.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={[
                    'font-mono text-[9.5px] tracking-[0.10em] uppercase',
                    'text-[#555552] hover:text-[#888884] transition-colors duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A84B] rounded-[2px]',
                  ].join(' ')}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

        </div>

      </div>
    </footer>
  )
}
