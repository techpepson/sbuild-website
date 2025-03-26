
import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight, LineChart, Package, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Initial page load animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Scroll effect handler
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const heroHeight = heroRef.current.offsetHeight;
        const progress = Math.min(scrollPosition / (heroHeight * 0.8), 1);
        setScrollProgress(progress);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Calculate parallax and opacity effects based on scroll progress
  const parallaxOffset = scrollProgress * 100; // pixels to move elements
  const contentOpacity = 1 - scrollProgress * 1.5; // fade out content faster than scroll
  
  return (
    <section 
      ref={heroRef}
      className="relative pt-32 md:pt-40 pb-20 overflow-hidden min-h-screen flex items-center"
    >
      {/* Space-themed background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${parallaxOffset * 0.4}px)`, // slower parallax for background
          transition: 'transform 0.1s ease-out'
        }}
      >
        <img 
          src="/lovable-uploads/043b23c9-dcd4-4d28-ac4d-13194f788df1.png" 
          alt="Earth from space with cloud network" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div 
        className="container px-4 mx-auto max-w-7xl relative z-10"
        style={{
          opacity: Math.max(contentOpacity, 0),
          transform: `translateY(${parallaxOffset * 0.2}px)`, // subtle parallax for content
          transition: 'opacity 0.2s ease-out, transform 0.1s ease-out'
        }}
      >
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className={cn(
            "inline-flex items-center py-1 px-3 mb-6 text-xs font-medium rounded-full", 
            "border border-white/20 bg-white/5 text-white", 
            "transition-all duration-700 ease-out", 
            isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
          )}>
            <span className="flex h-2 w-2 rounded-full bg-sbuild mr-2"></span>
            Advanced SaaS Solutions
          </div>
          
          {/* Headline */}
          <h1 className={cn(
            "text-4xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight leading-tight mb-6 text-white", 
            "transition-all duration-700 delay-100 ease-out", 
            isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
          )}>
            Innovative <span className="text-sbuild">SaaS Solutions</span> to Scale Your Business
          </h1>
          
          {/* Subheadline */}
          <p className={cn(
            "text-lg md:text-xl text-white/80 mb-8 max-w-3xl", 
            "transition-all duration-700 delay-200 ease-out", 
            isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
          )}>
            At SBuild Solutions, we craft scalable and high-performing software to drive growth and 
            efficiency for businesses of all sizes.
          </p>
          
          {/* CTA Buttons */}
          <div className={cn(
            "flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto justify-center", 
            "transition-all duration-700 delay-300 ease-out", 
            isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
          )}>
            <Link to="/contact">
              <Button className="h-12 px-8 bg-sbuild hover:bg-sbuild/90 text-white rounded-lg shadow-lg shadow-sbuild/20 transition-all duration-300">
                Get Started 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              <Button className="h-12 px-8 bg-white/10 text-white hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300 backdrop-blur-sm">
                Schedule a Meeting
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
          
          {/* Feature highlights */}
          <div className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl", 
            "transition-all duration-700 delay-400 ease-out", 
            isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
          )}>
            <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-xl flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300">
              <div className="h-12 w-12 rounded-full bg-sbuild/20 flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-sbuild" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-white">Custom Solutions</h3>
              <p className="text-sm text-white/70">Tailored SaaS applications designed to meet your specific business needs.</p>
            </div>
            
            <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-xl flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300">
              <div className="h-12 w-12 rounded-full bg-sbuild/20 flex items-center justify-center mb-4">
                <LineChart className="h-6 w-6 text-sbuild" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-white">Scalable Architecture</h3>
              <p className="text-sm text-white/70">Build solutions that grow with your business, from startup to enterprise.</p>
            </div>
            
            <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-xl flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300">
              <div className="h-12 w-12 rounded-full bg-sbuild/20 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-sbuild" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-white">Enterprise Security</h3>
              <p className="text-sm text-white/70">Advanced security protocols to keep your data and users protected.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
