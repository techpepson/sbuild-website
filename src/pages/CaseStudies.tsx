
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useProjects } from '@/hooks/use-projects';
import { Link } from 'react-router-dom';
import CallToAction from '@/components/CallToAction';

const CaseStudies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { data: projects = [], isLoading, error } = useProjects();

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
                  inView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
                )}
              >
                Case Studies
              </h1>
              <p 
                className={cn(
                  "text-lg text-muted-foreground",
                  "transition-all duration-700 delay-100 ease-out",
                  inView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
                )}
              >
                Explore our client success stories and learn how our solutions transformed their businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16">
          <div className="container px-4 mx-auto max-w-7xl">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-500">Error loading case studies. Please try again later.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((project, index) => {
                  const [itemRef, itemInView] = useInView({
                    triggerOnce: true,
                    threshold: 0.1,
                  });
                  
                  return (
                    <div 
                      key={project.id}
                      ref={itemRef}
                      className={cn(
                        "bg-white shadow-sm border border-gray-100 rounded-xl overflow-hidden transition-all duration-500",
                        itemInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                        `delay-${index * 100}`
                      )}
                    >
                      <div className="relative h-64 overflow-hidden">
                        <div className={cn(
                          "absolute inset-0 bg-gradient-to-br opacity-60",
                          project.gradient
                        )}></div>
                        <img 
                          src={project.image_url} 
                          alt={project.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                          {project.category}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h2 className="text-2xl font-display font-semibold mb-2">{project.title}</h2>
                        <p className="text-sbuild mb-4">Client: {project.client}</p>
                        <p className="text-muted-foreground mb-6">{project.description}</p>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">{project.year}</span>
                          <Link to={`/work?project=${project.id}`} className="inline-flex items-center text-sbuild hover:underline">
                            View Details <ExternalLink className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
