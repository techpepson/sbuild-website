
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, Search, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const Insights = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const featuredArticle = {
    id: 1,
    title: "The Future of SaaS: Trends That Will Reshape Business Software in 2024",
    excerpt: "Explore the emerging trends in SaaS that will fundamentally change how businesses operate, from AI-driven solutions to vertical-specific platforms.",
    date: "May 8, 2024",
    readTime: "7 min read",
    author: "Sarah Chen",
    category: "Industry Trends",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80"
  };

  const articles = [
    {
      id: 2,
      title: "How Cloud Migration Can Reduce Your IT Costs by 35%",
      excerpt: "Learn how migrating to cloud-based solutions can significantly reduce your IT infrastructure and maintenance costs with real-world case studies.",
      date: "May 2, 2024",
      readTime: "5 min read",
      author: "Michael Reeves",
      category: "Cloud Solutions",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Designing SaaS Products for Maximum User Adoption",
      excerpt: "Discover the key UI/UX principles that can help your SaaS product achieve higher user adoption and retention rates in competitive markets.",
      date: "April 28, 2024",
      readTime: "6 min read",
      author: "Emma Torres",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      title: "Building Secure SaaS Applications: A Comprehensive Guide",
      excerpt: "Learn the essential security practices every SaaS developer should implement to protect user data and maintain compliance with regulations.",
      date: "April 15, 2024",
      readTime: "8 min read",
      author: "David Kim",
      category: "Security",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 5,
      title: "The ROI of Custom SaaS Development vs. Off-the-Shelf Solutions",
      excerpt: "A detailed analysis of when to invest in custom SaaS development and when existing solutions might be more cost-effective for your business.",
      date: "April 10, 2024",
      readTime: "6 min read",
      author: "Jessica Patel",
      category: "Business Strategy",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 6,
      title: "Microservices Architecture for SaaS: Benefits and Challenges",
      excerpt: "An exploration of how microservices architecture can improve scalability and resilience in SaaS applications, with real implementation insights.",
      date: "April 3, 2024",
      readTime: "7 min read",
      author: "Marcus Johnson",
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80"
    }
  ];

  const categories = [
    "All Categories",
    "Industry Trends",
    "Cloud Solutions",
    "UI/UX Design",
    "Security",
    "Business Strategy",
    "Architecture",
    "Case Studies"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-sbuild/5 to-cyan-500/5">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight mb-6">
                Insights & Resources
              </h1>
              <p className="text-xl text-muted-foreground">
                Stay informed with the latest trends, strategies, and insights in SaaS development and cloud technologies
              </p>
            </div>

            <div className="max-w-xl mx-auto relative">
              <div className="relative">
                <Input 
                  type="text" 
                  placeholder="Search articles, guides and case studies..." 
                  className="h-14 pl-12 pr-4 rounded-xl shadow-sm border-gray-200"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-gray-100">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <Button 
                  key={index} 
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "bg-sbuild hover:bg-sbuild/90" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12" ref={ref}>
          <div className="container px-4 mx-auto max-w-7xl">
            <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mb-8">
              Featured Article
            </h2>

            <div className={cn(
              "overflow-hidden rounded-xl shadow-md transition-all hover:shadow-lg border border-gray-100/80",
              "transition-all duration-700 transform",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 overflow-hidden">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    style={{ minHeight: "300px" }}
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="bg-sbuild/10 text-sbuild text-xs font-medium px-3 py-1 rounded-full">
                        {featuredArticle.category}
                      </span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-3.5 w-3.5" />
                        {featuredArticle.date}
                      </div>
                    </div>
                    
                    <Link to={`/insights/${featuredArticle.id}`}>
                      <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4 hover:text-sbuild transition-colors">
                        {featuredArticle.title}
                      </h3>
                    </Link>
                    
                    <p className="text-muted-foreground mb-6">
                      {featuredArticle.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-sbuild" />
                      <span className="text-sm">{featuredArticle.author}</span>
                      <span className="mx-2 text-gray-300">·</span>
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{featuredArticle.readTime}</span>
                    </div>
                    
                    <Link to={`/insights/${featuredArticle.id}`} className="text-sbuild hover:underline inline-flex items-center text-sm font-medium">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12 bg-gray-50">
          <div className="container px-4 mx-auto max-w-7xl">
            <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mb-8">
              Latest Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card 
                  key={article.id} 
                  className={cn(
                    "overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100/80",
                    "transition-all duration-500 transform",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                    `delay-${index * 100}`
                  )}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="bg-sbuild/10 text-sbuild text-xs font-medium px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <Link to={`/insights/${article.id}`}>
                      <CardTitle className="text-xl hover:text-sbuild transition-colors">
                        {article.title}
                      </CardTitle>
                    </Link>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                  </CardContent>
                  
                  <CardFooter className="flex items-center justify-between pt-0">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-3.5 w-3.5" />
                      {article.date}
                      <span className="mx-2">·</span>
                      <Clock className="mr-1 h-3.5 w-3.5" />
                      {article.readTime}
                    </div>
                    
                    <Link to={`/insights/${article.id}`} className="text-sbuild hover:underline inline-flex items-center text-sm font-medium">
                      Read <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-sbuild hover:bg-sbuild/90">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Insights;
