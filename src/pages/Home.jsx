import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import TrustStrip from '../components/TrustStrip';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ProcessSection from '../components/ProcessSection';
import IndustriesSection from '../components/IndustriesSection';
import CtaBanner from '../components/CtaBanner';

export const Home = () => {
  // Handle any incoming hash scroll when navigated from another page
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, []);

  return (
    <main>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Strip Counters */}
      <TrustStrip />

      {/* 3. Core Services (4 cards) */}
      <ServicesSection />

      {/* 4. Why Choose Us (Dark navy glass cards) */}
      <WhyChooseUs />

      {/* 5. 7-Step Agile Process */}
      <ProcessSection />

      {/* 6. Industries We Serve */}
      <IndustriesSection />

      {/* 7. High-Impact CTA Banner */}
      <CtaBanner />
    </main>
  );
};

export default Home;
