import { AboutSection } from '@/components/home/about-section'
import { AnnouncementsSection } from '@/components/home/announcements-section'
import { FaqSupportSection } from '@/components/home/faq-support-section'
import { HeroSection } from '@/components/home/hero-section'
import { ProcessSection } from '@/components/home/process-section'
import { ResourcesSection } from '@/components/home/resources-section'
import { ServicesSection } from '@/components/home/services-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <ResourcesSection />
      <AnnouncementsSection />
      <FaqSupportSection />
    </>
  )
}
