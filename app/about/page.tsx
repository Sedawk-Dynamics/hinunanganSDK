import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/motion/reveal'
import { JourneyTimeline } from '@/components/about/journey-timeline'
import { GlobalFootprint } from '@/components/about/global-footprint'
import { VisionMissionValues } from '@/components/about/vision-mission-values'
import { TeamSection } from '@/components/about/team-section'
import { PartnersCompliance } from '@/components/about/partners-compliance'
import { CtaSection } from '@/components/home/cta-section'

export const metadata: Metadata = {
  title: 'About Us | Dynamic Communication',
  description:
    'Dynamic Communication Pte. Ltd. is a Singapore-based multidisciplinary engineering and technology infrastructure company.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Engineering technology. Built for the real world."
        description="Dynamic Communication Pte. Ltd. is a Singapore-based engineering and technology company."
        image="/images/about-hero.png"
        imageAlt="Engineering team reviewing infrastructure plans on site at dusk"
      />

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <Reveal>
            <p className="text-pretty text-center text-lg leading-relaxed text-muted-foreground md:text-xl">
              Our capabilities span telecommunications, aviation, rail, marine, electrical
              systems, digital infrastructure, intelligent systems, renewable energy and
              advanced data intelligence. We combine engineering expertise, technical
              professionals and field delivery capability to support complex infrastructure
              projects from concept and planning through execution, integration, testing,
              commissioning and lifecycle support.
            </p>
          </Reveal>
        </div>
      </section>

      <JourneyTimeline />
      <GlobalFootprint />
      <VisionMissionValues />
      <TeamSection />
      <PartnersCompliance />
      <CtaSection />
    </>
  )
}
