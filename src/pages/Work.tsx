/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ExternalLink,
  Globe,
  Users,
  Zap,
  BarChart,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import { useSearchParams } from "react-router-dom";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "@/components/ui/drawer";
import Stats from "@/components/Stats";

// Project details drawer component
const ProjectDetails = ({
  projectId,
  onClose,
  projectData,
}: {
  projectId: string | null;
  onClose: () => void;
  projectData: any;
}) => {
  // Find the project from our data
  const allProjects = [
    ...projectData.completed,
    ...projectData["in-progress"],
    ...projectData.future,
  ];
  const project = allProjects.find((p: any) => p.id === projectId);

  if (!projectId || !project) return null;

  return (
    <DrawerContent className="h-[85vh] overflow-y-auto">
      <DrawerHeader>
        <DrawerTitle className="text-2xl font-display font-semibold">
          {project.title}
        </DrawerTitle>
        <DrawerDescription>Client: {project.client}</DrawerDescription>
      </DrawerHeader>

      <div className="p-6">
        <div className="relative h-64 overflow-hidden rounded-lg mb-6">
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium">
            {project.category}
          </div>
          <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium">
            {project.year}
          </div>
          <div
            className={cn(
              "px-3 py-1 rounded-full text-xs font-medium",
              project.status === "completed"
                ? "bg-green-100 text-green-800"
                : project.status === "in-progress"
                ? "bg-blue-100 text-blue-800"
                : "bg-yellow-100 text-yellow-800"
            )}
          >
            {project.status === "completed"
              ? "Completed"
              : project.status === "in-progress"
              ? "In Progress"
              : "Future Project"}
          </div>
        </div>

        <p className="text-muted-foreground mb-6">{project.description}</p>

        <h3 className="font-semibold text-lg mb-4">Key Results</h3>
        <ul className="space-y-2 mb-8">
          {project.results.map((result: string, index: number) => (
            <li key={index} className="flex items-start">
              <span className="text-sbuild mr-2 font-bold">•</span>
              {result}
            </li>
          ))}
        </ul>
      </div>

      <DrawerFooter>
        <Button onClick={onClose}>Close</Button>
      </DrawerFooter>
    </DrawerContent>
  );
};

// Project Status Tabs component
const ProjectStatusTabs = ({
  activeTab,
  onTabChange,
}: {
  activeTab: string;
  onTabChange: (tab: string) => void;
}) => {
  const tabs = [
    { id: "completed", label: "Completed Projects", count: 3 },
    { id: "in-progress", label: "In Progress", count: 2 },
    { id: "future", label: "Future Projects", count: 6 },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2",
            activeTab === tab.id
              ? "bg-sbuild text-white shadow-md"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          )}
        >
          {tab.label}
          <span
            className={cn(
              "px-2 py-0.5 rounded-full text-xs",
              activeTab === tab.id
                ? "bg-white/20 text-white"
                : "bg-gray-200 text-gray-600"
            )}
          >
            {tab.count}
          </span>
        </button>
      ))}
    </div>
  );
};

