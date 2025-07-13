import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Use the same completed projects data as Work.tsx
  const completedProjects = [
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
  ];

  const displayedProjects = completedProjects.slice(0, 3); // Show all 3 completed projects

  return (
    <section ref={ref} id="projects" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-4">
              Our Work in Action
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our featured SaaS projects that have helped businesses
              transform their operations and achieve significant growth.
            </p>
          </div>

          <Link to="/work">
            <Button className="bg-sbuild hover:bg-sbuild/90">
              View Full Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md",
                "transition-all duration-500 transform",
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8",
                `delay-${index * 100}`
              )}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                  {project.year}
                </div>
                <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Completed
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-sbuild text-sm mb-3">
                  Client: {project.client}
                </p>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <h4 className="font-medium text-sm uppercase tracking-wider mb-3">
                  Key Results
                </h4>
                <ul className="space-y-2 mb-6">
                  {project.results.slice(0, 2).map((result, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <span className="text-sbuild mr-2">•</span>
                      {result}
                    </li>
                  ))}
                  {project.results.length > 2 && (
                    <li className="text-sm text-sbuild">
                      + {project.results.length - 2} more results
                    </li>
                  )}
                </ul>

                <Link
                  to={`/work?project=${project.id}`}
                  className="inline-flex items-center text-sbuild hover:underline"
                >
                  View Case Study <ExternalLink className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
