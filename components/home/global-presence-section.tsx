'use client'

import { useState } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Graticule,
  Line,
} from 'react-simple-maps'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json'

type BusinessLine = {
  label: string
  short: string
  color: string
}

const BUSINESS_LINES: BusinessLine[] = [
  { label: 'Connectivity & Telecommunications', short: 'Connectivity', color: 'oklch(0.45 0.15 274)' },
  { label: 'Airfield & Aviation Systems', short: 'Aviation', color: 'oklch(0.35 0.12 282)' },
  { label: 'Terminal, BHS & Critical Infrastructure', short: 'Terminal & BHS', color: 'oklch(0.55 0.17 268)' },
  { label: 'Digital Infrastructure Engineering', short: 'Digital Infra', color: 'oklch(0.65 0.14 255)' },
  { label: 'Electrical Engineering & Renewable Energy', short: 'Electrical & Energy', color: 'oklch(0.72 0.11 242)' },
  { label: 'Intelligent & Security Systems', short: 'Security Systems', color: 'oklch(0.5 0.16 300)' },
  { label: 'Project Engineering & Management', short: 'Project Engineering', color: 'oklch(0.42 0.1 230)' },
]

type Location = {
  name: string
  role: string
  coordinates: [number, number]
  lines: number[]
  labelOffset: [number, number]
}

const LOCATIONS: Location[] = [
  {
    name: 'Singapore',
    role: 'Headquarters',
    coordinates: [103.8198, 1.3521],
    lines: [0, 1, 2, 3, 4, 5, 6],
    labelOffset: [18, -46],
  },
  {
    name: 'Malaysia',
    role: 'Regional Branch',
    coordinates: [101.9758, 3.139],
    lines: [4, 5],
    labelOffset: [-140, 18],
  },
  {
    name: 'Philippines',
    role: 'Regional Branch',
    coordinates: [120.9842, 14.5995],
    lines: [1, 2],
    labelOffset: [-186, -20],
  },
  {
    name: 'India',
    role: 'Regional Branch',
    coordinates: [80.2707, 13.0827],
    lines: [0, 3],
    labelOffset: [-150, -8],
  },
]

const OPERATING_COUNTRIES = ['India', 'Malaysia', 'Singapore', 'Philippines']
const HQ_COORDINATES: [number, number] = [103.8198, 1.3521]

