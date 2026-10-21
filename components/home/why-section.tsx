import { Layers, GitBranch, ShieldCheck, Wrench, Hammer, LifeBuoy } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion/reveal'
import { TiltCard } from '@/components/motion/tilt-card'

const reasons = [
  {
    icon: Layers,
    title: 'Multidisciplinary Engineering',
    description: 'Multiple technical disciplines integrated under one delivery platform.',
  },
  {
    icon: GitBranch,
    title: 'Project Delivery',
    description:
      'From project planning and engineering coordination through installation, integration and commissioning.',
  },
  {
    icon: ShieldCheck,
    title: 'Critical Environments',
    description: 'Experience supporting demanding operational and infrastructure environments.',
  },
  {
    icon: Wrench,
    title: 'Retrofit & Upgrade',
    description: 'Capability to work within existing infrastructure and operational facilities.',
  },
  {
    icon: Hammer,
    title: 'Technical Delivery',
    description: 'Specialist engineering teams capable of executing defined project work packages.',
  },
  {
    icon: LifeBuoy,
    title: 'Lifecycle Support',
    description: 'Maintenance, upgrades, modifications and ongoing technical support.',
  },
]

export function WhySection() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow="Why Dynamic Communication" title="Engineered to deliver." />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={(index % 3) * 0.08} direction="flip">
              <TiltCard tilt={false}>
                <div className="card-lift-glow flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-8 shadow-sm hover:border-primary/25">
                  <div className="float-loop flex size-11 items-center justify-center rounded-xl bg-accent">
                    <reason.icon className="size-5 text-accent-foreground" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold leading-snug text-card-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                    {reason.description}
                  </p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
