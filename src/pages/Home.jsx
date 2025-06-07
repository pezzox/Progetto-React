import HeroSection from '../../components/Home/HeroSection';
import BenefitsSection from '../../components/Home/BenefitsSection';
import FeaturesSection from '../../components/Home/FeaturesSection';
import QuoteSection from '../../components/Home/QuoteSection';

function Home({ setCurrentPage }) {
  return (
    <div className="home-page">
      <HeroSection setCurrentPage={setCurrentPage} />
      <BenefitsSection />
      <FeaturesSection />
      <QuoteSection />
    </div>
  );
}

export default Home;
