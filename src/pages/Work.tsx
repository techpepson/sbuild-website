import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Globe, Users, Zap, BarChart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { useProjects, useProject } from '@/hooks/use-projects';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Drawer, 
  DrawerContent, 
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter
} from '@/components/ui/drawer';

// Project details drawer component
const ProjectDetails = ({ projectId, onClose }: { projectId: string | null, onClose: () => void }) => {
  const { data: project, isLoading, error } = useProject(projectId || '');
  
  if (!projectId) return null;
  
  return (
    <DrawerContent className="h-[85vh] overflow-y-auto">
      <DrawerHeader>
        <DrawerTitle className="text-2xl font-display font-semibold">
          {isLoading ? 'Loading project...' : project?.title}
        </DrawerTitle>
        <DrawerDescription>
          {isLoading ? 'Please wait...' : `Client: ${project?.client}`}
        </DrawerDescription>
      </DrawerHeader>
      
      {isLoading ? (
        <div className="p-6 flex justify-center">
          <div className="animate-pulse space-y-4 w-full">
            <div className="h-56 bg-gray-200 rounded-lg"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      ) : error ? (
        <div className="p-6 text-center">
          <p className="text-red-500">Error loading project details. Please try again.</p>
        </div>
      ) : project ? (
        <div className="p-6">
          <div className="relative h-64 overflow-hidden rounded-lg mb-6">
            <div className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-60",
              project.gradient
            )}></div>
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
          </div>
          
          <p className="text-muted-foreground mb-6">{project.description}</p>
          
          <h3 className="font-semibold text-lg mb-4">Key Results</h3>
          <ul className="space-y-2 mb-8">
            {project.results.map((result, index) => (
              <li key={index} className="flex items-start">
                <span className="text-sbuild mr-2 font-bold">•</span>
                {result}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="p-6 text-center">
          <p>Project not found.</p>
        </div>
      )}
      
      <DrawerFooter>
        <Button onClick={onClose}>Close</Button>
      </DrawerFooter>
    </DrawerContent>
  );
};

// Filter component
const ProjectFilters = ({ activeFilter, onFilterChange }: { 
  activeFilter: string, 
  onFilterChange: (filter: string) => void 
}) => {
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'management', label: 'Management' },
    { id: 'fintech', label: 'FinTech' },
    { id: 'ecommerce', label: 'E-Commerce' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={cn(
            "px-5 py-2 rounded-full text-sm font-medium transition-all",
            activeFilter === filter.id
              ? "bg-sbuild text-white shadow-md"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

// Individual project card component to fix the hooks issue
const ProjectCard = ({ project, onProjectClick, index }: { 
  project: any, 
  onProjectClick: (id: string) => void,
  index: number
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
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-60 group-hover:opacity-70 transition-opacity",
          project.gradient
        )}></div>
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
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-display font-semibold mb-1">{project.title}</h3>
        <p className="text-sbuild text-sm mb-3">Client: {project.client}</p>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        
        <h4 className="font-medium text-sm uppercase tracking-wider mb-3">Key Results</h4>
        <ul className="space-y-2 mb-6">
          {project.results.slice(0, 2).map((result: string, index: number) => (
            <li key={index} className="flex items-start text-sm">
              <span className="text-sbuild mr-2">•</span>
              {result}
            </li>
          ))}
          {project.results.length > 2 && (
            <li className="text-sm text-sbuild">+ {project.results.length - 2} more results</li>
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
const ProjectsGrid = ({ projects, onProjectClick }: { 
  projects: any[], 
  onProjectClick: (id: string) => void 
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
  const projectId = searchParams.get('project');
  const initialCategory = searchParams.get('category') || 'all';
  const [activeFilter, setActiveFilter] = useState(initialCategory);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log(`Setting active filter: ${activeFilter}`);
    if (activeFilter === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', activeFilter);
    }
    setSearchParams(searchParams);
  }, [activeFilter, searchParams, setSearchParams]);

  const { data: projects = [], isLoading, error } = useProjects(activeFilter === 'all' ? undefined : activeFilter);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleFilterClick = (filterId: string) => {
    console.log(`Changing filter to: ${filterId}`);
    setActiveFilter(filterId);
  };
  
  const handleProjectClick = (id: string) => {
    searchParams.set('project', id);
    setSearchParams(searchParams);
  };
  
  const handleCloseProject = () => {
    searchParams.delete('project');
    setSearchParams(searchParams);
  };

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
                Our Portfolio
              </div>
              <h1 
                className={cn(
                  "text-4xl md:text-5xl font-display font-semibold tracking-tight mb-6",
                  "transition-all duration-700 delay-100 ease-out",
                  heroInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
                )}
              >
                Our <span className="text-sbuild">Work</span> in Action
              </h1>
              <p 
                className={cn(
                  "text-lg md:text-xl text-muted-foreground",
                  "transition-all duration-700 delay-200 ease-out",
                  heroInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
                )}
              >
                Explore our featured SaaS projects that have helped businesses transform their 
                operations and achieve significant growth.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16">
          <div className="container px-4 mx-auto max-w-7xl">
            {/* Filter Buttons */}
            <ProjectFilters activeFilter={activeFilter} onFilterChange={handleFilterClick} />
            
            {/* Loading State */}
            {isLoading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-56 bg-gray-200 rounded-t-xl mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Error State */}
            {error && (
              <div className="text-center py-12">
                <p className="text-red-500 mb-4">Failed to load projects. Please try again later.</p>
                <Button 
                  variant="outline" 
                  onClick={() => window.location.reload()}
                >
                  Retry
                </Button>
              </div>
            )}
            
            {/* Projects Grid */}
            {!isLoading && !error && (
              <ProjectsGrid projects={projects} onProjectClick={handleProjectClick} />
            )}
            
            {/* Empty State */}
            {!isLoading && !error && projects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No projects found in this category.</p>
                <Button 
                  variant="outline" 
                  onClick={() => setActiveFilter('all')}
                >
                  Show All Projects
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-4">
                Our Impact in Numbers
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We've helped businesses across various industries transform their operations
                and achieve remarkable growth through our SaaS solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl font-display font-bold mb-2">50+</h3>
                <p className="text-muted-foreground text-center">Successful Projects</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl font-display font-bold mb-2">20+</h3>
                <p className="text-muted-foreground text-center">Industry Partnerships</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl font-display font-bold mb-2">100K+</h3>
                <p className="text-muted-foreground text-center">Users Benefiting</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center mb-4">
                  <BarChart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl font-display font-bold mb-2">98%</h3>
                <p className="text-muted-foreground text-center">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details Drawer */}
        <Drawer open={!!projectId} onOpenChange={(open) => !open && handleCloseProject()}>
          <ProjectDetails projectId={projectId} onClose={handleCloseProject} />
        </Drawer>

        {/* Call to Action */}
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Work;

