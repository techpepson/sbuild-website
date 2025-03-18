
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CallToAction from '@/components/CallToAction';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
    <div className="min-h-screen smooth-scroll">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
