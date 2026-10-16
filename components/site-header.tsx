'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { navLinks } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b border-surface-border bg-surface text-surface-foreground transition-shadow duration-300',
        scrolled || open ? 'shadow-sm' : 'shadow-none',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 md:px-10">
        <Link href="/" className="flex items-center gap-2" aria-label="Dynamic Communication home">
          <Image
            src="/images/logo.png"
            alt="Dynamic Communication logo"
            width={340}
            height={208}
            className="h-16 w-auto md:h-24"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium tracking-wide text-surface-muted transition-colors hover:text-surface-foreground',
                pathname === link.href && 'text-surface-foreground',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Start a Project
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md border border-surface-border p-2 text-surface-foreground lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <nav
              className="flex flex-col gap-1 border-t border-surface-border px-6 py-4"
              aria-label="Mobile"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-md px-2 py-3 text-base font-medium text-surface-muted transition-colors hover:bg-surface-border/10 hover:text-surface-foreground',
                    pathname === link.href && 'text-surface-foreground',
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                Start a Project
                <ArrowRight className="size-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
