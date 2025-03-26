
import React from 'react';
import { Code, Cloud, Globe, Palette, LifeBuoy, Zap } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { ServiceType } from './types';

const ServicesList = () => {
  const services: ServiceType[] = [
    {
      id: "saas",
      icon: <Code className="h-12 w-12" />,
      title: "Custom SaaS Development",
      description: "Tailored SaaS applications designed to meet your specific business requirements and goals.",
      gradient: "gradient-teal",
      features: [
        "Custom application architecture and development",
        "Multi-tenant SaaS platform development",
        "Microservices architecture implementation",
        "Subscription and billing management integration",
        "White-label SaaS solutions"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: "cloud",
      icon: <Cloud className="h-12 w-12" />,
      title: "Cloud Integration & Migration",
      description: "Seamlessly transition your existing systems to the cloud, enhancing scalability and reducing costs.",
      gradient: "gradient-purple",
      features: [
        "Cloud infrastructure setup and configuration",
        "Migration of legacy systems to the cloud",
        "Serverless architecture implementation",
        "Multi-cloud strategy development",
        "Cloud cost optimization"
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: "api",
      icon: <Globe className="h-12 w-12" />,
      title: "API Development & Integration",
      description: "Create robust APIs that connect your systems and enable seamless data exchange between platforms.",
      gradient: "gradient-blue",
      features: [
        "RESTful API development",
        "GraphQL API implementation",
        "API gateway implementation",
        "Third-party API integration",
        "API documentation and management"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: "design",
      icon: <Palette className="h-12 w-12" />,
      title: "UI/UX Design for SaaS",
      description: "User-centered design that ensures your SaaS product is intuitive, engaging, and accessible.",
      gradient: "gradient-orange",
      features: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Interactive UI design",
        "Responsive design implementation",
        "Usability testing and optimization"
      ],
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: "support",
      icon: <LifeBuoy className="h-12 w-12" />,
      title: "Maintenance & Support",
      description: "Ongoing technical support and regular updates to keep your SaaS solution running optimally.",
      gradient: "from-pink-500 to-rose-500",
      features: [
        "Proactive monitoring and maintenance",
        "Bug fixes and security updates",
        "Performance optimization",
        "Technical support and troubleshooting",
        "Regular feature enhancements"
      ],
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: "optimization",
      icon: <Zap className="h-12 w-12" />,
      title: "Performance Optimization",
      description: "Enhance speed, reliability and efficiency of your existing SaaS applications.",
      gradient: "from-amber-500 to-orange-500",
      features: [
        "Application performance audit",
        "Database optimization",
        "Frontend performance enhancement",
        "Caching strategy implementation",
        "Load balancing and scalability improvements"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-16">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="space-y-32">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
