import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building,
  Users,
  Target,
  Award,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import CallToAction from "@/components/CallToAction";

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: <Building className="h-6 w-6" />,
      title: "Innovation",
      description:
        "We constantly pursue new ideas and approaches to solve complex business challenges.",
      color: "text-sbuild",
      bgColor: "bg-sbuild/10",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description:
        "We believe in working closely with our clients to ensure their success.",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from code quality to client service.",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Integrity",
      description:
        "We operate with transparency, honesty, and a strong ethical foundation.",
      color: "text-amber-600",
      bgColor: "bg-amber-100",
    },
  ];

  const teamMembers = [
    {
      name: "Prof. Solomon Mensah",
      role: "Founder & C.E.O.",
      image: "/lovable-uploads/prof-image.jpg",
    },
    {
      name: "Ms. Endurance Offeibea",
      role: "Product Manager & UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1646113235031-9c5d2cdcc21c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Ms. Elizabeth Akuafum Dick",
      role: "Organizer & Communication Officer",
      image:
        "https://plus.unsplash.com/premium_photo-1692948505024-20a1288d0b65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVucmVhbCUyMGh1bWFufGVufDB8fDB8fHww",
    },
    {
      name: "Mr. Evans Narh",
      role: "Lead Design Officer",
      image:
        "https://plus.unsplash.com/premium_photo-1670966282879-ef5f3cbf1000?q=80&w=823&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Mr. Benson Yeboah",
      role: "Full Stack Developer",
      image:
        "https://plus.unsplash.com/premium_photo-1670966282879-ef5f3cbf1000?q=80&w=823&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Mr. Lord Konadu",
      role: "Full Stack Developer",
      image:
        "https://plus.unsplash.com/premium_photo-1682310209998-4ab788b6625a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2h1cmNoJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Mr. Dickson Peprah",
      role: "Frontend Developer",
      image:
        "https://images.unsplash.com/photo-1552481902-9ef2babf332d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JlZWslMjBnb2RzfGVufDB8fDB8fHww",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="py-12 md:py-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-radial-teal -z-10" />
          <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10" />

          <div className="container px-4 mx-auto max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
              <div
                className={cn(
                  "inline-flex items-center py-1 px-3 mb-6 text-xs font-medium rounded-full",
                  "border border-sbuild/10 bg-sbuild/5 text-sbuild",
                  "transition-all duration-700 ease-out",
                  heroInView
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-4"
                )}
              >
                About SBuild Solutions
              </div>
              <h1
                className={cn(
                  "text-4xl md:text-5xl font-display font-semibold tracking-tight mb-6",
                  "transition-all duration-700 delay-100 ease-out",
                  heroInView
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-4"
                )}
              >
                Building the Future of{" "}
                <span className="text-sbuild">SaaS Technology</span>
              </h1>
              <p
                className={cn(
                  "text-lg md:text-xl text-muted-foreground",
                  "transition-all duration-700 delay-200 ease-out",
                  heroInView
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-4"
                )}
              >
                SBuild Solutions is a leading SaaS development company
                specializing in cutting-edge solutions that enhance
                productivity, efficiency, and security for businesses worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section ref={missionRef} className="py-16 md:py-24 relative">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-sbuild/5 blur-3xl -z-10 translate-x-1/3" />

          <div className="container px-4 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div
                className={cn(
                  "transition-all duration-700 ease-out",
                  missionInView
                    ? "opacity-100 animate-fade-in-left"
                    : "opacity-0"
                )}
              >
                <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 tracking-tight">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Founded in 2018, SBuild Solutions was born out of a vision to
                  make powerful SaaS technology accessible to businesses of all
                  sizes. We recognized that many organizations struggle with
                  outdated systems that hamper growth and operational
                  efficiency.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  What began as a small team of passionate developers has grown
                  into a full-service SaaS development company with a global
                  client base. Throughout our journey, we've remained committed
                  to our core mission: delivering innovative software solutions
                  that solve real business challenges.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-sbuild mr-2 flex-shrink-0" />
                    <p>5+ years of industry experience</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-sbuild mr-2 flex-shrink-0" />
                    <p>Team of 30+ skilled professionals</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-sbuild mr-2 flex-shrink-0" />
                    <p>Clients across 15+ countries</p>
                  </div>
                </div>
              </div>

              <div
                className={cn(
                  "relative transition-all duration-700 ease-out h-full",
                  missionInView
                    ? "opacity-100 animate-fade-in-right"
                    : "opacity-0"
                )}
              >
                <div className="relative overflow-hidden rounded-2xl border-8 border-white shadow-xl">
                  <img
                    src="/black-team-2.avif"
                    alt="SBuild team"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sbuild/80 to-transparent opacity-40"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-cyan-100 rounded-full -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-100 rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <Stats />

        {/* Our Values Section */}
        <section ref={valuesRef} className="py-16 md:py-24">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2
                className={cn(
                  "text-3xl md:text-4xl font-display font-semibold mb-6 tracking-tight",
                  "transition-all duration-700 ease-out",
                  valuesInView
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-4"
                )}
              >
                Our Core Values
              </h2>
              <p
                className={cn(
                  "text-lg text-muted-foreground max-w-2xl mx-auto",
                  "transition-all duration-700 delay-100 ease-out",
                  valuesInView
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-4"
                )}
              >
                These principles guide every decision we make and every line of
                code we write, ensuring we deliver exceptional value to our
                clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={cn(
                    "p-8 rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md",
                    "transition-all duration-700 transform",
                    valuesInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10",
                    `delay-${index * 100}`
                  )}
                >
                  <div
                    className={cn(
                      "h-12 w-12 rounded-full flex items-center justify-center mb-6",
                      value.bgColor
                    )}
                  >
                    <div className={value.color}>{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section ref={teamRef} className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2
                className={cn(
                  "text-3xl md:text-4xl font-display font-semibold mb-6 tracking-tight",
                  "transition-all duration-700 ease-out",
                  teamInView
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-4"
                )}
              >
                Meet Our Leadership Team
              </h2>
              <p
                className={cn(
                  "text-lg text-muted-foreground max-w-2xl mx-auto",
                  "transition-all duration-700 delay-100 ease-out",
                  teamInView
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-4"
                )}
              >
                Our diverse team brings together years of experience in software
                development, design, and business strategy.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={cn(
                    "bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all hover:-translate-y-1 hover:shadow-md",
                    "transition-all duration-700 transform",
                    teamInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10",
                    `delay-${index * 100}`
                  )}
                >
                  <div className="aspect-square w-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                    <p className="text-sbuild mb-4">{member.role}</p>
                    <div className="flex space-x-3">
                      <a href="#" className="text-gray-400 hover:text-sbuild">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-sbuild">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
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

export default About;
