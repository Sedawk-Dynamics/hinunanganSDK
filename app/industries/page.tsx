import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion/reveal'
import { CtaSection } from '@/components/home/cta-section'
import { industries } from '@/lib/industries-data'

export const metadata: Metadata = {
  title: 'Industries',
  description:
    'Industries we serve: aviation, rail, telecommunications, marine, data centres, energy, and critical infrastructure.',
}

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Trusted across the sectors that keep economies moving"
        description="From airports to shipyards, our teams work inside the industries where infrastructure failure is not an option."
        image="/images/projects-hero.jpg"
        imageAlt="Airport runway with airfield guidance signage lit at blue hour"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
        <SectionHeading
          eyebrow="Where we work"
          title="Seven industries, one standard of reliability"
        />

        <div className="mt-16 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <Reveal key={industry.title} delay={index * 0.05}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={industry.image || '/placeholder.svg'}
                    alt={industry.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-card-foreground">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {industry.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
