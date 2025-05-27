import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const CallToAction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 -z-10"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-conic rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container px-4 mx-auto max-w-7xl">
        <div
          className={cn(
            "bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-2xl relative overflow-hidden border border-teal-100 max-w-5xl mx-auto",
            "transition-all duration-700 transform",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-sbuild/10 to-cyan-400/10 rounded-full opacity-70 blur-2xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-emerald-400/10 to-sbuild/10 opacity-70 blur-2xl -z-10 rounded-full"></div>

          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <div className="flex justify-center mb-4">
                <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-sbuild/20 to-cyan-500/20 rounded-full">
                  <Sparkles className="h-6 w-6 text-sbuild" />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sbuild to-cyan-600">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground">
                Let's discuss how SBuild Solutions can help you create scalable,
                high-performing SaaS applications that drive growth and
                efficiency.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/services">
                <Button className="bg-gradient-to-r from-sbuild to-sbuild/90 hover:bg-sbuild/90 h-12 px-8 rounded-lg">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="h-12 px-8 border-gray-200 rounded-lg hover:bg-gray-100"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
