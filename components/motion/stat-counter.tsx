'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

type StatCounterProps = {
  value: number
  suffix?: string
  prefix?: string
  label: string
}

export function StatCounter({ value, suffix = '', prefix = '', label }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [isInView, value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="card-lift-glow flex flex-col gap-2 rounded-xl p-3"
    >
      <span
        ref={ref}
        className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-gradient-brand"
      >
        {prefix}
        {display}
        {suffix}
      </span>
      <span className="text-xs md:text-sm uppercase tracking-[0.14em] text-muted-foreground leading-relaxed">
        {label}
      </span>
    </motion.div>
  )
}
