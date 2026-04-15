'use client'

// useDrawerMotion
//
// The mobile drawer uses CSS transform transitions (translateX) — this is
// intentional. CSS transitions on transform are compositor-accelerated and
// do not trigger layout recalculation. They are the correct tool for this
// specific animation and perform better than GSAP for a single-element
// slide on/off screen.
//
// This file is the designated hook for drawer motion. If the project later
// requires GSAP-driven drawer animation (e.g. staggered nav item reveal
// inside the drawer), add that logic here and import this hook in
// MobileDrawer.tsx.
//
// Current behavior: no-op hook — CSS handles the transition.
// Extension point: add gsap.context() for child element stagger if required.
//
// Usage (future extension pattern):
//   const drawerRef = useRef<HTMLDivElement>(null)
//   useDrawerMotion(drawerRef, isOpen)

import { useEffect, RefObject } from 'react'
import { prefersReducedMotion } from '@/components/motion/gsap-config'

interface UseDrawerMotionOptions {
  // Duration in ms — must match CSS transition-duration on drawer panel
  duration?: number
}

export function useDrawerMotion(
  ref: RefObject<HTMLElement | null>,
  isOpen: boolean,
  options: UseDrawerMotionOptions = {}
): void {
  const { duration = 350 } = options

  useEffect(() => {
    // Reduced motion: CSS transitions are already disabled globally
    // via @media (prefers-reduced-motion: reduce) in globals.css.
    // No additional action required here.
    if (prefersReducedMotion()) return

    // CSS transform transition handles open/close.
    // No GSAP intervention needed at this stage.
    // If child stagger animation is added, gsap.context() logic goes here.
    void ref
    void isOpen
    void duration
  }, [ref, isOpen, duration])
}
