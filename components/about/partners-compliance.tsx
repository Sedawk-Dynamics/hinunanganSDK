import { BadgeCheck } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'

const partners = [
  'Infrastructure Owners',
  'Main Contractors',
  'Engineering Companies',
  'System Integrators',
  'Technology Partners',
  'Consultants',
  'Shipyards & Marine Organisations',
  'Telecommunications Organisations',
]

const certifications = [
  {
    name: 'BCA — Electrical Engineering',
    focus: 'Electrical design, installation, testing, commissioning and related electrical works',
  },
  {
    name: 'BCA — Communication & Security Systems',
    focus: 'Telecommunication, structured cabling, fibre optic, ELV and CCTV works',
  },
  { name: 'LEW & PE Services', focus: 'Licensed Electrical Worker & Professional Engineer support' },
  { name: 'Quality, Safety & HSE', focus: 'Uncompromising quality, timely delivery and safety-first delivery' },
]

export function PartnersCompliance() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Our Clients & Partners"
              title="Built through trusted partnerships."
              description="Dynamic Communication works with organisations across infrastructure, engineering, telecommunications, aviation, technology, industrial, marine and energy environments. Where confidentiality applies, client names and project details remain protected."
            />
            <RevealGroup className="flex flex-wrap gap-3">
              {partners.map((partner) => (
                <RevealItem key={partner} direction="none">
                  <span className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
                    {partner}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Quality, Safety & Compliance"
              title="Built on quality. Delivered with discipline."
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {certifications.map((cert, index) => (
                <Reveal key={cert.name} delay={index * 0.06}>
                  <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-5">
                    <BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.6} />
                    <div className="flex flex-col gap-1">
                      <span className="font-heading text-base font-semibold">{cert.name}</span>
                      <span className="text-xs leading-relaxed text-muted-foreground text-pretty">
                        {cert.focus}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
              Additional licences, registrations, certifications and qualifications are
              displayed where applicable.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
