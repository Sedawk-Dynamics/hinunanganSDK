'use client'

import { useRef, useState } from 'react'
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const milestones = [
  {
    year: '2023',
    title: 'Dynamic Communication Established',
    description:
      'Established in Singapore with an initial focus on telecommunications and technology infrastructure.',
  },
  {
    year: '2024',
    title: 'Engineering Capability Expansion',
    description:
      'Expanded capabilities across fibre infrastructure, telecommunications, electrical and infrastructure delivery.',
  },
  {
    year: '2025',
    title: 'Critical Infrastructure',
    description: 'Expanded into aviation, airport and multidisciplinary infrastructure projects.',
  },
  {
    year: '2026',
    title: 'Data & Intelligent Technology (DIT)',
    description:
      'Expanded into Data & Intelligent Technology, strengthening capabilities in digital infrastructure, intelligent systems, data solutions and technology integration.',
  },
  {
    year: 'Future',
    title: 'Global Engineering Platform',
    description:
      'Expanding engineering capabilities, strategic partnerships and international project opportunities.',
  },
]

const EASE = [0.22, 1, 0.36, 1] as const

export function JourneyTimeline() {
  const reduceMotion = useReducedMotion()
  const listRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeCount, setActiveCount] = useState(0)

  // Line fills as the list scrolls past ~65% of the viewport height
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 65%', 'end 65%'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 })

  // A milestone lights up once the progress line reaches its dot
  useMotionValueEvent(progress, 'change', (value) => {
    const list = listRef.current
    if (!list) return
    const filled = value * list.offsetHeight
    const count = itemRefs.current.filter((el) => el && el.offsetTop + 8 <= filled + 1).length
    setActiveCount((prev) => (prev === count ? prev : count))
  })

  const shown = reduceMotion ? milestones.length : activeCount

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Our Journey"
          title="Building capability. Expanding possibilities."
        />

        <div ref={listRef} className="relative mt-16">
          <div className="absolute bottom-2 left-[7px] top-2 w-px bg-border" aria-hidden />
          <motion.div
            className="absolute bottom-2 left-[6px] top-2 w-[3px] origin-top rounded-full bg-gradient-to-b from-[oklch(0.32_0.12_282)] via-[oklch(0.42_0.16_272)] to-[oklch(0.5_0.16_258)]"
            style={{ scaleY: reduceMotion ? 1 : progress }}
            aria-hidden
          />

          <ol className="flex flex-col gap-12">
            {milestones.map((milestone, index) => {
              const isActive = index < shown
              const isCurrent = index === shown - 1
              return (
                <li key={milestone.year}>
                  <motion.div
                    ref={(el) => {
                      itemRefs.current[index] = el
                    }}
                    initial={reduceMotion ? false : { opacity: 0, x: -32, filter: 'blur(4px)' }}
                    whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: EASE }}
                    className="relative flex flex-col gap-2 pl-10 md:flex-row md:items-baseline md:gap-8"
                  >
                    <span className="absolute left-0 top-1.5 flex size-[15px] items-center justify-center">
                      {isCurrent && !reduceMotion && (
                        <motion.span
                          className="absolute inset-0 rounded-full bg-[oklch(0.42_0.16_272)]"
                          initial={{ scale: 1, opacity: 0.5 }}
                          animate={{ scale: 2.6, opacity: 0 }}
                          transition={{ duration: 1.6, ease: 'easeOut', repeat: Infinity }}
                          aria-hidden
                        />
                      )}
                      <motion.span
                        className={cn(
                          'relative size-full rounded-full border-2 transition-colors duration-500',
                          isActive
                            ? 'border-transparent bg-gradient-brand shadow-[0_0_0_4px_oklch(0.42_0.16_272/0.15)]'
                            : 'border-border bg-background',
                        )}
                        animate={{ scale: isActive ? 1.15 : 0.85 }}
                        transition={{ duration: 0.45, ease: EASE }}
                      />
                    </span>

                    <motion.span
                      className={cn(
                        'font-heading w-24 shrink-0 text-lg font-semibold transition-colors duration-500',
                        isActive ? 'text-primary' : 'text-muted-foreground',
                      )}
                      animate={{ x: isActive ? 0 : -6 }}
                      transition={{ duration: 0.5, ease: EASE }}
                    >
                      {milestone.year}
                    </motion.span>

                    <motion.div
                      className="flex flex-col gap-1.5"
                      animate={{ opacity: isActive ? 1 : 0.4, y: isActive ? 0 : 8 }}
                      transition={{ duration: 0.6, ease: EASE }}
                    >
                      <h3 className="font-heading text-lg font-semibold leading-snug">
                        {milestone.title}
                      </h3>
                      <p className="max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty">
                        {milestone.description}
                      </p>
                    </motion.div>
                  </motion.div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
