
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Users, Network } from 'lucide-react';

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const [headerRef, headerInView] = useInView({
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

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 md:pt-32">
        {/* Header Section */}
        <section ref={headerRef} className="py-12 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-accent/5 to-transparent -z-10" />
          <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10" />
          
          <div className="container px-6 md:px-10 mx-auto max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
              <div 
                className={cn(
                  "inline-flex items-center py-1 px-3 mb-6 text-xs font-medium rounded-full",
                  "border border-accent/10 bg-accent/5 text-accent",
                  "transition-all duration-700 ease-out",
                  headerInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
                )}
              >
                Our Story
              </div>
              <h1 
                className={cn(
                  "text-4xl md:text-5xl font-display font-semibold tracking-tight mb-6",
                  "transition-all duration-700 delay-100 ease-out",
                  headerInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
                )}
              >
                Reimagining Digital Ownership
              </h1>
              <p 
                className={cn(
                  "text-lg md:text-xl text-muted-foreground",
                  "transition-all duration-700 delay-200 ease-out",
                  headerInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
                )}
              >
                We're building a world where individuals have true ownership and control 
                over their digital presence, without sacrificing simplicity or elegance.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section ref={missionRef} className="py-16 md:py-24 relative">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl -z-10 translate-x-1/3" />
          
          <div className="container px-6 md:px-10 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div 
                className={cn(
                  "transition-all duration-700 ease-out",
                  missionInView ? "opacity-100 animate-fade-in-left" : "opacity-0"
                )}
              >
                <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 tracking-tight">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We envision a digital landscape where users are not just consumers, but true stakeholders. 
                  A world where technology serves people, not the other way around.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Decentralize was founded on the principle that the future of the internet should be 
                  built on open standards, user sovereignty, and elegant design. We believe that 
                  decentralized technology doesn't have to be complex or intimidating.
                </p>
                <Button className="mt-4 bg-accent hover:bg-accent/90">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div 
                className={cn(
                  "relative transition-all duration-700 ease-out h-full",
                  missionInView ? "opacity-100 animate-fade-in-right" : "opacity-0"
                )}
              >
                <div className="aspect-video w-full rounded-xl overflow-hidden neo-card relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5.14V19.14L19 12.14L8 5.14Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={valuesRef} className="py-16 md:py-24 bg-secondary">
          <div className="container px-6 md:px-10 mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div 
                className={cn(
                  "inline-flex items-center py-1 px-3 mb-4 text-xs font-medium rounded-full",
                  "border border-accent/10 bg-accent/5 text-accent",
                  "transition-all duration-700 ease-out",
                  valuesInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
                )}
              >
                Core Values
              </div>
              <h2 
                className={cn(
                  "text-3xl md:text-4xl font-display font-medium mb-6 tracking-tight",
                  "transition-all duration-700 delay-100 ease-out",
                  valuesInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
                )}
              >
                Principles That Guide Us
              </h2>
              <p 
                className={cn(
                  "text-lg text-muted-foreground max-w-2xl mx-auto",
                  "transition-all duration-700 delay-200 ease-out",
                  valuesInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
                )}
              >
                Our values shape everything we do, from product design to community engagement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div 
                className={cn(
                  "neo-card p-8 rounded-xl transition-all duration-700 transform",
                  valuesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
              >
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-medium mb-3">Sovereignty</h3>
                <p className="text-muted-foreground">
                  We believe in giving users true control over their digital identity and data, 
                  with privacy and security as fundamental rights, not optional features.
                </p>
              </div>
              
              <div 
                className={cn(
                  "neo-card p-8 rounded-xl transition-all duration-700 transform delay-100",
                  valuesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
              >
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-medium mb-3">Community</h3>
                <p className="text-muted-foreground">
                  We foster inclusive, collaborative environments where diverse perspectives 
                  are valued and community governance is a central pillar of our platform.
                </p>
              </div>
              
              <div 
                className={cn(
                  "neo-card p-8 rounded-xl transition-all duration-700 transform delay-200",
                  valuesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
              >
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <Network className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-medium mb-3">Transparency</h3>
                <p className="text-muted-foreground">
                  We operate with openness, making our code open-source and our processes visible,
                  ensuring accountability and building trust with our community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section ref={teamRef} className="py-16 md:py-24 relative">
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl -z-10 -translate-x-1/3" />
          
          <div className="container px-6 md:px-10 mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div 
                className={cn(
                  "inline-flex items-center py-1 px-3 mb-4 text-xs font-medium rounded-full",
                  "border border-accent/10 bg-accent/5 text-accent",
                  "transition-all duration-700 ease-out",
                  teamInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
                )}
              >
                Our Team
              </div>
              <h2 
                className={cn(
                  "text-3xl md:text-4xl font-display font-medium mb-6 tracking-tight",
                  "transition-all duration-700 delay-100 ease-out",
                  teamInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
                )}
              >
                The People Behind Decentralize
              </h2>
              <p 
                className={cn(
                  "text-lg text-muted-foreground max-w-2xl mx-auto",
                  "transition-all duration-700 delay-200 ease-out",
                  teamInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
                )}
              >
                Our diverse team of engineers, designers, and visionaries is united by a common goal:
                creating technology that respects and empowers users.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((person, index) => (
                <div 
                  key={index}
                  className={cn(
                    "neo-card rounded-xl overflow-hidden transition-all duration-700 transform",
                    teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                    `delay-${index * 100}`
                  )}
                >
                  <div className="aspect-square w-full bg-accent/10 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium mb-1">Team Member {person}</h3>
                    <p className="text-sm text-accent mb-3">Co-Founder & {index % 2 === 0 ? 'CTO' : 'CEO'}</p>
                    <p className="text-sm text-muted-foreground">
                      Passionate about creating technology that respects and empowers users.
                    </p>
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

export default About;
