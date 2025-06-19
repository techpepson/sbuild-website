import React from "react";
import { Code, Cloud, Globe, Palette, LifeBuoy, Zap } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { ServiceType } from "./types";

const ServicesList = () => {
  const services: ServiceType[] = [
    {
      id: "saas",
      icon: <Code className="h-12 w-12" />,
      title: "Data Analytics",
      description:
        "Data analytics is a multifaceted discipline that plays a crucial role in various industries by turning raw data into actionable insights, enabling data-driven decision-making, and fostering innovation and efficiency.",
      gradient: "gradient-teal",
      features: [
        "Advanced data visualization and reporting",
        "Predictive analytics and machine learning models",
        "Real-time data processing and analysis",
        "Business intelligence dashboard development",
        "Data warehousing and ETL pipeline implementation",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "cloud",
      icon: <Cloud className="h-12 w-12" />,
      title: "Consultancy",
      description:
        "consultancy for software projects provides valuable guidance and support throughout the software development lifecycle. By leveraging the expertise of consultants, organizations can enhance the quality, efficiency, and success of their software projects, ultimately achieving their business goals more effectively.",
      gradient: "gradient-purple",
      features: [
        "Technical architecture and system design consulting",
        "Software development methodology implementation",
        "Technology stack evaluation and selection",
        "Project management and agile transformation",
        "Quality assurance and testing strategy development",
      ],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "api",
      icon: <Globe className="h-12 w-12" />,
      title: "Business Planning & Development",
      description:
        "Business planning and management are integral to the success of any organization. By setting clear goals, developing effective strategies, organizing resources efficiently, and managing operations effectively, businesses can achieve their objectives and ensure long-term sustainability and growth.",
      gradient: "gradient-blue",
      features: [
        "Strategic business planning and roadmap development",
        "Market analysis and competitive positioning",
        "Business model optimization and innovation",
        "Growth strategy and expansion planning",
        "Performance metrics and KPI development",
      ],
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "design",
      icon: <Palette className="h-12 w-12" />,
      title: "UI/UX Design for SaaS",
      description:
        "UI/UX design is a holistic approach to designing products that are both visually appealing and functionally effective. By integrating the principles of UI and UX design, designers can create products that not only look good but also provide a seamless and satisfying user experience.",
      gradient: "gradient-orange",
      features: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Interactive UI design",
        "Responsive design implementation",
        "Usability testing and optimization",
      ],
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "support",
      icon: <LifeBuoy className="h-12 w-12" />,
      title: "Maintenance & Support",
      description:
        "Ongoing technical support and regular updates to keep your SaaS solution running optimally.",
      gradient: "from-pink-500 to-rose-500",
      features: [
        "Proactive monitoring and maintenance",
        "Bug fixes and security updates",
        "Performance optimization",
        "Technical support and troubleshooting",
        "Regular feature enhancements",
      ],
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "optimization",
      icon: <Zap className="h-12 w-12" />,
      title: "Performance Optimization",
      description:
        "Enhance speed, reliability and efficiency of your existing SaaS applications.",
      gradient: "from-amber-500 to-orange-500",
      features: [
        "Application performance audit",
        "Database optimization",
        "Frontend performance enhancement",
        "Caching strategy implementation",
        "Load balancing and scalability improvements",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="py-16">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="space-y-32">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
