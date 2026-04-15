import type { Metadata } from 'next'

// Offline fallback page — served by service worker when navigation fails.
// Lives outside (site)/ route group so it inherits root layout only.
// Root layout owns <html> and <body> — this component returns page-level JSX only.
// Styled via Tailwind + CSS custom properties defined in globals.css.
// No section components — must remain self-contained and fast to render.
// sw.js pre-caches this route during install.

export const metadata: Metadata = {
  title:  'Offline | Qordova Labs Inc',
  robots: { index: false, follow: false },
}

export default function OfflinePage() {
  return (
    <div
      className={[
        'min-h-screen flex items-center justify-center',
        'bg-[#0A0A0B] px-6',
      ].join(' ')}
    >
      <div className="max-w-[480px] w-full text-center flex flex-col items-center">

        {/* Brand label */}
        <p className="font-mono text-[10px] tracking-[0.20em] uppercase text-[#C8A84B] mb-7">
          Qordova Labs Inc
        </p>

        {/* Heading */}
        <h1
          className={[
            'text-[clamp(28px,4vw,40px)] font-light',
            'leading-[1.15] tracking-[-0.01em]',
            'text-[#F5F5F0] mb-4',
          ].join(' ')}
        >
          You are offline.
        </h1>

        {/* Body */}
        <p className="text-[15px] text-[#B8B8B0] leading-[1.7] mb-10 max-w-[340px]">
          No network connection is available.
          Please check your connection and try again.
        </p>

        {/* CTA */}
        <a
          href="/"
          className={[
            'inline-flex items-center justify-center min-h-[44px]',
            'px-7 py-[13px]',
            'font-mono text-[11px] tracking-[0.14em] uppercase font-medium',
            'bg-[#C8A84B] text-[#0A0A0B] rounded-[2px]',
            'transition-opacity duration-200 hover:opacity-85',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A84B]',
            'focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]',
          ].join(' ')}
        >
          Try again
        </a>

        {/* Legal entity */}
        <p className="mt-12 font-mono text-[9px] tracking-[0.12em] uppercase text-[#555552]">
          Qordova Labs Inc Pte. Ltd.
        </p>

      </div>
    </div>
  )
}
