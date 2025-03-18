
import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Network, Users, Key, Upload, Download, Shield } from 'lucide-react';

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={cn(
        "neo-card p-8 rounded-xl transition-all duration-700 transform",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        `delay-${delay}`
      )}
    >
      <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Network className="h-6 w-6 text-accent" />,
      title: "Distributed Network",
      description: "Built on a robust peer-to-peer network that ensures reliability and resistance to censorship and downtime."
    },
    {
      icon: <Shield className="h-6 w-6 text-accent" />,
      title: "Enhanced Security",
      description: "End-to-end encryption and cryptographic protocols protect your data and communications from unauthorized access."
    },
    {
      icon: <Users className="h-6 w-6 text-accent" />,
      title: "Community Governance",
      description: "Platform decisions are made collectively by users, fostering transparency and democratic participation."
    },
    {
      icon: <Key className="h-6 w-6 text-accent" />,
      title: "Self-Sovereign Identity",
      description: "Control your digital identity without relying on centralized authorities or exposing personal information."
    },
    {
      icon: <Upload className="h-6 w-6 text-accent" />,
      title: "Seamless Integration",
      description: "Easily connect with existing tools and platforms through our comprehensive API and developer resources."
    },
    {
      icon: <Download className="h-6 w-6 text-accent" />,
      title: "Data Portability",
      description: "Export your data at any time in standard formats, ensuring you're never locked into the platform."
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent -z-10" />
      <div className="absolute -right-48 top-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl -z-10" />
      <div className="absolute -left-48 bottom-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl -z-10" />

      <div className="container px-6 md:px-10 mx-auto max-w-7xl">
        <div 
          ref={sectionRef}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div 
            className={cn(
              "inline-flex items-center py-1 px-3 mb-4 text-xs font-medium rounded-full",
              "border border-accent/10 bg-accent/5 text-accent",
              "transition-all duration-700 ease-out",
              sectionInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
            )}
          >
            Core Capabilities
          </div>
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-display font-medium mb-6 tracking-tight",
              "transition-all duration-700 delay-100 ease-out",
              sectionInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
            )}
          >
            Designed for the Future of Digital Interaction
          </h2>
          <p 
            className={cn(
              "text-lg text-muted-foreground",
              "transition-all duration-700 delay-200 ease-out",
              sectionInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
            )}
          >
            Our platform reimagines what's possible with decentralized technology, 
            putting control back in your hands while maintaining elegant simplicity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={(index % 3) * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
