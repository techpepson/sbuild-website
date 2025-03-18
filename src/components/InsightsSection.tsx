
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const InsightsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const articles = [
    {
      id: 1,
      title: "The Future of SaaS: Trends to Watch in 2023",
      excerpt: "Explore the emerging trends in SaaS that are shaping the future of business software and digital transformation.",
      date: "Nov 15, 2023",
      readTime: "5 min read",
      author: "Alex Johnson",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "How Cloud Migration Can Reduce Your IT Costs",
      excerpt: "Learn how migrating to cloud-based solutions can significantly reduce your IT infrastructure and maintenance costs.",
      date: "Oct 28, 2023",
      readTime: "4 min read",
      author: "Maria Garcia",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Designing SaaS Products for Maximum User Adoption",
      excerpt: "Discover the key UI/UX principles that can help your SaaS product achieve higher user adoption and retention rates.",
      date: "Oct 12, 2023",
      readTime: "6 min read",
      author: "David Chen",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=80"
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className={cn(
                "group overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all",
                "transition-all duration-500 transform",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                `delay-${index * 100}`
              )}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={article.image} 
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
                    {article.readTime}
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
      </div>
    </section>
  );
};

export default InsightsSection;
