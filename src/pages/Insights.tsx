import React, { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  Clock,
  Search,
  User,
  Sparkles,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { useArticles, Article } from "@/hooks/use-articles";
import { useSearchParams } from "react-router-dom";

const Insights = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All Categories";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [featuredRef, featuredInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [articlesRef, articlesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (activeCategory === "All Categories") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", activeCategory);
    }
    setSearchParams(searchParams);
  }, [activeCategory]);

  const {
    data: allArticles = [],
    isLoading,
    error,
  } = useArticles(
    activeCategory === "All Categories" ? undefined : activeCategory
  );

  // Apply search filter
  const filteredArticles = searchQuery
    ? allArticles.filter(
        (article) =>
          (article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.category
              .toLowerCase()
              .includes(searchQuery.toLowerCase())) &&
          article.title.trim().toLowerCase() !== "ui/ux design" &&
          !article.category.toLowerCase().includes("ui/ux")
      )
    : allArticles.filter(
        (article) =>
          article.title.trim().toLowerCase() !== "ui/ux design" &&
          !article.category.toLowerCase().includes("ui/ux")
      );

  const featuredArticle =
    filteredArticles.length > 0 ? filteredArticles[0] : null;
  const articles = filteredArticles.length > 1 ? filteredArticles.slice(1) : [];

  // Get unique categories from articles (excluding any category containing 'UI/UX')
  const uniqueCategories = [
    "All Categories",
    ...new Set(
      allArticles
        .filter((article) => !article.category.toLowerCase().includes("ui/ux"))
        .map((article) => article.category)
    ),
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="py-16 md:py-24 relative overflow-hidden"
        >
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-radial-teal -z-10" />
          <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10" />
          <div className="absolute -right-48 top-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl -z-10" />
          <div className="absolute -left-48 bottom-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl -z-10" />

          <div className="container px-4 mx-auto max-w-7xl">
            <div
              className={cn(
                "text-center max-w-3xl mx-auto mb-16",
                "transition-all duration-700 transform",
                heroInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
            >
              <div className="inline-flex items-center py-1 px-3 mb-6 text-xs font-medium rounded-full border border-sbuild/10 bg-sbuild/5 text-sbuild">
                <Sparkles className="h-3 w-3 mr-2" />
                Latest Updates
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sbuild to-cyan-600">
                Insights & Resources
              </h1>
              <p className="text-xl text-muted-foreground">
                Stay informed with the latest trends, strategies, and insights
                in SaaS development and cloud technologies
              </p>
            </div>

            <div
              className={cn(
                "max-w-xl mx-auto relative",
                "transition-all duration-700 delay-200 transform",
                heroInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
            >
              <div className="relative group">
                <Input
                  type="text"
                  placeholder="Search articles, guides and case studies..."
                  className="h-14 pl-12 pr-4 rounded-xl shadow-sm border-gray-200 transition-all duration-300 group-hover:shadow-md group-hover:border-sbuild/50 focus:border-sbuild"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 transition-colors duration-300 group-hover:text-sbuild" />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-gray-100 bg-white/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="flex flex-wrap gap-3 justify-center">
              {uniqueCategories.map((category, index) => (
                <Button
                  key={index}
                  variant={category === activeCategory ? "default" : "outline"}
                  className={cn(
                    "transition-all duration-300",
                    category === activeCategory
                      ? "bg-gradient-to-r from-sbuild to-cyan-600 hover:from-sbuild/90 hover:to-cyan-600/90 text-white shadow-lg"
                      : "hover:border-sbuild/50 hover:text-sbuild"
                  )}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Loading State */}
        {isLoading && (
          <section className="py-12">
            <div className="container px-4 mx-auto max-w-7xl">
              <div className="animate-pulse">
                <div className="h-80 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl mb-12"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="h-72 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Error State */}
        {error && (
          <section className="py-12">
            <div className="container px-4 mx-auto max-w-7xl">
              <div className="text-center py-12">
                <p className="text-red-500 mb-4">
                  Failed to load articles. Please try again later.
                </p>
                <Button
                  variant="outline"
                  onClick={() => window.location.reload()}
                  className="hover:border-red-500 hover:text-red-500 transition-colors"
                >
                  Retry
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Empty Search Results */}
        {!isLoading && !error && filteredArticles.length === 0 && (
          <section className="py-12">
            <div className="container px-4 mx-auto max-w-7xl">
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  No articles found. Try adjusting your search or category
                  filter.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All Categories");
                  }}
                  className="hover:border-sbuild hover:text-sbuild transition-colors"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Featured Article */}
        {!isLoading && !error && featuredArticle && (
          <section className="py-12" ref={featuredRef}>
            <div className="container px-4 mx-auto max-w-7xl">
              <h2
                className={cn(
                  "text-2xl md:text-3xl font-display font-semibold tracking-tight mb-8",
                  "transition-all duration-700 transform",
                  featuredInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
              >
                Featured Article
              </h2>

              <div
                className={cn(
                  "overflow-hidden rounded-xl shadow-md transition-all hover:shadow-xl border border-gray-100/80",
                  "transition-all duration-700 transform",
                  featuredInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 overflow-hidden">
                    <img
                      src={featuredArticle.image_url}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      style={{ minHeight: "300px" }}
                    />
                  </div>
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between bg-white">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="bg-gradient-to-r from-sbuild/10 to-cyan-500/10 text-sbuild text-xs font-medium px-3 py-1 rounded-full">
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
                        <span className="text-sm">
                          {featuredArticle.author}
                        </span>
                        <span className="mx-2 text-gray-300">·</span>
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="text-sm">
                          {featuredArticle.read_time}
                        </span>
                      </div>

                      <Link
                        to={`/insights/${featuredArticle.id}`}
                        className="text-sbuild hover:text-cyan-600 transition-colors inline-flex items-center text-sm font-medium group"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        {!isLoading && !error && articles.length > 0 && (
          <section className="py-12 bg-gray-50" ref={articlesRef}>
            <div className="container px-4 mx-auto max-w-7xl">
              <h2
                className={cn(
                  "text-2xl md:text-3xl font-display font-semibold tracking-tight mb-8",
                  "transition-all duration-700 transform",
                  articlesInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
              >
                {searchQuery ? "Search Results" : "Latest Articles"}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                  <Card
                    key={article.id}
                    className={cn(
                      "overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100/80",
                      "transition-all duration-500 transform",
                      articlesInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10",
                      `delay-${index * 100}`
                    )}
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={article.image_url}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-gradient-to-r from-sbuild/10 to-cyan-500/10 text-sbuild text-xs font-medium px-2 py-0.5 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {article.date}
                        </span>
                      </div>
                      <Link to={`/insights/${article.id}`}>
                        <CardTitle className="text-xl font-semibold hover:text-sbuild transition-colors">
                          {article.title}
                        </CardTitle>
                      </Link>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-2">
                        {article.excerpt}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>
                      <Link
                        to={`/insights/${article.id}`}
                        className="text-sbuild hover:text-cyan-600 transition-colors inline-flex items-center text-sm font-medium group"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Insights;
