import React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={heroRef} className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-teal -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10" />

      <div className="container px-4 mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className={cn(
              "inline-flex items-center py-1 px-3 mb-6 text-xs font-medium rounded-full",
              "border border-sbuild/10 bg-sbuild/5 text-sbuild",
              "transition-all duration-700 ease-out",
              heroInView
                ? "opacity-100 transform-none"
                : "opacity-0 translate-y-4"
            )}
          >
            Our Services
          </div>
          <h1
            className={cn(
              "text-4xl md:text-5xl font-display font-semibold tracking-tight mb-6",
              "transition-all duration-700 delay-100 ease-out",
              heroInView
                ? "opacity-100 transform-none"
                : "opacity-0 translate-y-4"
            )}
          >
            Comprehensive <span className="text-sbuild">SaaS Solutions</span>{" "}
            for Your Business
          </h1>
          <p
            className={cn(
              "text-lg md:text-xl text-muted-foreground",
              "transition-all duration-700 delay-200 ease-out",
              heroInView
                ? "opacity-100 transform-none"
                : "opacity-0 translate-y-4"
            )}
          >
            We offer a full range of services to help businesses develop,
            deploy, and optimize SaaS solutions that drive growth and
            efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
