import type { Metadata } from 'next'
import { PAGE_META } from '@/components/seo/PageMeta'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = PAGE_META.privacy

// Staging notice: this page contains placeholder legal text.
// Replace with full legal content before commercial launch.

export default function PrivacyPage() {
  return (
    <>
      <section className="section bg-[#0A0A0B] pt-[120px]" aria-labelledby="privacy-heading">
        <div className="container max-w-[760px]">

          {/* Staging notice */}
          <div className="mb-10 px-5 py-4 border border-[#2A2A2E] bg-[#111114] rounded-[2px] flex items-start gap-3">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#C8A84B] flex-shrink-0 mt-[2px]">
              Notice
            </span>
            <p className="font-mono text-[11px] tracking-[0.05em] text-[#888884] leading-[1.7]">
              This page contains preliminary legal text for staging purposes only.
              Full legal documentation will be published before commercial launch.
            </p>
          </div>

          <p className="font-mono text-[10px] tracking-[0.20em] uppercase text-[#C8A84B] mb-6">
            Legal
          </p>
          <h1 id="privacy-heading" className="text-display-md font-light text-[#F5F5F0] mb-8">
            Privacy Policy
          </h1>
          <div className="flex flex-col gap-6 text-[15px] text-[#B8B8B0] leading-[1.75]">
            <p>
              This privacy policy applies to Qordova Labs Inc Pte. Ltd. and the Qordova.com website.
            </p>
            <p>
              Qordova does not sell personal data. Information submitted through contact or briefing requests is used solely for the purpose of responding to that inquiry.
            </p>
            <p>
              This page will be updated with a full privacy policy prior to any commercial data collection. For privacy inquiries, contact{' '}
              <a
                href="mailto:contact@qordova.com"
                className="text-[#C8A84B] hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A84B] rounded-[2px]"
              >
                contact@qordova.com
              </a>.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA
        headline="Return to Qordova."
        primaryCta={{ label: 'Back to Qordova', href: '/' }}
        background="surface"
      />
    </>
  )
}
