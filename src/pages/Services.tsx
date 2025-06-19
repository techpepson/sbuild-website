import React, { useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import HeroSection from "@/components/services/HeroSection";
import ServicesList from "@/components/services/ServicesList";

const   Services = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Handle hash navigation for smooth scrolling
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Handle hash on initial load
    handleHashChange();

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Clean up
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Detail Section */}
        <ServicesList />

        {/* Call to Action */}
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
