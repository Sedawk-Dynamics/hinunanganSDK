import Link from 'next/link'
import Image from 'next/image'
import { footerColumns } from '@/lib/site-data'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'

export function SiteFooter() {
  return (
    <footer className="border-t border-surface-border bg-surface text-surface-foreground">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <Reveal direction="left" className="flex flex-col items-start gap-6">
            <Image
              src="/Log.png"
              alt="Dynamic Communication logo"
              width={4077}
              height={736}
              className="h-10 w-auto md:h-14"
            />
            <p className="font-heading text-xl font-medium leading-snug text-balance">
              Engineering Technology.
              <br />
              Connected Infrastructure.
              <br />
              Sustainable Energy.
            </p>
            <p className="text-sm uppercase tracking-[0.16em] text-surface-muted">
              Connect. Engineer. Integrate. Deliver.
            </p>
          </Reveal>

          <RevealGroup className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((col) => (
              <RevealItem key={col.title} className="flex flex-col gap-3">
                <Link
                  href={col.href}
                  className="text-sm font-semibold uppercase tracking-wide text-surface-foreground hover:text-primary"
                >
                  {col.title}
                </Link>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((item) => (
                    <li key={item}>
                      <Link
                        href={col.href}
                        className="text-sm leading-relaxed text-surface-muted transition-colors hover:translate-x-0.5 hover:text-surface-foreground"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-surface-border pt-8 text-xs text-surface-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Dynamic Communication Pte. Ltd. All rights
            reserved.
          </p>
          <p>Singapore &middot; Malaysia &middot; India &middot; Philippines</p>
        </div>
      </div>
    </footer>
  )
}
