'use client'

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion/reveal'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json'

const MAP_WIDTH = 1000
const MAP_HEIGHT = 620

const HQ_COLOR = 'oklch(0.58 0.2 27)'
const BRANCH_COLOR = 'oklch(0.5 0.16 258)'

type Location = {
  name: string
  role: 'Headquarters' | 'Regional Branch'
  coordinates: [number, number]
  // Tag placement relative to the marker: leader line runs vertically to `y`, then horizontally to `x`
  tag: { x: number; y: number; side: 'left' | 'right' }
}

const LOCATIONS: Location[] = [
  {
    name: 'Singapore',
    role: 'Headquarters',
    coordinates: [103.8198, 1.3521],
    tag: { x: 34, y: 56, side: 'right' },
  },
  {
    name: 'Malaysia',
    role: 'Regional Branch',
    coordinates: [101.6869, 3.139],
    tag: { x: -44, y: 0, side: 'left' },
  },
  {
    name: 'Philippines',
    role: 'Regional Branch',
    coordinates: [120.9842, 14.5995],
    tag: { x: 40, y: 0, side: 'right' },
  },
  {
    name: 'India',
    role: 'Regional Branch',
    coordinates: [80.2707, 13.0827],
    tag: { x: 36, y: -36, side: 'right' },
  },
]

// Soft concentric rings that mark each operating region
const HALOS: { center: [number, number]; radii: number[] }[] = [
  { center: [110, 6], radii: [110, 190, 270] },
  { center: [79, 20], radii: [80, 140] },
]

const OPERATING_COUNTRIES = ['India', 'Malaysia', 'Singapore', 'Philippines']

const LEGEND = [
  { label: 'Headquarters', color: HQ_COLOR },
  { label: 'Regional Branch', color: BRANCH_COLOR },
]

function LocationTag({ location }: { location: Location }) {
  const { x, y, side } = location.tag
  const label = location.name.toUpperCase()
  const width = label.length * 8.4 + 26
  const height = 24
  const rectX = side === 'left' ? x - width : x
  const color = location.role === 'Headquarters' ? HQ_COLOR : BRANCH_COLOR

  return (
    <g className="hidden md:block" style={{ pointerEvents: 'none' }}>
      <polyline
        points={`0,0 0,${y} ${x},${y}`}
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <rect x={rectX} y={y - height / 2} width={width} height={height} fill={color} />
      <text
        x={rectX + width / 2}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
        fontSize={12.5}
        fontWeight={600}
        letterSpacing={0.6}
        className="font-heading"
      >
        {label}
      </text>
    </g>
  )
}

export function GlobalPresenceSection() {
  return (
    <section className="border-t border-border bg-background py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Our Presence"
          title="Engineering Reach Across Asia"
          description="Headquartered in Singapore with regional branches in India, the Philippines, and Malaysia, delivering multidisciplinary engineering and technology infrastructure across the region."
        />
      </div>

      <Reveal className="relative mx-auto mt-6 w-full max-w-[1600px] md:mt-8">
        <ComposableMap
          width={MAP_WIDTH}
          height={MAP_HEIGHT}
          projection="geoMercator"
          projectionConfig={{ center: [105, 17.5], scale: 640 }}
          className="block h-auto w-full"
        >
          {HALOS.map((halo) => (
            <Marker key={halo.center.join(',')} coordinates={halo.center}>
              {halo.radii.map((r) => (
                <circle key={r} r={r} fill="oklch(0.62 0.1 240 / 0.12)" />
              ))}
            </Marker>
          ))}

          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies
                .filter((geo) => geo.properties?.name !== 'Antarctica')
                .map((geo) => {
                  const isOperating = OPERATING_COUNTRIES.includes(geo.properties?.name)
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isOperating ? 'oklch(0.74 0.09 245)' : 'oklch(0.89 0.045 235 / 0.85)'}
                      stroke="oklch(1 0 0 / 0.7)"
                      strokeWidth={0.8}
                      className={
                        isOperating
                          ? 'outline-none transition-[fill] duration-300 hover:fill-[oklch(0.68_0.11_248)]'
                          : 'outline-none transition-[fill] duration-300 hover:fill-[oklch(0.85_0.06_235)]'
                      }
                    />
                  )
                })
            }
          </Geographies>

          {LOCATIONS.map((location, i) => {
            const color = location.role === 'Headquarters' ? HQ_COLOR : BRANCH_COLOR
            const r = location.role === 'Headquarters' ? 8 : 6.5
            return (
              <Marker key={location.name} coordinates={location.coordinates}>
                <title>{`${location.name} — ${location.role}`}</title>
                <LocationTag location={location} />
                <circle
                  r={r}
                  fill="none"
                  stroke={color}
                  strokeWidth={2}
                  opacity={0.55}
                  className="motion-reduce:hidden"
                  style={{
                    transformOrigin: 'center',
                    transformBox: 'fill-box',
                    animation: 'ping-ring-expand 2.2s cubic-bezier(0.22, 1, 0.36, 1) infinite',
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
                <circle r={r} fill={color} stroke="white" strokeWidth={2.5} />
              </Marker>
            )
          })}
        </ComposableMap>

        <ul className="flex flex-wrap gap-2 px-6 pt-4 md:absolute md:bottom-6 md:left-10 md:flex-col md:items-start md:p-0">
          {LEGEND.map((item) => (
            <li
              key={item.label}
              className="px-2.5 py-1 text-xs font-medium text-white md:text-sm"
              style={{ backgroundColor: item.color }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
