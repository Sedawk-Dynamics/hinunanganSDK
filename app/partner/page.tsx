import type { Metadata } from 'next'
import { Building2, HardHat, Network, Cpu, Handshake, Globe2, ShieldCheck, Layers, Users } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion/reveal'
import { PartnerForm } from '@/components/partner/partner-form'

export const metadata: Metadata = {
  title: 'Partner With Us',
  description:
    'Partner with Dynamic Communication. We work with infrastructure owners, engineering companies, main contractors, system integrators and technology partners across Asia.',
}

const partnerTypes = [
  {
    icon: Building2,
    title: 'Infrastructure Owners',
    description:
      'Airports, transit operators, ports, utilities and data centre owners looking for a specialist engineering partner across the asset lifecycle.',
  },
  {
    icon: HardHat,
    title: 'Main Contractors',
    description:
      'Self-performing specialist packages for telecommunications, fibre, electrical, ICT and security scopes on major builds.',
  },
  {
    icon: Layers,
    title: 'Engineering Companies',
    description:
      'Design, BIM and project engineering support to extend your team’s capacity on multidisciplinary programmes.',
  },
  {
    icon: Network,
    title: 'System Integrators',
    description:
      'Field installation, testing and commissioning capability for integrators delivering complex systems in live environments.',
  },
  {
    icon: Cpu,
    title: 'Technology Partners',
    description:
      'OEMs and solution vendors seeking a qualified delivery partner to deploy and support their technology in the region.',
  },
]

const benefits = [
  {
    icon: Globe2,
    title: 'Regional reach',
    description: 'Delivery teams across Singapore, Malaysia, India and the Philippines.',
  },
  {
    icon: ShieldCheck,
    title: 'Proven in critical environments',
    description: 'Experience working airside, trackside and in live mission-critical facilities.',
  },
  {
    icon: Users,
    title: 'Multidisciplinary capability',
    description: 'Telecom, fibre, electrical, ICT, security and renewable energy under one roof.',
  },
  {
    icon: Handshake,
    title: 'Long-term relationships',
    description: 'Transparent, accountable partnerships built around shared project outcomes.',
  },
]

const steps = [
  { title: 'Introduce', description: 'Share your organisation, capabilities and the opportunity in mind.' },
  { title: 'Align', description: 'We meet to understand scope, markets and how our strengths complement yours.' },
  { title: 'Agree', description: 'We define the partnership model, responsibilities and commercial framework.' },
  { title: 'Deliver', description: 'Our teams engage jointly from bid through to delivery and support.' },
]

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner With Us"
        title="Build stronger infrastructure together"
        description="We collaborate with owners, contractors, integrators and technology leaders across Asia."
        image="/images/domain-project.png"
        imageAlt="Engineers and partners reviewing project drawings together"
      />

      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14 lg:px-8">
        <SectionHeading
          eyebrow="Who we partner with"
          title="Partnerships across the infrastructure value chain"
          description="Whether you own the asset, lead the build or supply the technology, we bring specialist engineering capability to your programme."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partnerTypes.map((type, index) => (
            <Reveal key={type.title} delay={index * 0.05}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <type.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-heading mt-5 text-lg font-semibold tracking-tight text-card-foreground">
                  {type.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{type.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface py-10 text-surface-foreground md:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Why Dynamic Communication" title="What we bring to a partnership" />
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 0.05}>
                <div className="flex flex-col gap-3">
                  <benefit.icon className="size-6 text-primary" aria-hidden="true" />
                  <h3 className="font-heading text-base font-semibold tracking-tight">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-surface-muted">{benefit.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14 lg:px-8">
        <SectionHeading eyebrow="How it works" title="From first conversation to joint delivery" />
        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <li className="flex h-full flex-col rounded-2xl border border-border p-6">
                <span className="font-heading text-sm font-semibold text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading mt-3 text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section id="enquiry" className="mx-auto max-w-7xl px-6 pb-14 md:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                Start a partnership conversation
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Tell us about your organisation and the opportunity. Our partnerships team will
                review your enquiry and arrange an introductory discussion.
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                Prefer email?{' '}
                <a
                  href="mailto:Sales@dynamic-communication.sg"
                  className="font-medium text-foreground hover:text-primary"
                >
                  Sales@dynamic-communication.sg
                </a>
              </p>
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