// Individual project card component to fix the hooks issue
const ProjectCard = ({
  project,
  onProjectClick,
  index,
}: {
  project: any;
  onProjectClick: (id: string) => void;
  index: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      key={project.id}
      ref={ref}
      className={cn(
        "group overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100 transition-all hover:-translate-y-1 hover:shadow-md",
        "transition-all duration-500 transform",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
        <div
          className={cn(
            "absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-medium",
            project.status === "completed"
              ? "bg-green-500 text-white"
              : project.status === "in-progress"
              ? "bg-blue-500 text-white"
              : "bg-yellow-500 text-white"
          )}
        >
          {project.status === "completed"
            ? "Completed"
            : project.status === "in-progress"
            ? "In Progress"
            : "Future Project"}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-display font-semibold mb-1">
          {project.title}
        </h3>
        <p className="text-sbuild text-sm mb-3">Client: {project.client}</p>
        <p className="text-muted-foreground mb-4">{project.description}</p>

        <h4 className="font-medium text-sm uppercase tracking-wider mb-3">
          Key Results
        </h4>
        <ul className="space-y-2 mb-6">
          {project.results.slice(0, 2).map((result: string, index: number) => (
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

        <button
          onClick={() => onProjectClick(project.id)}
          className="inline-flex items-center text-sbuild hover:underline"
        >
          View Case Study <ExternalLink className="ml-1 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

// Projects grid component - fixed to avoid calling hooks in a loop
const ProjectsGrid = ({
  projects,
  onProjectClick,
}: {
  projects: any[];
  onProjectClick: (id: string) => void;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          onProjectClick={onProjectClick}
          index={index}
        />
      ))}
    </div>
  );
};

const Work = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const projectId = searchParams.get("project");
  const [activeTab, setActiveTab] = useState("completed");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Project data organized by status
  const projectData = {
    completed: [
      {
        id: "comp-1",
        title: "SGS Alumni System",
        client: "University of Ghana - School of Graduate Studies",
        category: "Education",
        year: "2025",
        status: "completed",
        image_url: "/sgs-image.png",
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
    ],
    "in-progress": [
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
    ],
    future: [
      {
        id: "future-1",
        title: "AI-Powered Chatbot for Customer Support",
        client: "Ghana Telecom Services",
        category: "AI/ML",
        year: "2025",
        status: "future",
        image_url:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
        description:
          "A multilingual chatbot system that provides customer support in English and local Ghanaian languages for telecom services.",
        results: [
          "Planning natural language processing integration",
          "Designing multilingual response system",
          "Developing local language support",
          "Expected start: Q2 2025",
        ],
      },
      {
        id: "future-2",
        title: "AI Image Recognition for Agriculture",
        client: "AgriTech Ghana",
        category: "AI/ML",
        year: "2026",
        status: "future",
        image_url:
          "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80",
        description:
          "An AI system that analyzes crop images to detect diseases, pests, and provide farming recommendations for local farmers.",
        results: [
          "Planning image recognition algorithms",
          "Designing mobile app interface",
          "Developing crop database",
          "Expected start: Q3 2025",
        ],
      },
      {
        id: "future-3",
        title: "AI-Powered Text Analysis for Local News",
        client: "Ghana News Network",
        category: "AI/ML",
        year: "2026",
        status: "future",
        image_url:
          "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop&q=80",
        description:
          "A text analysis system that summarizes local news articles and provides sentiment analysis for media organizations.",
        results: [
          "Planning text processing algorithms",
          "Designing summarization features",
          "Developing sentiment analysis tools",
          "Expected start: Q4 2025",
        ],
      },
      {
        id: "future-4",
        title: "AI Voice Assistant for Local Businesses",
        client: "Ghana Business Hub",
        category: "AI/ML",
        year: "2026",
        status: "future",
        image_url:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
        description:
          "A voice assistant system that helps local businesses with inventory management, customer queries, and basic operations.",
        results: [
          "Planning speech recognition integration",
          "Designing voice command system",
          "Developing business logic modules",
          "Expected start: Q1 2026",
        ],
      },
      {
        id: "future-5",
        title: "AI-Powered Fraud Detection for Mobile Money",
        client: "Ghana Mobile Money",
        category: "AI/ML",
        year: "2026",
        status: "future",
        image_url:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=80",
        description:
          "A machine learning system that detects fraudulent transactions in mobile money platforms to enhance security.",
        results: [
          "Planning fraud detection algorithms",
          "Designing real-time monitoring system",
          "Developing security protocols",
          "Expected start: Q2 2026",
        ],
      },
      {
        id: "future-6",
        title: "AI Recommendation System for E-commerce",
        client: "Ghana Online Market",
        category: "AI/ML",
        year: "2025",
        status: "future",
        image_url:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80",
        description:
          "A recommendation engine that suggests products to customers based on their browsing and purchase history.",
        results: [
          "Planning recommendation algorithms",
          "Designing user preference tracking",
          "Developing product matching system",
          "Expected start: Q3 2026",
        ],
      },
    ],
  };

  const currentProjects =
    projectData[activeTab as keyof typeof projectData] || [];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleProjectClick = (id: string) => {
    searchParams.set("project", id);
    setSearchParams(searchParams);
  };

  const handleCloseProject = () => {
    searchParams.delete("project");
    setSearchParams(searchParams);
  };

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="py-12 md:py-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-radial-teal -z-10" />
          <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10" />

          <div className="container px-4 mx-auto max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
              <div
                className={cn(
                  "inline-flex items-center py-1 px-3 mb-6 text-xs font-medium rounded-full",
                  "border border-sbuild/10 bg-sbuild/5 text-sbuild",
                  "transition-all duration-700 ease-out",
                  heroInView
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-4"
                )}
              >
                Our Portfolio
              </div>
              <h1
                className={cn(
                  "text-4xl md:text-5xl font-display font-semibold tracking-tight mb-6",
                  "transition-all duration-700 delay-100 ease-out",
                  heroInView
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-4"
                )}
              >
                Our <span className="text-sbuild">Work</span> in Action
              </h1>
              <p
                className={cn(
                  "text-lg md:text-xl text-muted-foreground",
                  "transition-all duration-700 delay-200 ease-out",
                  heroInView
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-4"
                )}
              >
                Explore our featured SaaS projects that have helped businesses
                transform their operations and achieve significant growth.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16">
          <div className="container px-4 mx-auto max-w-7xl">
            {/* Status Tabs */}
            <ProjectStatusTabs
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />

            {/* Projects Grid */}
            <ProjectsGrid
              projects={currentProjects}
              onProjectClick={handleProjectClick}
            />

            {/* Empty State */}
            {currentProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  No projects found in this category.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setActiveTab("completed")}
                >
                  View Completed Projects
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <Stats />

        {/* Project Details Drawer */}
        <Drawer
          open={!!projectId}
          onOpenChange={(open) => !open && handleCloseProject()}
        >
          <ProjectDetails
            projectId={projectId}
            onClose={handleCloseProject}
            projectData={projectData}
          />
        </Drawer>
        {/* Call to Action */}
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Work;
