'use client'

import { useRef, type PointerEvent, type ReactNode } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

type MagneticButtonProps = {
  children: ReactNode
  className?: string
  strength?: number
}

/** Subtly pulls itself toward the cursor on hover; skipped for reduced motion / touch. */
export function MagneticButton({ children, className, strength = 0.25 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const x = useSpring(useMotionValue(0), { stiffness: 250, damping: 18 })
  const y = useSpring(useMotionValue(0), { stiffness: 250, damping: 18 })

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || event.pointerType === 'touch') return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength)
  }

  const handlePointerLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ x, y }}
      className={cn('inline-flex', className)}
    >
      {children}
    </motion.div>
  )
}
