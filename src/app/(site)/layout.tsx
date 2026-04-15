import type { Metadata } from 'next'
import PageShell from '@/components/layout/PageShell'

// This nested layout applies to all routes under (site)/
// The route group parentheses mean the folder name does not appear in URLs.
// All public pages — /, /kais, /solutions, etc — inherit Header + Footer
// through this single layout. No per-page shell imports. No exceptions.

// Inherits root metadata from src/app/layout.tsx.
// Per-page metadata is defined in each page.tsx via its own export.
export const metadata: Metadata = {}

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PageShell>{children}</PageShell>
}
