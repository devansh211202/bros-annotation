import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { About } from '@/components/About';
import { Solutions } from '@/components/Solutions';
import { Services } from '@/components/Services';
import { HowItWorks } from '@/components/HowItWorks';
import { AnnotationExpertise } from '@/components/AnnotationExpertise';
import { Technology } from '@/components/Technology';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { CaseStudies } from '@/components/CaseStudies';
import { AboutCompany } from '@/components/AboutCompany';
import { CTA } from '@/components/CTA';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Solutions />
        <Services />
        <HowItWorks />
        <AnnotationExpertise />
        <Technology />
        <WhyChooseUs />
        <CaseStudies />
        <AboutCompany />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
