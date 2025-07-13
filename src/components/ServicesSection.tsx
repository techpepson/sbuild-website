import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  Cloud,
  Globe,
  Palette,
  LifeBuoy,
  Zap,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom SaaS Development",
      description:
        "Tailor-made SaaS applications designed to meet your specific business requirements and goals.",
      gradient: "gradient-teal",
      id: "saas",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Integration & Migration",
      description:
        "Seamlessly transition your existing systems to the cloud, enhancing scalability and reducing costs.",
      gradient: "gradient-purple",
      id: "cloud",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "API Development & Integration",
      description:
        "Create robust APIs that connect your systems and enable seamless data exchange between platforms.",
      gradient: "gradient-blue",
      id: "api",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design for SaaS",
      description:
        "User-centered design that ensures your SaaS product is intuitive, engaging, and accessible.",
      gradient: "gradient-orange",
      id: "design",
    },
    {
      icon: <LifeBuoy className="h-8 w-8" />,
      title: "Maintenance & Support",
      description:
        "Ongoing technical support and regular updates to keep your SaaS solution running optimally.",
      gradient: "from-pink-500 to-rose-500",
      id: "support",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description:
        "Enhance speed, reliability and efficiency of your existing SaaS applications.",
      gradient: "from-amber-500 to-orange-500",
      id: "optimization",
    },
  ];

  return (
    <section ref={ref} id="services" className="py-20">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer a comprehensive suite of services designed to help
            businesses develop, deploy, and optimize SaaS solutions that drive
            growth and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              id={service.id}
              key={index}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md",
                "transition-all duration-500 transform",
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8",
                `delay-${(index % 3) * 100}`
              )}
            >
              <div
                className={cn(
                  "absolute top-0 right-0 -mt-4 -mr-4 h-20 w-20 rounded-full bg-gradient-to-br opacity-20 blur-xl transition-all duration-300 group-hover:opacity-40",
                  service.gradient
                )}
              ></div>

              <div
                className={cn(
                  "mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg",
                  "bg-gradient-to-br text-white",
                  service.gradient
                )}
              >
                {service.icon}
              </div>

              <h3 className="mb-3 text-xl font-display font-semibold">
                {service.title}
              </h3>
              <p className="mb-6 text-muted-foreground">
                {service.description}
              </p>

              <Link
                to={`/services#${service.id}`}
                className="inline-flex items-center text-sbuild hover:underline"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button className="bg-sbuild hover:bg-sbuild/90">
              Explore All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
