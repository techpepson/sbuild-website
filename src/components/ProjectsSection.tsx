
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { useProjects } from '@/hooks/use-projects';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { data: projects = [], isLoading, error } = useProjects();
  const displayedProjects = projects.slice(0, 3); // Only show first 3 projects

  return (
    <section ref={ref} id="projects" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-4">
              Our Work in Action
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our featured SaaS projects that have helped businesses transform their operations and achieve significant growth.
            </p>
          </div>
          
          <Link to="/work">
            <Button className="bg-sbuild hover:bg-sbuild/90">
              View Full Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {isLoading && (
          <div className="flex justify-center py-12">
            <div className="animate-pulse space-y-8 w-full">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-64 bg-gray-200 rounded-xl"></div>
              ))}
            </div>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-500">Error loading projects. Please try again later.</p>
          </div>
        )}

        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <div
                key={project.id}
                className={cn(
                  "group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md",
                  "transition-all duration-500 transform",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                  `delay-${index * 100}`
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
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <Link to={`/work?project=${project.id}`} className="inline-flex items-center text-sbuild hover:underline">
                    View Case Study <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
