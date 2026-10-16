import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion/reveal'
import { CtaSection } from '@/components/home/cta-section'
import { projects } from '@/lib/projects-data'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A selection of critical infrastructure projects delivered across aviation, rail, telecommunications, marine, digital infrastructure, and renewable energy.',
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Infrastructure delivered under pressure, on schedule"
        description="A selection of the critical infrastructure projects our teams have designed, built, and commissioned across the region."
        image="/images/projects-hero.jpg"
        imageAlt="Airport runway with airfield guidance signage lit at blue hour"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
        <SectionHeading eyebrow="Selected work" title="Projects across seven sectors" />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground shadow-sm backdrop-blur-sm">
                    {project.sector}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-balance text-card-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {project.location}
                  </div>
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
