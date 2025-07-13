import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import CallToAction from "@/components/CallToAction";

// Individual case study card component to fix the hooks issue
const CaseStudyCard = ({
  project,
  index,
}: {
  project: {
    id: string;
    title: string;
    client: string;
    category: string;
    year: string;
    status: string;
    image_url: string;
    description: string;
    results: string[];
  };
  index: number;
}) => {
  const [itemRef, itemInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={itemRef}
      className={cn(
        "bg-white shadow-sm border border-gray-100 rounded-xl overflow-hidden transition-all duration-500",
        itemInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        `delay-${index * 100}`
      )}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image_url}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
          {project.category}
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
          {project.year}
        </div>
        <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
          {project.status === "completed"
            ? "Completed"
            : project.status === "in-progress"
            ? "In Progress"
            : "Future Project"}
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-display font-semibold mb-2">
          {project.title}
        </h2>
        <p className="text-sbuild mb-4">Client: {project.client}</p>
        <p className="text-muted-foreground mb-6">{project.description}</p>

        <h4 className="font-medium text-sm uppercase tracking-wider mb-3">
          Key Results
        </h4>
        <ul className="space-y-2 mb-6">
          {project.results.slice(0, 3).map((result: string, index: number) => (
            <li key={index} className="flex items-start text-sm">
              <span className="text-sbuild mr-2">•</span>
              {result}
            </li>
          ))}
          {project.results.length > 3 && (
            <li className="text-sm text-sbuild">
              + {project.results.length - 3} more results
            </li>
          )}
        </ul>

        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">{project.year}</span>
          <Link
            to={`/work?project=${project.id}`}
            className="inline-flex items-center text-sbuild hover:underline"
          >
            View Details <ExternalLink className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Use the same project data as Work.tsx for consistency
  const allProjects = [
    {
      id: "comp-1",
      title: "SGS Alumni System",
      client: "University of Ghana - School of Graduate Studies",
      category: "Education",
      year: "2025",
      status: "completed",
      image_url: "/sgs-image.jpg",
      description:
        "A comprehensive alumni management system for the School of Graduate Studies that fosters connections, shares updates, and provides resources for continued professional and academic growth.",
      results: [
        "Streamlined bulk enrolment of graduating postgraduate alumni",
        "Implemented event broadcasting and job advertisement features",
        "Enhanced alumni network engagement through donations and birthday wishes",
        "Improved find friend functionality for better alumni connections",
      ],
    },
    {
      id: "comp-2",
      title: "Risk Management System",
      client: "University of Ghana - Risk Management Office",
      category: "Risk Management",
      year: "2023",
      status: "completed",
      image_url: "/risk-mgmt-image.jpg",
      description:
        "A comprehensive risk management system for the University of Ghana that identifies, assesses, and manages risks to protect the institution's operations and goals.",
      results: [
        "Enhanced risk identification and assessment capabilities",
        "Improved collaboration with departments for policy creation",
        "Strengthened risk-aware culture across the institution",
        "Streamlined regular risk assessment procedures",
      ],
    },
    {
      id: "comp-3",
      title: "SGS Accreditation Portal",
      client: "University of Ghana - School of Graduate Studies",
      category: "Education",
      year: "2025",
      status: "completed",
      image_url: "/sgs-accreditation.jpg",
      description:
        "A web application that simplifies accreditation and re-accreditation processes for postgraduate programmes by automating workflows and enabling real-time compliance tracking.",
      results: [
        "Automated accreditation workflow from departments to GTEC",
        "Streamlined documentation organization and submission",
        "Enhanced real-time compliance tracking capabilities",
        "Reduced administrative complexities and processing time",
      ],
    },
    {
      id: "prog-4",
      title: "LuggageBS",
      client: "Student Storage Solutions",
      category: "Mobile App",
      year: "2025",
      status: "in-progress",
      image_url: "/luggage-bs.jpg",
      description:
        "A mobile app designed to revolutionize the way students manage their belongings during vacation breaks by providing seamless storage booking, item tracking, and hassle-free payments.",
      results: [
        "Developing storage slot booking system",
        "Implementing item tracking and management",
        "Integrating secure payment processing",
        "Expected completion: Q2 2024",
      ],
    },
    {
      id: "prog-5",
      title: "ThesisFlow",
      client: "University of Ghana - School of Graduate Studies",
      category: "Education",
      year: "2025",
      status: "in-progress",
      image_url: "/thesis-flow.jpg",
      description:
        "A secure, web-based system designed to streamline the submission and tracking of postgraduate thesis and dissertations for the University of Ghana.",
      results: [
        "Developing online thesis submission platform",
        "Implementing real-time progress tracking",
        "Creating supervisor and department monitoring tools",
        "Expected completion: Q3 2024",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 md:pt-32">
        {/* Header */}
        <section ref={ref} className="py-12 md:py-20 bg-gray-50">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
              <h1
                className={cn(
                  "text-4xl md:text-5xl font-display font-semibold tracking-tight mb-6",
                  "transition-all duration-700 ease-out",
                  inView
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-4"
                )}
              >
                Case Studies
              </h1>
              <p
                className={cn(
                  "text-lg text-muted-foreground",
                  "transition-all duration-700 delay-100 ease-out",
                  inView
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-4"
                )}
              >
                Explore our client success stories and learn how our solutions
                transformed their businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {allProjects.map((project, index) => (
                <CaseStudyCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
