import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight, LineChart, Package, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThreeScene from './ThreeScene';
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Set a short timeout to trigger the animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return <section className="relative pt-32 md:pt-40 pb-20 bg-sbuild/10 overflow-hidden">
      {/* ThreeJS Animation Background */}
      <ThreeScene />
      
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className={cn("inline-flex items-center py-1 px-3 mb-6 text-xs font-medium rounded-full", "border border-sbuild/20 bg-sbuild/5 text-sbuild", "transition-all duration-700 ease-out", isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-4")}>
            <span className="flex h-2 w-2 rounded-full bg-sbuild mr-2"></span>
            Advanced SaaS Solutions
          </div>
          
          {/* Headline */}
          <h1 className={cn("text-4xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight leading-tight mb-6", "transition-all duration-700 delay-100 ease-out", isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-4")}>
            Innovative <span className="text-sbuild">SaaS Solutions</span> to Scale Your Business
          </h1>
          
          {/* Subheadline */}
          <p className={cn("text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl", "transition-all duration-700 delay-200 ease-out", isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-4")}>
            At SBuild Solutions, we craft scalable and high-performing software to drive growth and 
            efficiency for businesses of all sizes.
          </p>
          
          {/* CTA Buttons */}
          <div className={cn("flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto justify-center", "transition-all duration-700 delay-300 ease-out", isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-4")}>
            <Button className="h-12 px-8 bg-sbuild hover:bg-sbuild/90 text-white rounded-lg shadow-lg shadow-sbuild/20 transition-all duration-300">
              Get Started 
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button className="h-12 px-8 bg-white text-foreground hover:bg-gray-50 border border-gray-200 rounded-lg transition-all duration-300">
              Learn More
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Feature highlights */}
          <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl", "transition-all duration-700 delay-400 ease-out", isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-4")}>
            <div className="neo-card p-6 border-gray-200 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-sbuild/10 flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-sbuild" />
              </div>
              <h3 className="text-lg font-medium mb-2">Custom Solutions</h3>
              <p className="text-sm text-muted-foreground">Tailored SaaS applications designed to meet your specific business needs.</p>
            </div>
            
            <div className="neo-card p-6 border-gray-200 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-sbuild/10 flex items-center justify-center mb-4">
                <LineChart className="h-6 w-6 text-sbuild" />
              </div>
              <h3 className="text-lg font-medium mb-2">Scalable Architecture</h3>
              <p className="text-sm text-muted-foreground">Build solutions that grow with your business, from startup to enterprise.</p>
            </div>
            
            <div className="neo-card p-6 border-gray-200 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-sbuild/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-sbuild" />
              </div>
              <h3 className="text-lg font-medium mb-2">Enterprise Security</h3>
              <p className="text-sm text-muted-foreground">Advanced security protocols to keep your data and users protected.</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;