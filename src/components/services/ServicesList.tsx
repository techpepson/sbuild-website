import React from "react";
import {
  Code,
  Cloud,
  Globe,
  Palette,
  LifeBuoy,
  Zap,
  Smartphone,
} from "lucide-react";
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
      detailedContent: {
        overview:
          "Our comprehensive data analytics services transform raw data into actionable insights that drive business growth and operational efficiency. We leverage cutting-edge tools and methodologies to help organizations make data-driven decisions.",
        benefits: [
          "Improved decision-making through data-driven insights",
          "Enhanced operational efficiency and cost reduction",
          "Better understanding of customer behavior and preferences",
          "Identification of new business opportunities and trends",
          "Increased competitive advantage through predictive analytics",
        ],
        process: [
          "Data assessment and requirement gathering",
          "Data collection and integration from multiple sources",
          "Data cleaning, transformation, and modeling",
          "Analysis and visualization development",
          "Insight delivery and ongoing optimization",
        ],
        tools: [
          "Python",
          "R",
          "SQL",
          "Tableau",
          "Power BI",
          "Apache Spark",
          "Hadoop",
          "Machine Learning",
          "Statistical Analysis",
        ],
        caseStudies: [
          "Increased e-commerce conversion rates by 35% through customer behavior analysis",
          "Reduced operational costs by 25% through process optimization analytics",
          "Improved inventory management efficiency by 40% using predictive analytics",
        ],
      },
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
      detailedContent: {
        overview:
          "Our expert consultancy services provide strategic guidance and technical expertise to help organizations navigate complex software development challenges. We work closely with your team to ensure successful project delivery and long-term success.",
        benefits: [
          "Access to specialized expertise and industry best practices",
          "Reduced project risks and improved success rates",
          "Faster time-to-market through optimized processes",
          "Cost savings through efficient resource allocation",
          "Knowledge transfer and team skill development",
        ],
        process: [
          "Initial assessment and requirement analysis",
          "Strategy development and roadmap creation",
          "Implementation planning and resource allocation",
          "Ongoing guidance and support throughout development",
          "Performance evaluation and continuous improvement",
        ],
        tools: [
          "Agile/Scrum",
          "DevOps",
          "CI/CD",
          "Cloud Architecture",
          "Microservices",
          "API Design",
          "Security Best Practices",
          "Performance Optimization",
        ],
        caseStudies: [
          "Reduced development time by 40% through agile transformation",
          "Improved system reliability by 99.9% through DevOps implementation",
          "Cut infrastructure costs by 30% through cloud migration strategy",
        ],
      },
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
      detailedContent: {
        overview:
          "Our business planning and development services help organizations create sustainable growth strategies, optimize operations, and achieve their long-term objectives. We provide comprehensive guidance from initial planning to successful execution.",
        benefits: [
          "Clear strategic direction and goal alignment",
          "Improved market positioning and competitive advantage",
          "Optimized resource allocation and cost management",
          "Enhanced operational efficiency and productivity",
          "Sustainable growth and scalability planning",
        ],
        process: [
          "Business assessment and market analysis",
          "Strategic planning and goal setting",
          "Business model optimization and innovation",
          "Implementation roadmap development",
          "Performance monitoring and strategy refinement",
        ],
        tools: [
          "SWOT Analysis",
          "Business Model Canvas",
          "Lean Startup",
          "Growth Hacking",
          "Market Research",
          "Financial Modeling",
          "KPI Development",
          "Process Optimization",
        ],
        caseStudies: [
          "Increased revenue by 150% through strategic business model redesign",
          "Expanded market reach by 200% through growth strategy implementation",
          "Reduced operational costs by 35% through process optimization",
        ],
      },
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
      detailedContent: {
        overview:
          "Our UI/UX design services create intuitive, engaging, and user-centered digital experiences that drive user satisfaction and business success. We combine creativity with data-driven insights to design interfaces that users love to interact with.",
        benefits: [
          "Enhanced user satisfaction and engagement",
          "Improved conversion rates and user retention",
          "Reduced user training and support costs",
          "Increased accessibility and usability",
          "Competitive advantage through superior user experience",
        ],
        process: [
          "User research and persona development",
          "Information architecture and wireframing",
          "Visual design and prototyping",
          "User testing and iteration",
          "Design system development and handoff",
        ],
        tools: [
          "Figma",
          "Adobe XD",
          "Sketch",
          "InVision",
          "Framer",
          "User Research",
          "Prototyping",
          "Design Systems",
          "Accessibility",
        ],
        caseStudies: [
          "Increased user engagement by 60% through improved UX design",
          "Reduced bounce rate by 45% through intuitive interface redesign",
          "Improved conversion rates by 80% through user-centered design approach",
        ],
      },
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
      detailedContent: {
        overview:
          "Our comprehensive maintenance and support services ensure your SaaS applications run smoothly, securely, and efficiently. We provide proactive monitoring, regular updates, and responsive support to minimize downtime and maximize performance.",
        benefits: [
          "Reduced downtime and improved system reliability",
          "Enhanced security through regular updates and patches",
          "Improved performance and user experience",
          "Cost-effective maintenance and support",
          "Peace of mind with 24/7 monitoring and support",
        ],
        process: [
          "System health assessment and monitoring setup",
          "Regular maintenance schedule and updates",
          "Proactive issue detection and resolution",
          "Performance optimization and tuning",
          "Ongoing support and consultation",
        ],
        tools: [
          "Monitoring Tools",
          "Automated Testing",
          "CI/CD",
          "Security Scanning",
          "Performance Monitoring",
          "Backup Systems",
          "Disaster Recovery",
          "Cloud Management",
        ],
        caseStudies: [
          "Achieved 99.9% uptime through proactive monitoring and maintenance",
          "Reduced support tickets by 70% through automated issue resolution",
          "Improved system performance by 50% through optimization efforts",
        ],
      },
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
      detailedContent: {
        overview:
          "Our performance optimization services identify and resolve bottlenecks in your SaaS applications to deliver faster, more reliable, and scalable solutions. We use advanced profiling and monitoring tools to ensure optimal performance.",
        benefits: [
          "Faster application response times and improved user experience",
          "Reduced server costs through efficient resource utilization",
          "Enhanced scalability to handle increased user loads",
          "Improved search engine rankings and user retention",
          "Better competitive advantage through superior performance",
        ],
        process: [
          "Performance audit and bottleneck identification",
          "Code optimization and database tuning",
          "Frontend performance enhancement",
          "Caching strategy implementation",
          "Load testing and continuous monitoring",
        ],
        tools: [
          "Performance Profiling",
          "Database Optimization",
          "CDN",
          "Caching",
          "Load Balancing",
          "Microservices",
          "Cloud Optimization",
          "Monitoring Tools",
        ],
        caseStudies: [
          "Reduced page load times by 70% through frontend optimization",
          "Improved database query performance by 300% through optimization",
          "Handled 10x more concurrent users through scalability improvements",
        ],
      },
    },
    {
      id: "mobile",
      icon: <Smartphone className="h-12 w-12" />,
      title: "Mobile App Development",
      description:
        "Create powerful, user-friendly mobile applications for iOS and Android platforms that deliver exceptional user experiences and drive business growth.",
      gradient: "from-emerald-500 to-teal-500",
      features: [
        "Native iOS and Android app development",
        "Cross-platform development with React Native",
        "Mobile app UI/UX design and prototyping",
        "App store optimization and deployment",
        "Mobile app maintenance and updates",
      ],
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
      detailedContent: {
        overview:
          "Our mobile app development services create powerful, user-friendly applications for iOS and Android platforms. We deliver exceptional user experiences that drive engagement and business growth through native and cross-platform development approaches.",
        benefits: [
          "Enhanced user engagement and retention through mobile-first design",
          "Increased accessibility and convenience for users",
          "Better brand presence and customer reach",
          "Improved customer satisfaction and loyalty",
          "New revenue streams through mobile commerce",
        ],
        process: [
          "Requirements gathering and platform selection",
          "UI/UX design and prototyping",
          "Development and testing phases",
          "App store submission and optimization",
          "Post-launch support and updates",
        ],
        tools: [
          "React Native",
          "Flutter",
          "Swift",
          "Kotlin",
          "Firebase",
          "AWS",
          "App Store Connect",
          "Google Play Console",
          "Mobile Testing",
        ],
        caseStudies: [
          "Increased user engagement by 200% through mobile app launch",
          "Reduced customer support calls by 60% through mobile self-service features",
          "Generated 40% of total revenue through mobile commerce integration",
        ],
      },
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
