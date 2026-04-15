// src/lib/nav.ts
// Navigation constants — single source of truth.
// Imported by Header.tsx, MobileDrawer.tsx, and any future nav consumer.
// No component imports. No circular dependency risk.

export const PRIMARY_NAV = [
  { label: 'KAIS',       href: '/kais' },
  { label: 'Solutions',  href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Governance', href: '/governance' },
] as const

export const SECONDARY_NAV = [
  { label: 'Security', href: '/security' },
  { label: 'Research', href: '/research' },
  { label: 'About',    href: '/about' },
] as const

export const ALL_NAV = [...PRIMARY_NAV, ...SECONDARY_NAV] as const

export const FOOTER_NAV = [
  { label: 'KAIS',       href: '/kais' },
  { label: 'Solutions',  href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Governance', href: '/governance' },
  { label: 'Security',   href: '/security' },
  { label: 'Research',   href: '/research' },
  { label: 'About',      href: '/about' },
  { label: 'Contact',    href: '/contact' },
] as const

export const LEGAL_NAV = [
  { label: 'Privacy',    href: '/privacy' },
  { label: 'Terms',      href: '/terms' },
  { label: 'Disclosure', href: '/disclosure' },
] as const

export type NavItem = {
  readonly label: string
  readonly href:  string
}
