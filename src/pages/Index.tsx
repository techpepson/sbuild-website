
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import Stats from '@/components/Stats';
import ProjectsSection from '@/components/ProjectsSection';
import InsightsSection from '@/components/InsightsSection';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Handle hash navigation for smooth scrolling
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Handle hash on initial load
    handleHashChange();

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Clean up
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen smooth-scroll bg-black">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <Stats />
        <ProjectsSection />
        <InsightsSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
