import Image from 'next/image'
import { Reveal } from '@/components/motion/reveal'

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string
  title: string
  description?: string
  image: string
  imageAlt: string
}) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden pt-24">
      <div className="absolute inset-0">
        <Image src={image} alt={imageAlt} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-10 md:px-10">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-heading mt-4 text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:whitespace-nowrap md:text-[clamp(1.5rem,3vw,3.5rem)]">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16}>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground md:whitespace-nowrap md:text-[clamp(0.8125rem,1.3vw,1.125rem)]">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
