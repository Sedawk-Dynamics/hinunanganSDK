import { HeroSection } from '@/components/home/hero-section'
import { StatsSection } from '@/components/home/stats-section'
import { DomainsSection } from '@/components/home/domains-section'
import { IndustriesMarquee } from '@/components/home/industries-marquee'
import { GlobalPresenceSection } from '@/components/home/global-presence-section'
import { WhySection } from '@/components/home/why-section'
import { CtaSection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <DomainsSection />
      <IndustriesMarquee />
      <GlobalPresenceSection />
      <WhySection />
      <CtaSection />
    </>
  )
}
