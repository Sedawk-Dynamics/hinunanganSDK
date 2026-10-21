import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion/reveal'
import { StatCounter } from '@/components/motion/stat-counter'

const markets = [
  { country: 'Singapore', focus: 'Headquarters & Engineering Operations' },
  { country: 'Malaysia', focus: 'Infrastructure & Technology' },
  { country: 'India', focus: 'Engineering & Energy' },
  { country: 'Philippines', focus: 'Infrastructure & Renewable Energy' },
]

export function GlobalFootprint() {
  return (
    <section className="border-y border-border bg-card/40 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Our Global Footprint"
              title="Engineered across international markets."
              description="Dynamic Communication continues to develop engineering capabilities and project opportunities across international markets."
            />
            <div className="grid grid-cols-2 gap-6">
              {markets.map((market, index) => (
                <Reveal key={market.country} delay={index * 0.06}>
                  <div className="flex flex-col gap-1 rounded-lg border border-border bg-card p-5">
                    <span className="font-heading text-base font-semibold">
                      {market.country}
                    </span>
                    <span className="text-xs leading-relaxed text-muted-foreground text-pretty">
                      {market.focus}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
            <StatCounter value={4} label="International Markets" />
          </div>

          <Reveal direction="right">
            <div className="relative h-80 overflow-hidden rounded-lg border border-border md:h-[26rem]">
              <Image
                src="/images/global-map.png"
                alt="Abstract map showing connected markets across Singapore, Malaysia, India and the Philippines"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
