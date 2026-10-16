'use client'

import { useRef, type PointerEvent, type ReactNode } from 'react'
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

type TiltCardProps = {
  children: ReactNode
  className?: string
  /** Disable the 3D cursor-follow tilt while keeping the spotlight glow. */
  tilt?: boolean
  /** Max tilt angle in degrees. */
  maxTilt?: number
}

/**
 * Wraps card content with a cursor-following 3D tilt and a radial spotlight glow.
 * Tilt is skipped on touch devices and when the user prefers reduced motion.
 */
export function TiltCard({ children, className, tilt = true, maxTilt = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const px = useMotionValue(50)
  const py = useMotionValue(50)
  const rotateX = useSpring(0, { stiffness: 220, damping: 22 })
  const rotateY = useSpring(0, { stiffness: 220, damping: 22 })

  const spotlight = useMotionTemplate`radial-gradient(280px circle at ${px}% ${py}%, oklch(0.62 0.16 240 / 0.16), transparent 72%)`

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch') return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const relX = (event.clientX - rect.left) / rect.width
    const relY = (event.clientY - rect.top) / rect.height
    px.set(relX * 100)
    py.set(relY * 100)
    if (tilt && !prefersReducedMotion) {
      rotateY.set((relX - 0.5) * maxTilt * 2)
      rotateX.set((0.5 - relY) * maxTilt * 2)
    }
  }

  const handlePointerLeave = () => {
    px.set(50)
    py.set(50)
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={
        tilt && !prefersReducedMotion
          ? { rotateX, rotateY, transformPerspective: 900 }
          : undefined
      }
      className={cn('group relative', className)}
    >
      {!prefersReducedMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlight }}
        />
      )}
      {children}
    </motion.div>
  )
}
