import { Reveal } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex max-w-2xl flex-col gap-4',
        align === 'center' && 'mx-auto items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-heading text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="text-pretty leading-relaxed text-muted-foreground">{description}</p>
        </Reveal>
      )}
    </div>
  )
}
