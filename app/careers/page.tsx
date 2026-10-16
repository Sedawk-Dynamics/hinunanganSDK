import type { Metadata } from 'next'
import { Award, Users, TrendingUp, Globe2 } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion/reveal'
import { CtaSection } from '@/components/home/cta-section'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Build your career engineering the critical infrastructure that keeps industries and communities running.',
}

const benefits = [
  {
    icon: Award,
    title: 'Certified training',
    description: 'Structured upskilling across telecom, electrical, and safety certifications.',
  },
  {
    icon: Users,
    title: 'Multidisciplinary teams',
    description: 'Work alongside specialists across seven engineering disciplines.',
  },
  {
    icon: TrendingUp,
    title: 'Real career progression',
    description: 'Clear paths from field technician to project and engineering leadership.',
  },
  {
    icon: Globe2,
    title: 'Regional exposure',
    description: 'Opportunities across projects in Singapore, Malaysia, India, and the Philippines.',
  },
]

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the infrastructure others rely on"
        description="We hire engineers, technicians, and project leaders who want to work on the systems that keep airports, networks, and cities running."
        image="/images/careers-hero.jpg"
        imageAlt="Engineer in safety gear standing on an infrastructure site at dusk"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
        <SectionHeading
          eyebrow="Why join us"
          title="A career built on real, critical engineering work"
        />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Reveal key={benefit.title} delay={index * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand">
                    <Icon className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-heading text-base font-semibold tracking-tight text-card-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-4 pb-24 text-center lg:px-8">
        <Reveal>
          <p className="text-base leading-relaxed text-muted-foreground">
            We do not currently have open roles listed, but we are always looking to hear from
            experienced field engineers, project managers, and technicians. Send your details
            through our contact page and our team will be in touch.
          </p>
        </Reveal>
      </section>

      <CtaSection
        eyebrow="Join our team"
        title="Ready to grow your engineering career?"
        description="Reach out to our team to learn more about current and upcoming opportunities."
        buttonLabel="Contact us"
        buttonHref="/contact"
        secondaryLabel=""
      />
    </>
  )
}
