'use client'

import { useEffect, RefObject } from 'react'
import {
  registerGsap,
  prefersReducedMotion,
  gsap,
  EASE_OUT,
  DUR_SLOW,
  STAGGER_BASE,
  FROM_FADE_UP,
} from '@/components/motion/gsap-config'

// useHeroReveal — staggered fade-up reveal for hero section elements.
//
// Usage:
//   const labelRef   = useRef<HTMLDivElement>(null)
//   const headRef    = useRef<HTMLHeadingElement>(null)
//   const subRef     = useRef<HTMLParagraphElement>(null)
//   const ctasRef    = useRef<HTMLDivElement>(null)
//   useHeroReveal([labelRef, headRef, subRef, ctasRef])
//
// Elements are set to opacity:0 in CSS via .gsap-hidden class.
// GSAP animates them to opacity:1 with a y-axis fade-up on mount.
// On reduced motion: elements become visible immediately, no animation.
// ctx.revert() on unmount cleans all inline styles and ScrollTriggers.

interface UseHeroRevealOptions {
  delay?:   number   // Initial delay before stagger begins (seconds)
  stagger?: number   // Per-element stagger delay (seconds)
  duration?: number  // Per-element animation duration (seconds)
}

export function useHeroReveal(
  refs: RefObject<HTMLElement | null>[],
  options: UseHeroRevealOptions = {}
): void {
  const {
    delay    = 0.1,
    stagger  = STAGGER_BASE,
    duration = DUR_SLOW,
  } = options

  useEffect(() => {
    // Reduced motion: make all elements visible immediately
    if (prefersReducedMotion()) {
      refs.forEach((ref) => {
        if (ref.current) {
          ref.current.style.opacity = '1'
          ref.current.style.transform = 'none'
        }
      })
      return
    }

    registerGsap()

    const elements = refs
      .map((r) => r.current)
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elements,
        { ...FROM_FADE_UP },
        {
          opacity:    1,
          y:          0,
          duration,
          ease:       EASE_OUT,
          stagger,
          delay,
          clearProps: 'transform',
        }
      )
    })

    return () => ctx.revert()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
