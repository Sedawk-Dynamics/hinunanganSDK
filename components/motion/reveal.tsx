'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealVariant = 'up' | 'left' | 'right' | 'none' | 'scale' | 'flip'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  direction?: RevealVariant
  as?: 'div' | 'span'
}

const buildVariants = (direction: RevealVariant | undefined): Variants => {
  const offset =
    direction === 'up'
      ? { y: 28 }
      : direction === 'left'
        ? { x: -28 }
        : direction === 'right'
          ? { x: 28 }
          : {}

  if (direction === 'scale') {
    return {
      hidden: { opacity: 0, y: 20, scale: 0.95 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      },
    }
  }

  if (direction === 'flip') {
    return {
      hidden: { opacity: 0, rotateX: 28, y: 16 },
      visible: {
        opacity: 1,
        rotateX: 0,
        y: 0,
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
      },
    }
  }

  return {
    hidden: { opacity: 0, ...offset, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  }
}

export function Reveal({
  children,
  delay = 0,
  className,
  direction = 'up',
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: '-80px' }}
      variants={buildVariants(direction)}
      transition={{ delay }}
      style={direction === 'flip' ? { transformPerspective: 800 } : undefined}
    >
      {children}
    </motion.div>
  )
}

export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode
  className?: string
  stagger?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({
  children,
  className,
  direction = 'up',
}: {
  children: ReactNode
  className?: string
  direction?: RevealProps['direction']
}) {
  return (
    <motion.div className={className} variants={buildVariants(direction)}>
      {children}
    </motion.div>
  )
}
