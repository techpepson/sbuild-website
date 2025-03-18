
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Cloud, Globe, Palette, LifeBuoy, Zap, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';

const Services = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Handle hash navigation for smooth scrolling
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Handle hash on initial load
    handleHashChange();

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Clean up
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
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
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
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
                  heroInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
                )}
              >
                Our Services
              </div>
              <h1 
                className={cn(
                  "text-4xl md:text-5xl font-display font-semibold tracking-tight mb-6",
                  "transition-all duration-700 delay-100 ease-out",
                  heroInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
                )}
              >
                Comprehensive <span className="text-sbuild">SaaS Solutions</span> for Your Business
              </h1>
              <p 
                className={cn(
                  "text-lg md:text-xl text-muted-foreground",
                  "transition-all duration-700 delay-200 ease-out",
                  heroInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
                )}
              >
                We offer a full range of services to help businesses develop, deploy, and optimize 
                SaaS solutions that drive growth and efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="py-16">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="space-y-32">
              {services.map((service, index) => {
                const [ref, inView] = useInView({
                  triggerOnce: true,
                  threshold: 0.1,
                });
                
                return (
                  <div 
                    id={service.id}
                    key={index}
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
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
