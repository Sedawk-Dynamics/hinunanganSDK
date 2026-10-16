'use client'

const environments = [
  'AVIATION',
  'RAIL & MRT',
  'TELECOMMUNICATIONS',
  'MARINE & SHIPYARD',
  'DATA CENTRES',
  'INDUSTRIAL',
  'CRITICAL INFRASTRUCTURE',
  'ENERGY',
]

export function IndustriesMarquee() {
  const track = [...environments, ...environments]

  return (
    <section className="group border-y border-border bg-card/40 py-10">
      <p className="mx-auto mb-6 max-w-7xl px-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-primary md:px-10">
        Engineered Across Critical Environments
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap motion-reduce:animate-none">
          {track.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="font-heading text-2xl font-semibold tracking-tight text-muted-foreground/50 transition-colors duration-300 hover:text-primary md:text-3xl"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
