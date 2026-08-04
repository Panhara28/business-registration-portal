import { AboutSection } from '@/components/home/about-section'
import { AnnouncementsSection } from '@/components/home/announcements-section'
import { FaqSupportSection } from '@/components/home/faq-support-section'
import { HeroSection } from '@/components/home/hero-section'
import { ProcessSection } from '@/components/home/process-section'
import { ResourcesSection } from '@/components/home/resources-section'
import { ServicesSection } from '@/components/home/services-section'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { SkipToContent } from '@/components/layout/skip-to-content'

export default function HomePage() {
  return (
    <>
      <SkipToContent />
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ProcessSection />
        <ResourcesSection />
        <AnnouncementsSection />
        <FaqSupportSection />
      </main>
      <SiteFooter />
    </>
  )
}
