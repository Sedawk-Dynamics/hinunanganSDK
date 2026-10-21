import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Phone, ArrowRight, CheckCircle2 } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/motion/reveal'
import { PartnerForm } from '@/components/partner/partner-form'

export const metadata: Metadata = {
  title: 'Partner With Us',
  description:
    'Partner with Dynamic Communication. We work with infrastructure owners, engineering companies, main contractors, system integrators and technology partners across Asia.',
}

const partnerTypes = [
  {
    title: 'Infrastructure Owners & Operators',
    description: 'Airports, transit, ports, utilities and data centres.',
  },
  {
    title: 'Main Contractors',
    description: 'Specialist telecom, fibre, electrical, ICT and security packages.',
  },
  {
    title: 'Engineering Companies',
    description: 'Design, BIM and project engineering capacity.',
  },
  {
    title: 'System Integrators',
    description: 'Installation, testing and commissioning in live environments.',
  },
  {
    title: 'Technology & OEM Partners',
    description: 'Regional deployment and support for your solutions.',
  },
]

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner With Us"
        title="Let's build stronger infrastructure together"
        description="We collaborate with owners, contractors, integrators and technology leaders across Asia."
        image="/images/domain-project.png"
        imageAlt="Engineers and partners reviewing project drawings together"
      />

      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                Partnership opportunities
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                With delivery teams across Singapore, Malaysia, India and the Philippines, we bring
                multidisciplinary engineering capability to your programmes, from bid stage
                through to delivery and long-term support.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-col gap-4">
                {partnerTypes.map((type) => (
                  <div key={type.title} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold">{type.title}</p>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8">
                <a
                  href="mailto:Sales@dynamic-communication.sg"
                  className="flex items-center gap-3 text-sm font-medium hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                  Sales@dynamic-communication.sg
                </a>
                <a href="tel:+6597481689" className="flex items-center gap-3 text-sm font-medium hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                  +65 9748 1689 / 9743 1000
                </a>
                <Link
                  href="/contact"
                  className="group mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Have a project enquiry instead? Contact us
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <PartnerForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
