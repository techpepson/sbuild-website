
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Lock, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a short timeout to trigger the animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-32 md:pt-44 pb-20 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 to-transparent -z-10" />
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10" />
      
      {/* Animation circles */}
      <div className="absolute top-1/4 right-[10%] w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse-soft" />
      <div className="absolute bottom-1/4 left-[10%] w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 animate-float" />

      <div className="container px-6 md:px-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div 
            className={cn(
              "inline-flex items-center py-1 px-3 mb-6 text-xs font-medium rounded-full",
              "border border-accent/10 bg-accent/5 text-accent",
              "transition-all duration-700 ease-out",
              isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
            )}
          >
            <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
            Redefining Digital Ownership
          </div>
          
          {/* Headline */}
          <h1 
            className={cn(
              "text-4xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight leading-tight mb-6",
              "transition-all duration-700 delay-100 ease-out",
              isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
            )}
          >
            The Future of <span className="gradient-text">Decentralized</span> Experiences
          </h1>
          
          {/* Subheadline */}
          <p 
            className={cn(
              "text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl",
              "transition-all duration-700 delay-200 ease-out",
              isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
            )}
          >
            A platform that puts you in control - secure, transparent, and truly owned by its community.
            Experience the next generation of digital interaction.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className={cn(
              "flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto justify-center",
              "transition-all duration-700 delay-300 ease-out",
              isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
            )}
          >
            <Button className="h-12 px-8 bg-accent hover:bg-accent/90 text-white rounded-lg shadow-lg shadow-accent/20 transition-all duration-300">
              Get Started 
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button className="h-12 px-8 bg-white text-foreground hover:bg-gray-50 border border-gray-200 rounded-lg transition-all duration-300">
              Learn More
            </Button>
          </div>
          
          {/* Feature highlights */}
          <div 
            className={cn(
              "grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl",
              "transition-all duration-700 delay-400 ease-out",
              isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
            )}
          >
            <div className="neo-card p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-medium mb-2">Secure by Design</h3>
              <p className="text-sm text-muted-foreground">Built on cryptographic principles ensuring your data remains protected.</p>
            </div>
            
            <div className="neo-card p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-medium mb-2">Globally Connected</h3>
              <p className="text-sm text-muted-foreground">Access your digital assets anywhere, with no central point of failure.</p>
            </div>
            
            <div className="neo-card p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-medium mb-2">Full Ownership</h3>
              <p className="text-sm text-muted-foreground">You control your identity and data, with no intermediaries.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
