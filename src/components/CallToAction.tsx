
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const CallToAction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-accent/5 -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10" />
      
      <div className="container px-6 md:px-10 mx-auto max-w-7xl">
        <div className={cn(
          "neo-card p-8 md:p-16 rounded-2xl relative overflow-hidden max-w-5xl mx-auto",
          "transition-all duration-700 transform",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        )}>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-4 tracking-tight">
                Ready to Join the Decentralized Future?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Get started today and experience the freedom, security, and control 
                that comes with truly owning your digital presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="h-12 px-8 bg-accent hover:bg-accent/90 text-white rounded-lg shadow-lg shadow-accent/20 transition-all duration-300">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button className="h-12 px-8 bg-white text-foreground hover:bg-gray-50 border border-gray-200 rounded-lg transition-all duration-300">
                  Schedule a Demo
                </Button>
              </div>
            </div>
            
            <div className="flex shrink-0 justify-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-accent/10 relative flex items-center justify-center animate-pulse-soft">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/80 to-accent/40" />
                <ArrowRight className="h-12 w-12 text-white relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
