import { Award, HeartHandshake, ShieldCheck, Lightbulb, Gauge, Leaf } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'
import { FitLine } from '@/components/fit-line'

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
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="card-lift-glow group relative flex h-full flex-col gap-4 overflow-hidden rounded-lg border border-border bg-card p-10 hover:border-transparent">
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-brand opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="relative text-xs font-semibold uppercase tracking-[0.22em] text-primary transition-colors duration-500 group-hover:text-white/75">
                Our Vision
              </span>
              <FitLine
                as="h3"
                minSize={20}
                className="font-heading relative text-2xl font-semibold leading-tight text-balance transition-colors duration-500 group-hover:text-white md:text-3xl"
              >
                Building the infrastructure of tomorrow.
              </FitLine>
              <p className="relative text-pretty leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-white/85">
                To become a trusted engineering and technology infrastructure partner delivering
                connected, intelligent, resilient and sustainable solutions across critical
                environments.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className="card-lift-glow group relative flex h-full flex-col gap-4 overflow-hidden rounded-lg border border-border bg-card p-10 hover:border-transparent">
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-brand opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="relative text-xs font-semibold uppercase tracking-[0.22em] text-primary transition-colors duration-500 group-hover:text-white/75">
                Our Mission
              </span>
              <FitLine
                as="h3"
                minSize={20}
                className="font-heading relative text-2xl font-semibold leading-tight text-balance transition-colors duration-500 group-hover:text-white md:text-3xl"
              >
                Connect. Engineer. Enable.
              </FitLine>
              <p className="relative text-pretty leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-white/85">
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
                <div className="group relative flex h-full flex-col gap-4 bg-card p-8">
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-gradient-brand opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <value.icon
                    className="relative size-6 text-primary transition-all duration-500 group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:text-white"
                    strokeWidth={1.6}
                  />
                  <h4 className="font-heading relative text-base font-semibold transition-colors duration-500 group-hover:text-white">
                    {value.title}
                  </h4>
                  <p className="relative text-sm leading-relaxed text-muted-foreground text-pretty transition-colors duration-500 group-hover:text-white/85">
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
