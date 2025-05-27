import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Code,
  Cpu,
  Database,
  Shield,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const keyPoints = [
    "Expertise in modern SaaS architecture and cloud-native solutions",
    "Dedicated team of experienced developers, designers, and strategists",
    "Focus on creating scalable, secure, and user-friendly applications",
    "Commitment to ongoing support and continuous improvement",
  ];

  const techIcons = [
    { icon: <Code className="h-6 w-6" />, color: "from-blue-500 to-cyan-500" },
    {
      icon: <Cpu className="h-6 w-6" />,
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Database className="h-6 w-6" />,
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section ref={ref} id="about" className="py-20 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-radial-teal -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10" />
      <div className="absolute -right-48 top-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl -z-10" />
      <div className="absolute -left-48 bottom-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl -z-10" />

      <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Illustration Side */}
          <div
            className={cn(
              "relative transition-all duration-700 transform",
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}
          >
            <div className="relative z-10">
              {/* Main image container */}
              <div className="w-full aspect-square max-w-lg rounded-2xl bg-gradient-to-br from-sbuild/90 to-cyan-500/80 p-1 shadow-2xl">
                <div className="w-full h-full rounded-xl bg-white flex items-center justify-center overflow-hidden">
                  {/* Professional illustration */}
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-50 to-gray-100">
                    {/* Animated tech icons */}
                    {techIcons.map((tech, index) => (
                      <div
                        key={index}
                        className={cn(
                          "absolute w-16 h-16 rounded-xl bg-gradient-to-br",
                          tech.color,
                          "flex items-center justify-center text-white shadow-lg",
                          "animate-float",
                          index === 0 && "top-1/4 left-1/4",
                          index === 1 && "top-1/4 right-1/4",
                          index === 2 && "bottom-1/4 left-1/4",
                          index === 3 && "bottom-1/4 right-1/4"
                        )}
                        style={{
                          animationDelay: `${index * 0.5}s`,
                          animationDuration: "3s",
                        }}
                      >
                        {tech.icon}
                      </div>
                    ))}

                    {/* Central logo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-sbuild to-cyan-600 flex items-center justify-center text-white font-bold text-4xl shadow-lg animate-pulse-soft">
                        S
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-full h-full">
                      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-sbuild/10 animate-pulse-soft"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-cyan-500/10 animate-float"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-4 border-dashed border-sbuild/30 animate-spin-slow"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full -z-10 animate-float"></div>
            <div
              className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full -z-10 animate-float"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>

          {/* Content Side */}
          <div
            className={cn(
              "transition-all duration-700 transform",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )}
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sbuild to-cyan-600">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              SBuild Solutions is a SaaS development company specializing in
              cutting-edge solutions that enhance productivity, efficiency, and
              security for businesses worldwide.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We combine technical expertise with business acumen to deliver
              software that solves real-world challenges and creates tangible
              value for our clients.
            </p>

            <div className="space-y-3 mb-8">
              {keyPoints.map((point, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-start transition-all duration-500",
                    inView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="h-6 w-6 text-sbuild mr-2 flex-shrink-0" />
                  <p>{point}</p>
                </div>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-sbuild to-cyan-600 hover:from-sbuild/90 hover:to-cyan-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
