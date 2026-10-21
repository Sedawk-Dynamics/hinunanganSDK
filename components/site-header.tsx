'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'
import { navLinks } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Lock page scroll and allow Escape to close while the menu is open
  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300',
          scrolled ? 'bg-white shadow-sm' : 'bg-transparent',
        )}
      >
        {/* Soft scrim keeps the white logo legible over light hero images */}
        <div
          aria-hidden
          className={cn(
            'pointer-events-none absolute inset-0 -bottom-6 bg-gradient-to-b from-black/55 via-black/20 to-transparent transition-opacity duration-300',
            scrolled ? 'opacity-0' : 'opacity-100',
          )}
        />

        <div className="relative mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-10">
          <Link href="/" className="flex items-center" aria-label="Dynamic Communication home">
            <Image
              src="/Log.png"
              alt="Dynamic Communication logo"
              width={4077}
              height={736}
              className={cn(
                'h-9 w-auto transition-[filter] duration-300 md:h-12',
                !scrolled && 'brightness-0 invert',
              )}
              priority
            />
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className={cn(
              'group inline-flex size-11 flex-col items-end justify-center gap-[7px] transition-colors',
              scrolled ? 'text-surface-foreground' : 'text-white',
            )}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="site-menu"
          >
            <span className="h-0.5 w-8 rounded-full bg-current" />
            <span className="h-0.5 w-8 rounded-full bg-current transition-all group-hover:w-6" />
            <span className="h-0.5 w-8 rounded-full bg-current" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-[#0b3fd6] text-white"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-6 top-6 inline-flex size-11 items-center justify-center text-white transition-transform hover:rotate-90 md:right-10 md:top-8"
              aria-label="Close menu"
            >
              <X className="size-9" strokeWidth={1.5} />
            </button>

            <div className="flex min-h-full flex-col items-center justify-center gap-12 px-6 py-24">
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                <Link href="/" onClick={() => setOpen(false)} aria-label="Dynamic Communication home">
                  <Image
                    src="/Log.png"
                    alt="Dynamic Communication logo"
                    width={4077}
                    height={736}
                    className="h-12 w-auto brightness-0 invert md:h-16"
                  />
                </Link>
              </motion.div>

              <nav aria-label="Primary" className="flex flex-col items-center gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={pathname === link.href ? 'page' : undefined}
                      className={cn(
                        'text-xl font-medium tracking-wide transition-colors hover:text-[#ff8a75] md:text-2xl',
                        pathname === link.href ? 'text-[#ff8a75]' : 'text-white',
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + navLinks.length * 0.04 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="group inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#0b3fd6]"
                >
                  Start a Project
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
