
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/home/Hero';
import BenefitsSection from '../components/home/BenefitsSection';
import LearningApproach from '../components/home/LearningApproach';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';
import Footer from '../components/home/Footer';

const Index = () => {
  const navigate = useNavigate();
  
  // Navigation handler
  const handleGetStarted = () => {
    navigate('/courses');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <Hero onGetStarted={handleGetStarted} />
      <BenefitsSection />
      <LearningApproach />
      <TestimonialsSection />
      <CTASection onEnrollNow={handleGetStarted} />
      <Footer />
    </div>
  );
};

export default Index;
