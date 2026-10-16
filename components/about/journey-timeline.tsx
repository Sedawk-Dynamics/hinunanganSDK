import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion/reveal'

const milestones = [
  {
    year: '2023',
    title: 'Dynamic Communication Established',
    description:
      'Established in Singapore with an initial focus on telecommunications and technology infrastructure.',
  },
  {
    year: '2024',
    title: 'Engineering Capability Expansion',
    description:
      'Expanded capabilities across fibre infrastructure, telecommunications, electrical and infrastructure delivery.',
  },
  {
    year: '2025',
    title: 'Critical Infrastructure',
    description: 'Expanded into aviation, airport and multidisciplinary infrastructure projects.',
  },
  {
    year: '2026',
    title: 'Data & Intelligent Technology (DIT)',
    description:
      'Expanded into Data & Intelligent Technology, strengthening capabilities in digital infrastructure, intelligent systems, data solutions and technology integration.',
  },
  {
    year: 'Future',
    title: 'Global Engineering Platform',
    description:
      'Expanding engineering capabilities, strategic partnerships and international project opportunities.',
  },
]

export function JourneyTimeline() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Our Journey"
          title="Building capability. Expanding possibilities."
        />

        <div className="relative mt-16">
          <div className="absolute left-[7px] top-1 hidden h-full w-px bg-border md:block" />
          <div className="flex flex-col gap-10">
            {milestones.map((milestone, index) => (
              <Reveal key={milestone.year} delay={index * 0.06} direction="left">
                <div className="relative flex flex-col gap-2 md:flex-row md:items-baseline md:gap-8 md:pl-8">
                  <span className="absolute left-0 top-1.5 hidden size-[15px] rounded-full bg-gradient-brand md:block" />
                  <span className="font-heading w-24 shrink-0 text-lg font-semibold text-primary">
                    {milestone.year}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-heading text-lg font-semibold leading-snug">
                      {milestone.title}
                    </h3>
                    <p className="max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
