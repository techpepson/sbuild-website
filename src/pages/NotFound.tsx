
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-8">
      <div className="text-center max-w-md animate-fade-in">
        <div className="inline-flex items-center py-1 px-3 mb-6 text-xs font-medium rounded-full border border-accent/10 bg-accent/5 text-accent">
          404 Error
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight mb-4">Page Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          We couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-accent hover:bg-accent/90">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/about">
              About Us
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
