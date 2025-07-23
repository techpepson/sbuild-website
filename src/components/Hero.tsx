import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  LineChart,
  Package,
  Shield,
  Sparkles,
  Zap,
  LifeBuoy,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const backgroundImages = [
  "/bg-image1.jpg",
  "/Image20250616140443.jpg",
  "/lauren-mancke-aOC7TSLb1o8-unsplash.jpg",
  // "/Image20250616135229.jpg",
  "https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const heroRef = useRef<HTMLElement>(null);
  const [bgIndex, setBgIndex] = useState(0);
  const bgTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Initial page load animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Scroll effect handler
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const heroHeight = heroRef.current.offsetHeight;
        const progress = Math.min(scrollPosition / (heroHeight * 0.8), 1);
        setScrollProgress(progress);
      }
    };

    // Mouse move effect for parallax
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        const { width, height } = heroRef.current.getBoundingClientRect();

        // Calculate position relative to center of the container
        const x = (clientX / width - 0.5) * 2; // -1 to 1
        const y = (clientY / height - 0.5) * 2; // -1 to 1

        setMousePosition({
          x,
          y,
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    // Background slider
    if (bgTimeout.current) clearTimeout(bgTimeout.current);
    bgTimeout.current = setTimeout(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (bgTimeout.current) clearTimeout(bgTimeout.current);
    };
  }, [bgIndex]);

  // Calculate parallax and opacity effects based on scroll progress
  const parallaxOffset = scrollProgress * 100; // pixels to move elements
  const contentOpacity = 1 - scrollProgress * 1.5; // fade out content faster than scroll

  // Mouse parallax for decorative elements
  const mouseParallax = (strength: number) => ({
    transform: `translate(${mousePosition.x * strength}px, ${
      mousePosition.y * strength
    }px)`,
    transition: "transform 0.1s ease-out",
  });
  return (
    <section
      ref={heroRef}
      className="relative pt-32 md:pt-40 pb-20 overflow-hidden min-h-screen flex items-center"
    >
      {/* Sliding background images */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt="Hero background"
            className="w-full h-full object-cover absolute inset-0 duration-1000"
            style={{
              opacity: idx === bgIndex ? 1 : 0,
              transition: "opacity 1s",
              transform: `translateY(${parallaxOffset * 0.4}px)`,
            }}
            draggable={true}
          />
        ))}
        <div className="absolute inset-0 bg-black/26"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing circles */}
        <div
          className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-sbuild/10 blur-xl"
          style={mouseParallax(15)}
        ></div>
        <div
          className="absolute top-3/4 right-1/4 h-40 w-40 rounded-full bg-blue-500/10 blur-xl"
          style={mouseParallax(10)}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 h-24 w-24 rounded-full bg-purple-500/10 blur-xl"
          style={mouseParallax(20)}
        ></div>

        {/* Gradient shapes */}
        <div
          className="absolute top-1/3 right-1/3 h-64 w-64 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl"
          style={mouseParallax(5)}
        ></div>
        <div
          className="absolute bottom-1/2 left-2/3 h-74 w-74 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 blur-3xl"
          style={mouseParallax(8)}
        ></div>
      </div>

      <div
        className="flex justify-center w-full relative z-10"
        style={{
          opacity: Math.max(contentOpacity, 0),
          transform: `translateY(${parallaxOffset * 0.2}px)`,
          // subtle parallax for content
          transition: "opacity 0.2s ease-out, transform 0.1s ease-out",
        }}
      >
        <div className="relative inline-block max-w-7xl w-full px-4 py-10 rounded-2xl">
          {/* Overlay for text visibility, fits content, sits behind text */}
          <div
            className="absolute inset-0 bg-black/40 rounded-2xl"
            style={{ zIndex: 0 }}
          />
          <div className="relative z-10 flex flex-col items-center text-center text-white">
            {/* Badge */}
            <div
              className={cn(
                "inline-flex items-center py-1 px-3 mb-6 text-xs font-medium rounded-full",
                "border border-white/30 bg-white/10 text-white",
                "transition-all duration-700 ease-out",
                isVisible
                  ? "opacity-100 transform-none"
                  : "opacity-0 translate-y-4"
              )}
            >
              <span className="flex h-2 w-2 rounded-full bg-sbuild mr-2"></span>
              Advanced SaaS Solutions
            </div>

            {/* Headline */}
            <h1
              className={cn(
                "text-4xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight leading-tight mb-6 text-white",
                "transition-all duration-700 delay-100 ease-out",
                isVisible
                  ? "opacity-100 transform-none"
                  : "opacity-0 translate-y-4"
              )}
            >
              Innovative <span className="text-sbuild">SaaS Solutions</span> to
              Scale Your Business
            </h1>

            {/* Subheadline */}
            <p
              className={cn(
                "text-md md:text-xl text-white/90 mb-8",
                "transition-all duration-700 delay-200 ease-out",
                isVisible
                  ? "opacity-100 transform-none"
                  : "opacity-0 translate-y-4"
              )}
            >
              At SBuild Solutions, we craft innovative software solutions that
              drive business growth. Our expert team combines cutting-edge
              technologies like AI, ML, and IoT to create scalable, secure, and
              transformative applications that accelerate your success.
            </p>

            {/* CTA Buttons */}
            <div
              className={cn(
                "flex flex-col sm:flex-row gap-4 mb-16 sm:w-auto justify-center",
                "transition-all duration-700 delay-300 ease-out",
                isVisible
                  ? "opacity-100 transform-none"
                  : "opacity-0 translate-y-4"
              )}
            >
              <Link to="/contact">
                <Button className="h-12 px-8 bg-sbuild hover:bg-sbuild/90 text-white rounded-lg shadow-lg shadow-sbuild/20 transition-all duration-300">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="h-12 px-8 bg-white/10 text-white hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300 backdrop-blur-sm">
                  Schedule a Meeting
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>

            {/* Feature highlights */}
            <div
              className={cn(
                "grid grid-cols-1 md:grid-cols-3 gap-6",
                "transition-all duration-700 delay-400 ease-out",
                isVisible
                  ? "opacity-100 transform-none"
                  : "opacity-0 translate-y-4"
              )}
            >
              <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-xl flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="h-12 w-12 rounded-full bg-sbuild/20 flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-sbuild" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-white">
                  Custom Solutions
                </h3>
                <p className="text-sm text-white/80">
                  Tailored SaaS applications designed to meet your specific
                  business needs.
                </p>
              </div>

              <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-xl flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="h-12 w-12 rounded-full bg-sbuild/20 flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-sbuild" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-white">
                  Scalable Architecture
                </h3>
                <p className="text-sm text-white/80">
                  Build solutions that grow with your business, from startup to
                  enterprise.
                </p>
              </div>

              <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-xl flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="h-12 w-12 rounded-full bg-sbuild/20 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-sbuild" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-white">
                  Enterprise Security
                </h3>
                <p className="text-sm text-white/80">
                  Advanced security protocols to keep your data and users
                  protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated particles or sparkles */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-30">
        <Sparkle count={20} color="#ffffff" size={1} />
      </div>
    </section>
  );
};

// Simple sparkle effect component
const Sparkle = ({
  count,
  color,
  size,
}: {
  count: number;
  color: string;
  size: number;
}) => {
  const sparkles = Array.from({
    length: count,
  }).map((_, i) => {
    const top = `${Math.random() * 100}%`;
    const left = `${Math.random() * 100}%`;
    const animationDuration = 1 + Math.random() * 3;
    const animationDelay = Math.random() * 5;
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
          animationDuration: `${animationDuration}s`,
          animationDelay: `${animationDelay}s`,
        }}
      />
    );
  });
  return <>{sparkles}</>;
};
export default Hero;
