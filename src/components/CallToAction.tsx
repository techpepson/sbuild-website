import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
const CallToAction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return <section id="contact" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-sbuild/5 -z-10"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-sbuild/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container px-4 mx-auto max-w-7xl">
        <div className={cn("bg-white p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden border border-gray-100 max-w-5xl mx-auto", "transition-all duration-700 transform", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-conic rounded-full opacity-20 blur-2xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-conic opacity-20 blur-medium -z-10 rounded-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground">
                Let's discuss how SBuild Solutions can help you create scalable, high-performing 
                SaaS applications that drive growth and efficiency.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-sbuild hover:bg-sbuild/90 h-12 px-8 rounded-lg shadow-lg shadow-sbuild/20">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="h-12 px-8 border-gray-200 rounded-lg">
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CallToAction;