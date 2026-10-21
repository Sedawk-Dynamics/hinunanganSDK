import { Reveal } from '@/components/motion/reveal'
import { FitLine } from '@/components/fit-line'
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
        'flex flex-col gap-4',
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
      <Reveal delay={0.05} className="w-full">
        <FitLine
          as="h2"
          minSize={22}
          className={cn(
            'font-heading max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl',
            align === 'center' && 'mx-auto',
          )}
        >
          {title}
        </FitLine>
      </Reveal>
      {description && (
        <Reveal delay={0.1} className="w-full">
          <FitLine
            minSize={14}
            className={cn(
              'max-w-2xl text-pretty leading-relaxed text-muted-foreground',
              align === 'center' && 'mx-auto',
            )}
          >
            {description}
          </FitLine>
        </Reveal>
      )}
    </div>
  )
}
