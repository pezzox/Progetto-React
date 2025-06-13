// Import homepage sections
import HeroSection from '../components/Home/HeroSection'
import BenefitsSection from '../components/Home/BenefitsSection'
import FeaturesSection from '../components/Home/FeaturesSection'
import QuoteSection from '../components/Home/QuoteSection'

function Home({ setCurrentPage }) {
  return (
    // Main container for the Home page
    <div className="home-page">
      {/* Hero section with main CTA */}
      <HeroSection setCurrentPage={setCurrentPage} />

      {/* Benefits of meditation */}
      <BenefitsSection />

      {/* Platform features */}
      <FeaturesSection />

      {/* Rotating inspirational quote */}
      <QuoteSection />
    </div>
  )
}

export default Home
