import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion/reveal'
import { TiltCard } from '@/components/motion/tilt-card'

const domains = [
  {
    title: 'Connectivity & Telecommunications',
    description:
      'Fibre, wireless, RF and in-building connectivity infrastructure for a more connected world.',
    image: '/images/domain-telecom.png',
  },
  {
    title: 'Airfield & Aviation Systems',
    description:
      'Runway lighting, airfield control, navigation and restricted-area works engineering safer skies.',
    image: '/images/domain-aviation.png',
  },
  {
    title: 'Terminal, BHS & Critical Infrastructure',
    description:
      'Terminal M&E, baggage handling and critical infrastructure enabling seamless airport operations.',
    image: '/images/domain-terminal.png',
  },
  {
    title: 'Digital Infrastructure Engineering',
    description:
      'ICT, structured cabling, data centre and network infrastructure for modern digital environments.',
    image: '/images/domain-digital.png',
  },
  {
    title: 'Electrical Engineering & Renewable Energy',
    description:
      'Power distribution, protection systems and solar PV infrastructure for clean, reliable energy.',
    image: '/images/domain-electrical.png',
  },
  {
    title: 'Intelligent & Security Systems',
    description:
      'Integrated surveillance, access control and intelligent infrastructure for safer environments.',
    image: '/images/domain-security.png',
  },
  {
    title: 'Project Engineering & Management',
    description:
      'BIM-enabled project delivery — from planning and design through integration and handover.',
    image: '/images/domain-project.png',
  },
]

export function DomainsSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Our Engineering Domains"
          title="Multiple disciplines. One engineering partner."
        />

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain, index) => (
            <Reveal key={domain.title} direction="scale" delay={(index % 3) * 0.1}>
              <TiltCard maxTilt={8}>
                <article className="gradient-border-ring card-lift-glow flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                  <div className="shine-sweep relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={domain.image}
                      alt={domain.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-6">
                    <h3 className="font-heading text-lg font-semibold leading-snug text-balance text-card-foreground">
                      {domain.title}
                      <span className="mt-1.5 block h-0.5 w-0 bg-gradient-brand transition-all duration-500 group-hover:w-10" />
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                      {domain.description}
                    </p>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
