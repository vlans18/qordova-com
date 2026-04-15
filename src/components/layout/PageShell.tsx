import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// PageShell is the single layout wrapper for all public-facing pages.
// It renders Header above and Footer below every page's children.
// Applied once via src/app/(site)/layout.tsx — never imported per-page.
// main receives id="main-content" for skip-to-content accessibility link.
// pt-[64px] offsets the fixed header height defined in design tokens.

interface PageShellProps {
  children: React.ReactNode
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <>
      <Header />
      <main
        id="main-content"
        className="pt-[64px] min-h-screen"
        tabIndex={-1}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}
