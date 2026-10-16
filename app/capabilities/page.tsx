import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion/reveal'
import { CtaSection } from '@/components/home/cta-section'
import { capabilities } from '@/lib/capabilities-data'

export const metadata: Metadata = {
  title: 'Capabilities',
  description:
    'Specialist engineering capabilities spanning fibre optics, aviation, rail, marine, digital infrastructure, and renewable energy.',
}

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Specialist capabilities, delivered end to end"
        description="Our multidisciplinary teams carry projects from design and permitting through installation, testing, and long-term maintenance."
        image="/images/about-hero.jpg"
        imageAlt="Multidisciplinary engineering team reviewing blueprints on site at dusk"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
        <SectionHeading
          eyebrow="Core disciplines"
          title="Seven engineering capabilities under one roof"
          description="Every capability is backed by certified engineers, tested methodologies, and a track record across critical infrastructure sectors."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <Reveal key={capability.title} delay={index * 0.05}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand">
                    <Icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 font-heading text-lg font-semibold tracking-tight text-card-foreground">
                    {capability.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {capability.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
