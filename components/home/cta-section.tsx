import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'
import { MagneticButton } from '@/components/motion/magnetic-button'

type CtaSectionProps = {
  eyebrow?: string
  title?: string
  description?: string
  buttonLabel?: string
  buttonHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function CtaSection({
  eyebrow = 'Have a Complex Engineering Requirement?',
  title = "Let's engineer what comes next.",
  description = 'Dynamic Communication works with infrastructure owners, engineering companies, main contractors, system integrators and technology partners to deliver specialist engineering and infrastructure solutions.',
  buttonLabel = 'Start a Project',
  buttonHref = '/contact',
  secondaryLabel = 'Partner With Us',
  secondaryHref = '/capabilities',
}: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden py-12 md:py-16">
      <div className="glow-drift absolute inset-0 bg-gradient-brand opacity-[0.08]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-heading mt-6 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton strength={0.3}>
              <Link
                href={buttonHref}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.03]"
              >
                {buttonLabel}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </MagneticButton>
            {secondaryLabel && (
              <MagneticButton strength={0.25}>
                <Link
                  href={secondaryHref}
                  className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-foreground/40"
                >
                  {secondaryLabel}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </MagneticButton>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
