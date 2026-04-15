'use client'

import { useEffect, RefObject } from 'react'
import {
  registerGsap,
  prefersReducedMotion,
  gsap,
  ScrollTrigger,
  EASE_OUT,
  DUR_BASE,
  DUR_SLOW,
  STAGGER_TIGHT,
  ST_START_DEFAULT,
  ST_START_CARDS,
  ST_TOGGLE_ONCE,
  FROM_FADE_UP,
} from '@/components/motion/gsap-config'

// ── useScrollReveal ────────────────────────────────────────────
// Fade-up reveal for a single element on scroll entry.
// Use for section containers, pull quotes, engagement blocks.
//
// Usage:
//   const sectionRef = useRef<HTMLElement>(null)
//   useScrollReveal(sectionRef)

interface UseScrollRevealOptions {
  start?:    string
  duration?: number
  delay?:    number
}

export function useScrollReveal(
  ref: RefObject<HTMLElement | null>,
  options: UseScrollRevealOptions = {}
): void {
  const {
    start    = ST_START_DEFAULT,
    duration = DUR_SLOW,
    delay    = 0,
  } = options

  useEffect(() => {
    if (prefersReducedMotion()) {
      if (ref.current) {
        ref.current.style.opacity = '1'
        ref.current.style.transform = 'none'
      }
      return
    }

    registerGsap()

    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { ...FROM_FADE_UP },
        {
          opacity:    1,
          y:          0,
          duration,
          ease:       EASE_OUT,
          delay,
          clearProps: 'transform',
          scrollTrigger: {
            trigger:       el,
            start,
            toggleActions: ST_TOGGLE_ONCE,
          },
        }
      )
    })

    return () => ctx.revert()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

// ── useScrollRevealGroup ───────────────────────────────────────
// Stagger fade-up reveal for a container's direct children.
// Use for card grids, execution steps, principle blocks.
// Queries children via a CSS selector inside the container ref.
//
// Usage:
//   const gridRef = useRef<HTMLDivElement>(null)
//   useScrollRevealGroup(gridRef, '.exec-card')

interface UseScrollRevealGroupOptions {
  selector?: string  // CSS selector for children inside ref
  start?:    string
  duration?: number
  stagger?:  number
}

export function useScrollRevealGroup(
  ref: RefObject<HTMLElement | null>,
  options: UseScrollRevealGroupOptions = {}
): void {
  const {
    selector = '[data-reveal]',
    start    = ST_START_CARDS,
    duration = DUR_BASE,
    stagger  = STAGGER_TIGHT,
  } = options

  useEffect(() => {
    if (prefersReducedMotion()) {
      if (ref.current) {
        const items = ref.current.querySelectorAll<HTMLElement>(selector)
        items.forEach((el) => {
          el.style.opacity = '1'
          el.style.transform = 'none'
        })
      }
      return
    }

    registerGsap()

    const container = ref.current
    if (!container) return

    const items = container.querySelectorAll<HTMLElement>(selector)
    if (items.length === 0) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        Array.from(items),
        { ...FROM_FADE_UP },
        {
          opacity:    1,
          y:          0,
          duration,
          ease:       EASE_OUT,
          stagger,
          clearProps: 'transform',
          scrollTrigger: {
            trigger:       container,
            start,
            toggleActions: ST_TOGGLE_ONCE,
          },
        }
      )
    })

    return () => ctx.revert()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

// ── useScrollRevealMany ────────────────────────────────────────
// Fade-up reveal for multiple independent section refs.
// Each gets its own ScrollTrigger — fires independently.
// Use for stacking multiple content sections on a page.
//
// Usage:
//   const mattersRef  = useRef<HTMLElement>(null)
//   const deliversRef = useRef<HTMLElement>(null)
//   useScrollRevealMany([mattersRef, deliversRef])

export function useScrollRevealMany(
  refs: RefObject<HTMLElement | null>[],
  options: UseScrollRevealOptions = {}
): void {
  const {
    start    = ST_START_DEFAULT,
    duration = DUR_SLOW,
    delay    = 0,
  } = options

  useEffect(() => {
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
      elements.forEach((el) => {
        gsap.fromTo(
          el,
          { ...FROM_FADE_UP },
          {
            opacity:    1,
            y:          0,
            duration,
            ease:       EASE_OUT,
            delay,
            clearProps: 'transform',
            scrollTrigger: {
              trigger:       el,
              start,
              toggleActions: ST_TOGGLE_ONCE,
            },
          }
        )
      })
    })

    return () => ctx.revert()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

// Re-export ScrollTrigger for direct use in complex page animations
export { ScrollTrigger }
