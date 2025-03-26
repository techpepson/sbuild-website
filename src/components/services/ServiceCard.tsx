
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ServiceType } from './types';

interface ServiceCardProps {
  service: ServiceType;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
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
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <div className={cn(
            "absolute inset-0 opacity-50",
            "bg-gradient-to-br",
            service.gradient
          )}></div>
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-auto relative z-10 mix-blend-overlay"
          />
        </div>
        <div className={cn(
          "absolute -z-10 rounded-full w-64 h-64 blur-3xl opacity-20",
          index % 2 === 0 ? "-bottom-10 -left-10" : "-bottom-10 -right-10",
          "bg-gradient-to-br",
          service.gradient
        )}></div>
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
        <div className={cn(
          "inline-flex h-16 w-16 items-center justify-center rounded-xl mb-6",
          "bg-gradient-to-br text-white",
          service.gradient
        )}>
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
        
        <Button className="bg-sbuild hover:bg-sbuild/90">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
