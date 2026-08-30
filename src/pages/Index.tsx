import { useEffect, useState } from 'react'
import { HeroSection } from '@/components/sections/HeroSection'
import { MarqueeStrip } from '@/components/sections/MarqueeStrip'
import { ResultsScoreboard } from '@/components/sections/ResultsScoreboard'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { DifferentialsSection } from '@/components/sections/DifferentialsSection'
import { EssenceSection } from '@/components/sections/EssenceSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { LeadFormSection } from '@/components/sections/LeadFormSection'
import { getResults } from '@/services/results'
import { getTestimonials } from '@/services/testimonials'
import { ResultRecord, TestimonialRecord } from '@/types/landing'
import pb from '@/lib/pocketbase/client'

export default function Index() {
  const [results, setResults] = useState<ResultRecord[]>([])
  const [testimonials, setTestimonials] = useState<TestimonialRecord[]>([])
  const [loading, setLoading] = useState(true)

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  // Initial load and PocketBase Realtime Subscriptions
  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      try {
        const [resData, testData] = await Promise.all([getResults(), getTestimonials()])

        if (isMounted) {
          if (resData && resData.length > 0) setResults(resData)
          if (testData && testData.length > 0) setTestimonials(testData)
        }
      } catch (err) {
        console.error('Erro ao carregar dados iniciais da landing page:', err)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchData()

    // Real-time subscriptions for results and testimonials
    const unsubscribeResults = pb
      .collection('results')
      .subscribe('*', async () => {
        const updated = await getResults()
        if (isMounted && updated && updated.length > 0) {
          setResults(updated)
        }
      })
      .catch((err) => console.warn('Realtime subscription results error:', err))

    const unsubscribeTestimonials = pb
      .collection('testimonials')
      .subscribe('*', async () => {
        const updated = await getTestimonials()
        if (isMounted && updated && updated.length > 0) {
          setTestimonials(updated)
        }
      })
      .catch((err) => console.warn('Realtime subscription testimonials error:', err))

    return () => {
      isMounted = false
      pb.collection('results')
        .unsubscribe('*')
        .catch(() => {})
      pb.collection('testimonials')
        .unsubscribe('*')
        .catch(() => {})
    }
  }, [])

  return (
    <div className="w-full relative overflow-x-hidden">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Marquee Destinations Strip */}
      <MarqueeStrip />

      {/* 3. Results Scoreboard (dynamic + fallback) */}
      <ResultsScoreboard results={results} />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Essence / Manifesto Section */}
      <EssenceSection />

      {/* 6. How It Works Section */}
      <HowItWorksSection />

      {/* 7. Testimonials Section (dynamic + fallback) */}
      <TestimonialsSection testimonials={testimonials} />

      {/* 8. Differentials Section */}
      <DifferentialsSection />

      {/* 9. FAQ Section */}
      <FaqSection />

      {/* 10. Lead Proposal Form Section */}
      <LeadFormSection />
    </div>
  )
}
