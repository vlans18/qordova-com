// src/components/motion/gsap-config.ts
// GSAP plugin registration and shared animation configuration.
// Import and call registerGsap() once inside a useEffect — never at module level.
// Module-level gsap.registerPlugin causes SSR errors in Next.js App Router.

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// ── Plugin registration ────────────────────────────────────────
// Call once per session, inside useEffect, client-side only.
// Safe to call multiple times — GSAP deduplicates registration.
export function registerGsap(): void {
  gsap.registerPlugin(ScrollTrigger)
}

// ── Reduced-motion guard ───────────────────────────────────────
// Returns true if user prefers reduced motion.
// Check before creating any GSAP context or timeline.
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return true
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// ── Shared easing ─────────────────────────────────────────────
export const EASE_OUT      = 'power2.out'
export const EASE_IN_OUT   = 'power2.inOut'
export const EASE_EXPO_OUT = 'expo.out'

// ── Shared durations (seconds) ────────────────────────────────
export const DUR_FAST   = 0.35
export const DUR_BASE   = 0.7
export const DUR_SLOW   = 0.9

// ── Shared stagger ────────────────────────────────────────────
export const STAGGER_TIGHT  = 0.08
export const STAGGER_BASE   = 0.12
export const STAGGER_LOOSE  = 0.16

// ── ScrollTrigger defaults ────────────────────────────────────
export const ST_START_DEFAULT  = 'top 82%'
export const ST_START_CARDS    = 'top 78%'
export const ST_START_LATE     = 'top 88%'
export const ST_TOGGLE_ONCE    = 'play none none none' as const

// ── Default fromTo vars ───────────────────────────────────────
export const FROM_FADE_UP = { opacity: 0, y: 22 } as gsap.TweenVars
export const TO_VISIBLE   = {
  opacity: 1,
  y: 0,
  clearProps: 'transform',
} as gsap.TweenVars

export const FROM_FADE    = { opacity: 0 } as gsap.TweenVars
export const TO_FADE      = { opacity: 1 } as gsap.TweenVars

// ── Re-export gsap and ScrollTrigger for convenience ──────────
export { gsap, ScrollTrigger }