export function GlobalPresenceSection() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null)

  return (
    <section className="border-t border-border bg-secondary/40 py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Our Presence"
          title="Engineering Reach Across Asia"
          description="Headquartered in Singapore with regional branches in India, the Philippines, and Malaysia, delivering multidisciplinary engineering and technology infrastructure across the region."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_280px]">
          <Reveal direction="left" className="relative overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-sm md:p-3">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_40%_35%,oklch(0.86_0.06_225),oklch(0.72_0.09_235)_70%,oklch(0.62_0.1_245))]">
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{ center: [95, 8], scale: 950 }}
                className="h-full w-full"
              >
                <defs>
                  <linearGradient id="dc-land" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.93 0.045 140)" />
                    <stop offset="100%" stopColor="oklch(0.87 0.05 110)" />
                  </linearGradient>
                  <linearGradient id="dc-operating" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="oklch(0.5 0.17 268)" />
                    <stop offset="100%" stopColor="oklch(0.35 0.13 280)" />
                  </linearGradient>
                  <filter id="dc-land-shadow" x="-5%" y="-5%" width="110%" height="110%">
                    <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="oklch(0.35 0.08 240)" floodOpacity="0.35" />
                  </filter>
                </defs>

                <Graticule stroke="oklch(1 0 0 / 0.35)" strokeWidth={0.5} step={[5, 5]} />

                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const isOperating = OPERATING_COUNTRIES.includes(geo.properties.name)
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={isOperating ? 'url(#dc-operating)' : 'url(#dc-land)'}
                          stroke={isOperating ? 'oklch(0.97 0.01 270)' : 'oklch(0.78 0.04 120)'}
                          strokeWidth={isOperating ? 0.9 : 0.5}
                          filter="url(#dc-land-shadow)"
                          style={{
                            default: { outline: 'none', transition: 'fill 300ms ease' },
                            hover: {
                              outline: 'none',
                              fill: isOperating ? 'oklch(0.58 0.17 262)' : 'oklch(0.84 0.07 130)',
                            },
                            pressed: { outline: 'none' },
                          }}
                        />
                      )
                    })
                  }
                </Geographies>

                {LOCATIONS.filter((l) => l.role !== 'Headquarters').map((location, i) => (
                  <Line
                    key={`line-${location.name}`}
                    from={HQ_COORDINATES}
                    to={location.coordinates}
                    stroke="oklch(0.45 0.17 268)"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeDasharray="4 6"
                    className="motion-reduce:[animation:none]"
                    style={{ animation: `dash-flow 1.6s linear infinite`, animationDelay: `${i * 0.25}s` }}
                  />
                ))}

                {LOCATIONS.map((location) => {
                  const isActive = activeLocation === location.name
                  return (
                    <Marker
                      key={location.name}
                      coordinates={location.coordinates}
                      onMouseEnter={() => setActiveLocation(location.name)}
                      onMouseLeave={() => setActiveLocation(null)}
                    >
                      <circle
                        r={location.role === 'Headquarters' ? 7 : 5.5}
                        fill={location.role === 'Headquarters' ? 'oklch(0.62 0.2 25)' : 'var(--primary)'}
                        stroke="var(--card)"
                        strokeWidth={2.5}
                        className="cursor-pointer transition-transform"
                        style={{
                          transform: isActive ? 'scale(1.2)' : 'scale(1)',
                          transformOrigin: 'center',
                        }}
                      />
                      <circle
                        r={location.role === 'Headquarters' ? 7 : 5.5}
                        fill="none"
                        stroke={location.role === 'Headquarters' ? 'oklch(0.62 0.2 25)' : 'var(--primary)'}
                        strokeWidth={1.5}
                        opacity={0.55}
                        className="motion-reduce:hidden"
                        style={{
                          transformOrigin: 'center',
                          animation: `ping-ring-expand 2.2s cubic-bezier(0.22, 1, 0.36, 1) infinite`,
                          animationDelay: `${LOCATIONS.indexOf(location) * 0.3}s`,
                        }}
                      />

                      <foreignObject
                        x={location.labelOffset[0]}
                        y={location.labelOffset[1]}
                        width={170}
                        height={100}
                        style={{ overflow: 'visible', pointerEvents: 'none' }}
                      >
                        <div className="flex w-fit flex-col gap-1 rounded-lg bg-card/95 p-2 shadow-lg ring-1 ring-border backdrop-blur-sm">
                          <div className="inline-flex w-fit items-center gap-1.5 rounded-md bg-foreground px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-background shadow-sm">
                            {location.name}
                          </div>
                          <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                            {location.role}
                          </span>
                          <div className="mt-1 flex flex-wrap gap-1">
                            {location.lines.slice(0, isActive ? undefined : 2).map((lineIndex) => (
                              <span
                                key={lineIndex}
                                className="rounded-sm px-1.5 py-0.5 text-[10px] font-medium text-background"
                                style={{ backgroundColor: BUSINESS_LINES[lineIndex].color }}
                              >
                                {BUSINESS_LINES[lineIndex].short}
                              </span>
                            ))}
                            {!isActive && location.lines.length > 2 && (
                              <span className="rounded-sm bg-secondary px-1.5 py-0.5 text-[10px] font-medium text-secondary-foreground">
                                +{location.lines.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                      </foreignObject>
                    </Marker>
                  )
                })}
              </ComposableMap>
            </div>
          </Reveal>

          <Reveal direction="right" className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Business Lines
            </span>
            <RevealGroup className="flex flex-col gap-3">
              {BUSINESS_LINES.map((line) => (
                <RevealItem key={line.label}>
                  <div className="flex items-center gap-2.5 rounded-lg border border-border bg-card px-3 py-2.5 transition-colors duration-300 hover:border-primary/30">
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: line.color }}
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-tight text-card-foreground">{line.label}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
