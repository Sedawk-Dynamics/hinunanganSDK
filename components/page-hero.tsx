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
        {/* Dark scrims only where the text sits, so the photo stays sharp and unwashed */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-10 md:px-10">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-heading mt-4 text-white text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:whitespace-nowrap md:text-[clamp(1.5rem,3vw,3.5rem)]">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16}>
            <p className="mt-4 text-pretty leading-relaxed text-white/85 md:whitespace-nowrap md:text-[clamp(0.8125rem,1.3vw,1.125rem)]">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
