import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  Shield,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Entrance animations trigger
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const heroHeight = heroRef.current.offsetHeight;
        const progress = Math.min(scrollPosition / (heroHeight * 0.8), 1);
        setScrollProgress(progress);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        const { left, top, width, height } =
          heroRef.current.getBoundingClientRect();

        // Calculate position relative to container
        const x = ((clientX - left) / width - 0.5) * 2; // -1 to 1
        const y = ((clientY - top) / height - 0.5) * 2; // -1 to 1

        setMousePosition({ x, y });
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const parallaxOffset = scrollProgress * 120;
  const contentOpacity = 1 - scrollProgress * 1.5;

  // Parallax translation styling generator
  const getMouseParallax = (strength: number) => ({
    transform: `translate(${mousePosition.x * strength}px, ${mousePosition.y * strength}px)`,
    transition: "transform 0.15s ease-out",
  });

  return (
    <section
      ref={heroRef}
      className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden min-h-screen flex items-center bg-[#021312]"
      style={{
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
      }}
    >
      {/* Background Image and Overlay System */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/landi.jpeg"
          alt="Hero background"
          className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 ease-out"
          style={{
            transform: `translateY(${parallaxOffset * 0.35}px)`,
          }}
          draggable={false}
        />
        {/* Dark overlay with brand color cast for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-[#021312]/80 to-[#010909]/95 z-10"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-20"></div>
        {/* Glow circles to add depth on top of the image overlay */}
        <div
          className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-sbuild/20 blur-[100px] animate-pulse-soft z-20"
          style={getMouseParallax(15)}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px] animate-pulse-soft z-20"
          style={getMouseParallax(10)}
        ></div>
      </div>

      {/* Main Content Area */}
      <div className="container px-4 mx-auto max-w-5xl relative z-30">
        <div
          className="flex flex-col items-center text-center justify-center min-h-[calc(100vh-160px)]"
          style={{
            opacity: Math.max(contentOpacity, 0),
            transform: `translateY(${parallaxOffset * 0.15}px)`,
            transition: "opacity 0.2s ease-out, transform 0.1s ease-out",
          }}
        >
          {/* Actionable Badge */}
          <div
            className={cn(
              "inline-flex items-center py-1 px-3.5 mb-6 text-xs font-semibold rounded-full",
              "border border-white/20 bg-white/5 text-white/90 backdrop-blur-md",
              "transition-all duration-700 ease-out shadow-sm hover:border-sbuild/40 hover:bg-sbuild/5",
              isVisible
                ? "opacity-100 transform-none"
                : "opacity-0 translate-y-4",
            )}
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-sbuild mr-2 animate-pulse"></span>
            SBuild Solutions - Empowering Your Digital Transformation
          </div>

          {/* Main Headline */}
          <h1
            className={cn(
              "text-4xl md:text-6xl lg:text-7.5xl font-display font-bold tracking-tight text-white mb-6 leading-[1.1] max-w-4xl",
              "transition-all duration-700 delay-100 ease-out",
              isVisible
                ? "opacity-100 transform-none"
                : "opacity-0 translate-y-4",
            )}
          >
            Innovative{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sbuild to-cyan-400">
              SaaS Solutions
            </span>{" "}
            <br />
            to Scale Your Business
          </h1>

          {/* Subheadline description */}
          <p
            className={cn(
              "text-base md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed",
              "transition-all duration-700 delay-200 ease-out",
              isVisible
                ? "opacity-100 transform-none"
                : "opacity-0 translate-y-4",
            )}
          >
            At SBuild Solutions, we craft innovative software solutions that
            drive business growth. Our expert team combines cutting-edge
            technologies like AI, ML, and IoT to create scalable, secure, and
            transformative applications that accelerate your success.
          </p>

          {/* Action CTA Buttons */}
          <div
            className={cn(
              "flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto justify-center",
              "transition-all duration-700 delay-300 ease-out",
              isVisible
                ? "opacity-100 transform-none"
                : "opacity-0 translate-y-4",
            )}
          >
            <Link to="/contact">
              <Button className="h-12 px-8 w-full sm:w-auto bg-sbuild hover:bg-sbuild/90 text-white rounded-lg shadow-lg shadow-sbuild/30 transition-all duration-300 flex items-center justify-center font-medium">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="h-12 px-8 w-full sm:w-auto bg-white/5 text-white hover:bg-white/15 border border-white/15 rounded-lg transition-all duration-300 backdrop-blur-sm flex items-center justify-center font-medium">
                Schedule a Meeting
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* Trust Badges */}
          <div
            className={cn(
              "flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-white/60",
              "transition-all duration-700 delay-450 ease-out",
              isVisible
                ? "opacity-100 transform-none"
                : "opacity-0 translate-y-4",
            )}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4.5 w-4.5 text-sbuild" />
              <span>99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4.5 w-4.5 text-sbuild" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4.5 w-4.5 text-sbuild" />
              <span>AI-Powered Insights</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sparkles Particle Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
        <Sparkle count={15} color="#ffffff" size={1} />
      </div>
    </section>
  );
};

// Particle sparkle builder
const Sparkle = ({
  count,
  color,
  size,
}: {
  count: number;
  color: string;
  size: number;
}) => {
  const sparkles = Array.from({ length: count }).map((_, i) => {
    const top = `${Math.random() * 100}%`;
    const left = `${Math.random() * 100}%`;
    const duration = 2 + Math.random() * 4;
    const delay = Math.random() * 5;
    return (
      <div
        key={i}
        className="absolute rounded-full animate-pulse"
        style={{
          top,
          left,
          width: `${size * (1 + Math.random())}px`,
          height: `${size * (1 + Math.random())}px`,
          backgroundColor: color,
          boxShadow: `0 0 ${8 * size}px ${2 * size}px ${color}`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });
  return <>{sparkles}</>;
};

export default Hero;
