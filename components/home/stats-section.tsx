'use client'

import type { CSSProperties } from 'react'
import { Clock, LayoutGrid, Globe2, PlaneTakeoff, Sun, TrendingUp } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const stats = [
  {
    icon: Clock,
    value: '18 yrs',
    label: 'Industry & Engineering Experience',
    from: 'oklch(0.32 0.13 280)',
    to: 'oklch(0.5 0.17 268)',
  },
  {
    icon: LayoutGrid,
    value: '7',
    label: 'Core Business Lines',
    from: 'oklch(0.42 0.16 272)',
    to: 'oklch(0.6 0.15 252)',
  },
  {
    icon: Globe2,
    value: '4',
    label: 'Countries Across Asia',
    from: 'oklch(0.45 0.12 230)',
    to: 'oklch(0.62 0.12 210)',
  },
  {
    icon: PlaneTakeoff,
    value: '5+',
    label: 'Changi Airport Projects Delivered',
    from: 'oklch(0.36 0.12 290)',
    to: 'oklch(0.52 0.16 300)',
  },
  {
    icon: Sun,
    value: '341 kW',
    label: 'Solar PV Installed — MEGACHEM',
    from: 'oklch(0.45 0.14 255)',
    to: 'oklch(0.66 0.13 235)',
  },
  {
    icon: TrendingUp,
    value: '3+',
    label: 'Years of Operations',
    from: 'oklch(0.3 0.1 275)',
    to: 'oklch(0.46 0.15 262)',
  },
]

export function StatsSection() {
  const track = [...stats, ...stats]

  return (
    <section className="group border-b border-border bg-card/40 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Engineered for Complex Environments"
          title="Numbers built on delivered engineering work."
          align="center"
        />
      </div>

      <div className="relative mt-14 overflow-hidden py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-32" />

        <div className="marquee-track flex w-max items-stretch gap-6 px-6 motion-reduce:animate-none md:gap-8 md:px-10">
          {track.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={`${stat.label}-${index}`}
                style={{ '--stat-from': stat.from, '--stat-to': stat.to } as CSSProperties}
                className="group/stat relative flex w-[220px] shrink-0 flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-transparent hover:shadow-[0_24px_48px_-16px_var(--stat-from)] md:w-[260px] md:p-7"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(135deg,var(--stat-from),var(--stat-to))] opacity-0 transition-opacity duration-500 group-hover/stat:opacity-100"
                />
                <svg
                  aria-hidden="true"
                  viewBox="0 0 260 220"
                  fill="none"
                  className="absolute -right-6 -top-6 h-40 w-40 scale-90 text-primary-foreground/35 opacity-0 transition-all duration-700 ease-out group-hover/stat:scale-100 group-hover/stat:opacity-100"
                >
                  <path
                    d="M4 4C4 96 96 188 188 188"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset="1"
                    className="transition-[stroke-dashoffset] duration-[900ms] ease-out group-hover/stat:[stroke-dashoffset:0]"
                  />
                </svg>
                <span
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-primary-foreground/20 opacity-0 transition-all duration-700 group-hover/stat:scale-125 group-hover/stat:opacity-100"
                />

                <span className="relative flex w-fit items-center justify-center rounded-full bg-primary/10 p-2.5 text-primary transition-all duration-500 group-hover/stat:rotate-6 group-hover/stat:scale-110 group-hover/stat:bg-primary-foreground/15 group-hover/stat:text-primary-foreground">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="relative font-heading text-3xl font-semibold tracking-tight text-primary transition-colors duration-500 group-hover/stat:text-primary-foreground md:text-4xl">
                  {stat.value}
                </span>
                <span className="relative text-xs uppercase leading-relaxed tracking-[0.14em] text-muted-foreground transition-colors duration-500 group-hover/stat:text-primary-foreground/85 md:text-sm">
                  {stat.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
