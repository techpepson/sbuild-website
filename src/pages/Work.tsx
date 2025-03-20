
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Globe, Users, Zap, BarChart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { useProjects } from '@/hooks/use-projects';
import { useSearchParams, Link } from 'react-router-dom';

const Work = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const projectId = searchParams.get('project');
  const initialFilter = searchParams.get('category') || 'all';
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Update search params when filter changes
    if (activeFilter === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', activeFilter);
    }
    setSearchParams(searchParams);
  }, [activeFilter, setSearchParams]);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'management', label: 'Management' },
    { id: 'fintech', label: 'FinTech' },
    { id: 'ecommerce', label: 'E-Commerce' },
  ];

  const { data: projects = [], isLoading, error } = useProjects(activeFilter === 'all' ? undefined : activeFilter);

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId);
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
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => handleFilterClick(filter.id)}
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => {
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
                          {filters.find(f => f.id === project.category)?.label || project.category}
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
                          {project.results.map((result, index) => (
                            <li key={index} className="flex items-start text-sm">
                              <span className="text-sbuild mr-2">•</span>
                              {result}
                            </li>
                          ))}
                        </ul>
                        
                        <Link 
                          to={`/work?project=${project.id}`} 
                          className="inline-flex items-center text-sbuild hover:underline"
                        >
                          View Case Study <ExternalLink className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
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

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it - hear from the businesses that have 
                experienced the SBuild difference firsthand.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => {
                const [ref, inView] = useInView({
                  triggerOnce: true,
                  threshold: 0.1,
                });
                
                return (
                  <div
                    key={index}
                    ref={ref}
                    className={cn(
                      "bg-white p-8 rounded-xl shadow-sm border border-gray-100",
                      "transition-all duration-500 transform",
                      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                      `delay-${index * 100}`
                    )}
                  >
                    <div className="flex items-center mb-6">
                      <svg className="text-sbuild h-6 w-6 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg className="text-sbuild h-6 w-6 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg className="text-sbuild h-6 w-6 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg className="text-sbuild h-6 w-6 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg className="text-sbuild h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                    
                    <p className="italic text-gray-600 mb-6">
                      "SBuild Solutions transformed our business with their custom SaaS platform. Their team was professional, 
                      responsive, and delivered a solution that exceeded our expectations. The results have been nothing short of exceptional."
                    </p>
                    
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                      <div>
                        <h4 className="font-medium">Client Name {index}</h4>
                        <p className="text-sm text-muted-foreground">CEO, Company {index}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Work;
