
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { useArticles } from '@/hooks/use-articles-data';
import { Skeleton } from '@/components/ui/skeleton';

const InsightsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { data: articles = [], isLoading, error } = useArticles();
  const displayedArticles = articles.slice(0, 3); // Only show first 3 articles

  return (
    <section ref={ref} id="insights" className="py-20">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-4">
              Stay Ahead with Expert Insights
            </h2>
            <p className="text-lg text-muted-foreground">
              Latest trends, case studies, and expert opinions in SaaS and cloud technology to keep you informed.
            </p>
          </div>
          
          <Link to="/insights">
            <Button className="bg-sbuild hover:bg-sbuild/90">
              Read More Insights
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                <Skeleton className="h-48 w-full" />
                <div className="p-6 space-y-4">
                  <div className="flex space-x-4">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <div className="flex justify-between items-center pt-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-500">Error loading insights. Please try again later.</p>
          </div>
        )}

        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayedArticles.map((article, index) => (
              <div
                key={article.id}
                className={cn(
                  "group overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all",
                  "transition-all duration-500 transform",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                  `delay-${index * 100}`
                )}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image_url} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {article.read_time}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-sbuild transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-sbuild" />
                      <span className="text-sm">{article.author}</span>
                    </div>
                    
                    <Link to={`/insights/${article.id}`} className="text-sbuild hover:underline inline-flex items-center text-sm font-medium">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default InsightsSection;
