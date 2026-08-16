import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { ServiceType } from "./types";

interface ServiceCardProps {
  service: ServiceType;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      id={service.id}
      ref={ref}
      className={cn(
        "group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative",
        index % 2 === 1 ? "lg:grid-flow-dense" : ""
      )}
    >
      {/* Image Side */}
      <div
        className={cn(
          "relative transition-all duration-1000 transform ease-out",
          inView
            ? "opacity-100 translate-x-0"
            : index % 2 === 0
            ? "opacity-0 -translate-x-16"
            : "opacity-0 translate-x-16"
        )}
      >
        {/* Premium visual frame containing the image */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100/50 bg-white p-1.5 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:border-sbuild/20">
          <div className="rounded-xl overflow-hidden relative aspect-[16/10] w-full">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              draggable={false}
            />
            {/* Ambient overlay tint on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-sbuild/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
          </div>
        </div>
        
        {/* Background glowing radial blur */}
        <div
          className={cn(
            "absolute -z-10 rounded-full w-72 h-72 blur-3xl opacity-15 transition-all duration-700 group-hover:opacity-25",
            index % 2 === 0 ? "-bottom-12 -left-12" : "-bottom-12 -right-12",
            "bg-gradient-to-br",
            service.gradient
          )}
        ></div>
      </div>

      {/* Content Side */}
      <div
        className={cn(
          "transition-all duration-1000 transform ease-out",
          inView
            ? "opacity-100 translate-x-0"
            : index % 2 === 0
            ? "opacity-0 translate-x-16"
            : "opacity-0 -translate-x-16"
        )}
      >
        {/* Animated Gradient Icon */}
        <div
          className={cn(
            "inline-flex h-16 w-16 items-center justify-center rounded-2xl mb-6 shadow-md",
            "bg-gradient-to-br text-white transition-all duration-500",
            "group-hover:scale-110 group-hover:rotate-[6deg] group-hover:shadow-lg",
            service.gradient
          )}
        >
          {service.icon}
        </div>

        <h2 className="text-3xl font-display font-bold tracking-tight text-gray-900 mb-4 transition-colors duration-300 group-hover:text-sbuild">
          {service.title}
        </h2>
        
        <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Feature Checkmarks List */}
        <div className="space-y-3.5 mb-8">
          {service.features.map((feature, featureIndex) => (
            <div 
              key={featureIndex} 
              className="flex items-start transition-transform duration-300 hover:translate-x-1.5"
            >
              <CheckCircle2 className="h-5 w-5 text-sbuild mr-2.5 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-gray-700 text-sm md:text-base">{feature}</span>
            </div>
          ))}
        </div>

        <Button
          className="bg-sbuild hover:bg-sbuild/90 font-medium text-white transition-all duration-300 shadow-md hover:shadow-lg"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Show Less" : "Learn More"}
          {showDetails ? (
            <ChevronUp className="ml-2 h-4 w-4" />
          ) : (
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          )}
        </Button>
      </div>

      {/* Detailed Content (Animated sliding card) */}
      {showDetails && service.detailedContent && (
        <div className="lg:col-span-2 mt-4 animate-scale-in origin-top">
          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 shadow-inner transition-all duration-300">
            <h3 className="text-2xl font-display font-semibold mb-6 text-gray-950">
              Detailed Overview
            </h3>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              {service.detailedContent.overview}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Benefits */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md">
                <h4 className="text-lg font-bold mb-4 text-sbuild flex items-center gap-2 border-b border-gray-50 pb-2">
                  Key Benefits
                </h4>
                <ul className="space-y-3">
                  {service.detailedContent.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="h-4.5 w-4.5 text-sbuild mr-2.5 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-sm md:text-base">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md">
                <h4 className="text-lg font-bold mb-4 text-sbuild flex items-center gap-2 border-b border-gray-50 pb-2">
                  Our Process
                </h4>
                <ul className="space-y-3">
                  {service.detailedContent.process.map((step, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-sbuild text-white text-[10px] font-bold flex items-center justify-center mr-2.5 flex-shrink-0 mt-1 shadow-sm">
                        {idx + 1}
                      </div>
                      <span className="text-gray-700 text-sm md:text-base">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-8 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h4 className="text-lg font-bold mb-4 text-sbuild border-b border-gray-50 pb-2">
                Tools We Use
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.detailedContent.tools.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1 bg-gray-50 hover:bg-sbuild/5 border border-gray-200/80 hover:border-sbuild/20 rounded-full text-xs md:text-sm font-medium text-gray-700 hover:text-sbuild transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Case Studies */}
            {service.detailedContent.caseStudies && (
              <div className="mt-8 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h4 className="text-lg font-bold mb-4 text-sbuild border-b border-gray-50 pb-2">
                  Case Studies & Proof Points
                </h4>
                <ul className="space-y-3">
                  {service.detailedContent.caseStudies.map((study, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-sbuild mr-3 flex-shrink-0 mt-2.5" />
                      <span className="text-gray-700 text-sm md:text-base leading-relaxed">{study}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
