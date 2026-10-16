import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Space_Grotesk } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const _manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans-loaded',
})
const _spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading-loaded',
})

export const metadata: Metadata = {
  title: 'Dynamic Communication Pte. Ltd. | Engineering Technology. Connected Infrastructure.',
  description:
    'Dynamic Communication is a multidisciplinary engineering and technology infrastructure company delivering specialist solutions across telecommunications, aviation, rail, marine, electrical, digital infrastructure, intelligent systems, renewable energy and advanced data intelligence.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0d0e2b',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${_manrope.variable} ${_spaceGrotesk.variable}`}
    >
      <body className="antialiased font-sans">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
