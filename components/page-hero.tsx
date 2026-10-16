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
    <section className="relative flex min-h-[64vh] items-center overflow-hidden pt-28">
      <div className="absolute inset-0">
        <Image src={image} alt={imageAlt} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 md:px-10">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-heading mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
