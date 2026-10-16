'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const slides = [
  {
    src: '/images/banner-hero.jpg',
    alt: 'Dynamic Communication — telecommunications tower overlooking a connected city skyline at dusk, representing connectivity and digital infrastructure engineering.',
  },
  {
    src: '/images/banner-digital-energy.jpg',
    alt: 'Dynamic Communication — aircraft on an airport runway at sunset, representing airfield and aviation systems engineering.',
  },
  {
    src: '/images/banner-security-project.jpg',
    alt: 'Dynamic Communication — modern airport terminal with baggage handling system, representing terminal, BHS and critical infrastructure engineering.',
  },
]

const AUTOPLAY_MS = 5000

export function HeroSection() {
  const [index, setIndex] = useState(0)

  const goTo = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length)
  }, [])

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [index])

  return (
    <section
      className="relative w-full overflow-hidden bg-surface pt-20 md:pt-24"
      aria-roledescription="carousel"
      aria-label="Dynamic Communication banners"
    >
      <div className="relative">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={cn(
              'transition-opacity duration-700 ease-out',
              i === index ? 'opacity-100' : 'pointer-events-none absolute inset-0 opacity-0',
            )}
            aria-hidden={i !== index}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${i + 1} of ${slides.length}`}
          >
            <Image
              src={slide.src || '/placeholder.svg'}
              alt={slide.alt}
              width={2560}
              height={1440}
              priority={i === 0}
              className="h-auto w-full"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-[calc(50%+2rem)] z-10 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-surface/80 text-surface-foreground shadow-sm backdrop-blur transition hover:bg-surface md:left-5 md:size-11"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-[calc(50%+2rem)] z-10 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-surface/80 text-surface-foreground shadow-sm backdrop-blur transition hover:bg-surface md:right-5 md:size-11"
      >
        <ChevronRight className="size-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2.5 md:bottom-6">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={cn(
              'h-2 rounded-full transition-all',
              i === index
                ? 'w-7 bg-primary'
                : 'w-2 bg-surface-foreground/30 hover:bg-surface-foreground/60',
            )}
          />
        ))}
      </div>
    </section>
  )
}
