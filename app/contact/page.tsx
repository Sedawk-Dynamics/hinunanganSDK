import type { Metadata } from 'next'
import { Mail, Phone, MapPin } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/motion/reveal'
import { ContactForm } from '@/components/contact/contact-form'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Dynamic Communication to discuss your telecommunications, aviation, power, or infrastructure engineering requirement.',
}

const offices = [
  {
    country: 'Singapore',
    address: '113 Eunos Ave 3, #04-01, Gordon Industrial Building, Singapore 409838',
  },
  { country: 'Malaysia', address: 'Regional Branch' },
  { country: 'India', address: 'Engineering Centre' },
  { country: 'Philippines', address: 'Regional Branch' },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project"
        description="Whether it's a fibre rollout, an airfield upgrade, or a data centre build — tell us what you need and our team will respond within one business day."
        image="/images/global-map.jpg"
        imageAlt="Abstract glowing map showing regional connections across Southeast Asia"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                Get in touch
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Our regional team spans Singapore, Malaysia, India, and the Philippines. Reach
                out and we&apos;ll connect you with the right specialists for your project.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-col gap-4">
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
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8">
                {offices.map((office) => (
                  <div key={office.country} className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold">{office.country}</p>
                      <p className="text-sm text-muted-foreground">{office.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
