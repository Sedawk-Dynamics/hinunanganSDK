import { SectionHeading } from '@/components/section-heading'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { StatCounter } from '@/components/motion/stat-counter'

const disciplines = [
  'Engineering',
  'Project Management',
  'Telecommunications',
  'Fibre Infrastructure',
  'Electrical Systems',
  'Aviation',
  'Rail & MRT',
  'Marine',
  'Digital Infrastructure',
  'Security Systems',
  'Energy',
  'Data & Technology',
]

export function TeamSection() {
  return (
    <section className="border-y border-border bg-card/40 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Our Team"
              title="The people behind the infrastructure."
              description="Our multidisciplinary team brings together expertise across engineering, project management, telecommunications, fibre infrastructure, electrical systems, aviation, marine, digital infrastructure, security, energy and operations."
            />
            <StatCounter value={18} label="Engineering & Technical Professionals" />
          </div>

          <div className="flex flex-col gap-4">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Our Professional Disciplines
              </span>
            </Reveal>
            <RevealGroup className="flex flex-wrap gap-3">
              {disciplines.map((discipline) => (
                <RevealItem key={discipline} direction="none">
                  <span className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
                    {discipline}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  )
}
