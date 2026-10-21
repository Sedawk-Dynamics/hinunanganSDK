import type { Metadata } from 'next'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion/reveal'
import { CtaSection } from '@/components/home/cta-section'
import { solutions } from '@/lib/solutions-data'

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Seven integrated engineering solutions spanning telecommunications, aviation, power, digital infrastructure, security, data intelligence, and renewable energy.',
}

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
  title="Solutions that keep critical systems running"
  description="From fibre in the ground to power at the substation, across the full infrastructure lifecycle."
        image="/images/hero-infrastructure.png"
        imageAlt="Night-time critical infrastructure engineering scene with glowing lights"
      />

      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14 lg:px-8">
        <SectionHeading
          eyebrow="What we deliver"
          title="Seven pillars, one integrated delivery model"
          description="Each solution is delivered by specialist teams working under a single project management framework — so complex, multi-discipline projects move as one."
        />

        <div className="mt-16 flex flex-col gap-20">
          {solutions.map((solution, index) => (
            <Reveal key={solution.slug}>
              <div
                className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={solution.image || '/placeholder.svg'}
                    alt={solution.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                <div>
                  <span className="text-sm font-semibold text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-balance md:text-3xl">
                    {solution.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {solution.summary}
                  </p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {solution.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm leading-relaxed">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        <span className="text-foreground/90">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
