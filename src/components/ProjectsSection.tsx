
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "CloudSync Analytics",
      category: "Data Analytics SaaS",
      description: "A cloud-based analytics platform that provides real-time insights and visualizations for business intelligence.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
      gradient: "gradient-teal"
    },
    {
      title: "WorkFlow Pro",
      category: "Project Management",
      description: "An intuitive project management tool designed to streamline team collaboration and task management.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
      gradient: "gradient-purple"
    },
    {
      title: "SecurePay Gateway",
      category: "FinTech Solution",
      description: "A secure payment processing system with advanced fraud detection and multi-currency support.",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format&fit=crop&q=80",
      gradient: "gradient-blue"
    }
  ];

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
          
          <Button className="bg-sbuild hover:bg-sbuild/90">
            View Full Portfolio
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
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
                  src={project.image} 
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
                
                <a href="#" className="inline-flex items-center text-sbuild hover:underline">
                  View Case Study <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
