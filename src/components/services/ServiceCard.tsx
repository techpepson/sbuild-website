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
        "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
        index % 2 === 1 ? "lg:grid-flow-dense" : ""
      )}
    >
      {/* Image Side */}
      <div
        className={cn(
          "relative transition-all duration-700 transform",
          inView
            ? "opacity-100 translate-x-0"
            : index % 2 === 0
            ? "opacity-0 -translate-x-12"
            : "opacity-0 translate-x-12"
        )}
      >
        <div className={cn("relative rounded-xl overflow-hidden shadow-lg")}>
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-auto relative z-10"
          />
        </div>
        <div
          className={cn(
            "absolute -z-10 rounded-full w-64 h-64 blur-3xl opacity-20",
            index % 2 === 0 ? "-bottom-10 -left-10" : "-bottom-10 -right-10",
            "bg-gradient-to-br",
            service.gradient
          )}
        ></div>
      </div>

      {/* Content Side */}
      <div
        className={cn(
          "transition-all duration-700 transform",
          inView
            ? "opacity-100 translate-x-0"
            : index % 2 === 0
            ? "opacity-0 translate-x-12"
            : "opacity-0 -translate-x-12"
        )}
      >
        <div
          className={cn(
            "inline-flex h-16 w-16 items-center justify-center rounded-xl mb-6",
            "bg-gradient-to-br text-white",
            service.gradient
          )}
        >
          {service.icon}
        </div>

        <h2 className="text-3xl font-display font-semibold tracking-tight mb-4">
          {service.title}
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          {service.description}
        </p>

        <div className="space-y-3 mb-8">
          {service.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-sbuild mr-2 flex-shrink-0" />
              <p>{feature}</p>
            </div>
          ))}
        </div>

        <Button
          className="bg-sbuild hover:bg-sbuild/90"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Show Less" : "Learn More"}
          {showDetails ? (
            <ChevronUp className="ml-2 h-4 w-4" />
          ) : (
            <ArrowRight className="ml-2 h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Detailed Content */}
      {showDetails && service.detailedContent && (
        <div className="lg:col-span-2 mt-12">
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-display font-semibold mb-6">
              Detailed Overview
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              {service.detailedContent.overview}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Benefits */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-sbuild">
                  Key Benefits
                </h4>
                <ul className="space-y-2">
                  {service.detailedContent.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-sbuild mr-2 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-sbuild">
                  Our Process
                </h4>
                <ul className="space-y-2">
                  {service.detailedContent.process.map((step, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-sbuild text-white text-xs flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-sbuild">
                Tools We Use
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.detailedContent.tools.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Case Studies */}
            {service.detailedContent.caseStudies && (
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 text-sbuild">
                  Case Studies
                </h4>
                <ul className="space-y-2">
                  {service.detailedContent.caseStudies.map((study, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-sbuild mr-3 flex-shrink-0 mt-2" />
                      <span>{study}</span>
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
