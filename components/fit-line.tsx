'use client'

import { useLayoutEffect, useRef } from 'react'

/**
 * Keeps text on a single line from `md` up by shrinking its font size to fit the
 * available width. If it would need to drop below `minSize` (px), it wraps normally
 * instead so long copy stays readable. Below `md` it always wraps.
 */
export function FitLine({
  as: Tag = 'p',
  minSize,
  className,
  children,
}: {
  as?: 'h2' | 'h3' | 'p'
  minSize: number
  className?: string
  children: React.ReactNode
}) {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const mq = window.matchMedia('(min-width: 768px)')
    let lastWidth = -1

    const fit = () => {
      el.style.fontSize = ''
      el.style.whiteSpace = ''
      el.style.maxWidth = ''
      if (!mq.matches) return

      el.style.whiteSpace = 'nowrap'
      el.style.maxWidth = 'none'
      const ratio = el.clientWidth / el.scrollWidth
      if (ratio >= 1) return

      const size = parseFloat(getComputedStyle(el).fontSize) * ratio * 0.98
      if (size >= minSize) {
        el.style.fontSize = `${size}px`
      } else {
        el.style.whiteSpace = ''
        el.style.maxWidth = ''
      }
    }

    // Only refit when the available width changes, not when our own font change alters height
    const ro = new ResizeObserver(([entry]) => {
      const width = Math.round(entry.contentRect.width)
      if (width === lastWidth) return
      lastWidth = width
      fit()
    })
    ro.observe(el.parentElement ?? el)
    mq.addEventListener('change', fit)
    document.fonts?.ready.then(fit)

    return () => {
      ro.disconnect()
      mq.removeEventListener('change', fit)
    }
  }, [minSize])

  return (
    <Tag ref={ref as React.Ref<never>} className={className}>
      {children}
    </Tag>
  )
}
