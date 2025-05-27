import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Share2,
  User,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { useArticle, useArticles } from "@/hooks/use-articles-data";
import { Skeleton } from "@/components/ui/skeleton";

const InsightDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const articleId = id || "";

  const { data: article, isLoading, error } = useArticle(articleId);
  const { data: articles = [] } = useArticles();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  if (error) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold mb-4">Error Loading Article</h1>
            <p className="text-muted-foreground mb-6">
              There was a problem loading this article. Please try again later.
            </p>
            <Button
              onClick={() => navigate("/insights")}
              className="bg-sbuild hover:bg-sbuild/90"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Insights
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 pt-24">
          <div className="container px-4 mx-auto max-w-4xl">
            <div className="animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-2"></div>
              <div className="h-10 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="flex gap-4 mb-6">
                <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/6"></div>
                </div>
              </div>
              <div className="h-60 bg-gray-200 rounded-lg mb-6"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The article you're looking for doesn't exist or has been moved.
            </p>
            <Button
              onClick={() => navigate("/insights")}
              className="bg-sbuild hover:bg-sbuild/90"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Insights
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Find related articles (excluding current one)
  const relatedArticles = articles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1" ref={ref}>
        {/* Header */}
        <section className="pt-12 pb-8 md:pt-20 md:pb-12 bg-gradient-to-br from-sbuild/5 to-cyan-500/5">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <div
                className={cn(
                  "transition-all duration-700 transform",
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
              >
                <div className="flex items-center gap-2 mb-6 text-sbuild">
                  <Link
                    to="/insights"
                    className="inline-flex items-center text-sm hover:underline"
                  >
                    <ArrowLeft className="mr-1 h-4 w-4" />
                    Back to Insights
                  </Link>
                  <span className="text-gray-300">|</span>
                  <span className="text-sm text-muted-foreground">
                    {article.category}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold tracking-tight mb-6">
                  {article.title}
                </h1>

                <div className="flex items-center gap-4 mt-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-200 flex items-center justify-center">
                      {article.author_image ? (
                        <img
                          src={article.author_image}
                          alt={article.author}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="h-6 w-6 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{article.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {article.author_role || "Writer"}
                      </div>
                    </div>
                  </div>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-3.5 w-3.5" />
                    {article.date}
                  </div>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-3.5 w-3.5" />
                    {article.read_time}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8">
          <div className="container px-4 mx-auto max-w-7xl">
            <div
              className={cn(
                "max-w-4xl mx-auto overflow-hidden rounded-xl shadow-md border border-gray-100/80",
                "transition-all duration-700 transform",
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10",
                "delay-100"
              )}
            >
              <img
                src={article.image_url}
                alt={article.title}
                className="w-full h-auto object-cover"
                style={{ maxHeight: "500px" }}
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8 md:py-12">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="max-w-3xl mx-auto">
              <div
                className={cn(
                  "prose prose-lg max-w-none",
                  "transition-all duration-700 transform",
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10",
                  "delay-200"
                )}
                dangerouslySetInnerHTML={{ __html: article.content }}
              ></div>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full mr-2"
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Share This Article
                    </Button>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link to="/insights">
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full"
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Articles
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-12 bg-gray-50">
          <div className="container px-4 mx-auto max-w-7xl">
            <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mb-8 text-center">
              Related Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedArticles.map((relatedArticle, index) => (
                <div
                  key={relatedArticle.id}
                  className={cn(
                    "overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100/80 bg-white",
                    "transition-all duration-500 transform",
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10",
                    `delay-${(index + 3) * 100}`
                  )}
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={relatedArticle.image_url}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="mr-1 h-3.5 w-3.5" />
                      {relatedArticle.date}
                    </div>

                    <Link to={`/insights/${relatedArticle.id}`}>
                      <h3 className="text-lg font-display font-semibold mb-4 hover:text-sbuild transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                    </Link>

                    <Link
                      to={`/insights/${relatedArticle.id}`}
                      className="text-sbuild hover:underline inline-flex items-center text-sm font-medium"
                    >
                      Read Article <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InsightDetails;
