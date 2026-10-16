import { Award, HeartHandshake, ShieldCheck, Lightbulb, Gauge, Leaf } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'

const values = [
  {
    icon: Award,
    title: 'Engineering Excellence',
    description: 'Technically sound, reliable and practical engineering solutions.',
  },
  {
    icon: HeartHandshake,
    title: 'Integrity',
    description: 'Professional relationships built on transparency and accountability.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety',
    description: 'Protecting people, assets and operational environments.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Applying better technologies and engineering approaches.',
  },
  {
    icon: Gauge,
    title: 'Reliability',
    description: 'Building dependable infrastructure and long-term partnerships.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Supporting responsible infrastructure development and cleaner energy.',
  },
]

export function VisionMissionValues() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="flex h-full flex-col gap-4 rounded-lg border border-border bg-card p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Our Vision
              </span>
              <h3 className="font-heading text-2xl font-semibold leading-tight text-balance md:text-3xl">
                Building the infrastructure of tomorrow.
              </h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                To become a trusted engineering and technology infrastructure partner delivering
                connected, intelligent, resilient and sustainable solutions across critical
                environments.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className="flex h-full flex-col gap-4 rounded-lg border border-border bg-card p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Our Mission
              </span>
              <h3 className="font-heading text-2xl font-semibold leading-tight text-balance md:text-3xl">
                Connect. Engineer. Enable.
              </h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                To deliver quality-driven, reliable and cost-effective infrastructure and
                technology solutions that connect people, enable operations and strengthen
                critical environments — creating measurable value, sustainable performance and
                long-term client confidence.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Our Values
            </span>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={(index % 3) * 0.08} direction="none">
                <div className="flex h-full flex-col gap-4 bg-card p-8">
                  <value.icon className="size-6 text-primary" strokeWidth={1.6} />
                  <h4 className="font-heading text-base font-semibold">{value.title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
