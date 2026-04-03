import HeroSection from '@/components/HeroSection'
import FeaturedAttractions from '@/components/FeaturedAttractions'
import SeasonGuide from '@/components/SeasonGuide'
import QuickTips from '@/components/QuickTips'
import NewsletterBanner from '@/components/NewsletterBanner'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedAttractions />
      <SeasonGuide />
      <QuickTips />
      <NewsletterBanner />
    </>
  )
}
