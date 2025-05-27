import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code,
  Globe,
  Heart,
  Users2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      location: "San Francisco, CA (Remote Available)",
      type: "Full-time",
      description:
        "We're looking for an experienced Full-Stack Developer to join our engineering team. You'll work on developing and maintaining our core SaaS products, collaborating with cross-functional teams to deliver high-quality solutions.",
    },
    {
      title: "UX/UI Designer",
      location: "Austin, TX (Remote Available)",
      type: "Full-time",
      description:
        "Join our design team to create intuitive, engaging user experiences for our SaaS products. You'll collaborate with product managers and developers to turn complex requirements into elegant design solutions.",
    },
    {
      title: "DevOps Engineer",
      location: "Remote",
      type: "Full-time",
      description:
        "We're seeking a DevOps Engineer to help us build and maintain our cloud infrastructure, automation pipelines, and deployment processes. You'll play a key role in ensuring the reliability and performance of our systems.",
    },
    {
      title: "Product Manager",
      location: "New York, NY (Hybrid)",
      type: "Full-time",
      description:
        "As a Product Manager, you'll drive the vision, strategy, and roadmap for one of our key product lines. You'll work closely with customers, stakeholders, and development teams to deliver products that solve real business problems.",
    },
    {
      title: "Sales Development Representative",
      location: "Chicago, IL (Hybrid)",
      type: "Full-time",
      description:
        "Join our sales team to help identify and cultivate new business opportunities. You'll be the first point of contact for potential clients, understanding their needs and introducing them to our SaaS solutions.",
    },
  ];

  const values = [
    {
      icon: Users2,
      title: "Customer-Focused",
      description:
        "We prioritize understanding and meeting the needs of our customers in everything we do.",
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description:
        "We strive for the highest standards in our code, design, and overall technical solutions.",
    },
    {
      icon: Heart,
      title: "Empathy & Respect",
      description:
        "We value diverse perspectives and treat each other with respect and kindness.",
    },
    {
      icon: Globe,
      title: "Innovation",
      description:
        "We embrace creativity and constantly seek better ways to solve problems.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Ownership",
      description:
        "We take responsibility for our work and commitments, seeing things through to completion.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 md:pt-32">
        {/* Header */}
        <section
          ref={ref}
          className="py-12 md:py-20 bg-gradient-to-r from-sbuild/5 to-cyan-500/5"
        >
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
              <h1
                className={cn(
                  "text-4xl md:text-5xl font-display font-semibold tracking-tight mb-6",
                  "transition-all duration-700 ease-out",
                  inView
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-4"
                )}
              >
                Join Our Team
              </h1>
              <p
                className={cn(
                  "text-lg md:text-xl text-muted-foreground mb-8",
                  "transition-all duration-700 delay-100 ease-out",
                  inView
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-4"
                )}
              >
                Help us build innovative SaaS solutions that transform
                businesses.
              </p>
              <Button
                className={cn(
                  "bg-sbuild hover:bg-sbuild/90 px-6 py-6 h-auto text-base",
                  "transition-all duration-700 delay-200 ease-out",
                  inView
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-4"
                )}
                asChild
              >
                <a href="#open-positions">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-16">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
                Why Work With Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                At SBuild Solutions, we're building more than just software.
                We're creating a place where talented people can do their best
                work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="h-12 w-12 rounded-full bg-sbuild/10 flex items-center justify-center mb-4">
                  <Users2 className="h-6 w-6 text-sbuild" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Great Team</h3>
                <p className="text-muted-foreground">
                  Work with a diverse team of talented, passionate professionals
                  who support each other and celebrate successes together.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="h-12 w-12 rounded-full bg-sbuild/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-sbuild" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Interesting Challenges
                </h3>
                <p className="text-muted-foreground">
                  Solve complex, meaningful problems while building products
                  that make a real difference for our clients.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="h-12 w-12 rounded-full bg-sbuild/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-sbuild" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Remote-Friendly</h3>
                <p className="text-muted-foreground">
                  Enjoy the flexibility of remote work with a company culture
                  that truly supports distributed teams.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="h-12 w-12 rounded-full bg-sbuild/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-sbuild" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Comprehensive Benefits
                </h3>
                <p className="text-muted-foreground">
                  Enjoy competitive compensation, health benefits, generous PTO,
                  and retirement plans that put your wellbeing first.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="h-12 w-12 rounded-full bg-sbuild/10 flex items-center justify-center mb-4">
                  <ArrowRight className="h-6 w-6 text-sbuild" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Career Growth</h3>
                <p className="text-muted-foreground">
                  Advance your career with clear growth paths, learning budgets,
                  and opportunities to develop new skills.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="h-12 w-12 rounded-full bg-sbuild/10 flex items-center justify-center mb-4">
                  <BriefcaseBusiness className="h-6 w-6 text-sbuild" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Work-Life Balance
                </h3>
                <p className="text-muted-foreground">
                  We believe in sustainable work practices that allow you to do
                  your best work without burning out.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core principles guide how we work, make decisions, and
                interact with each other and our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start p-6 bg-white rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="h-10 w-10 rounded-full bg-sbuild/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <value.icon className="h-5 w-5 text-sbuild" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-16">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
                Open Positions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our current opportunities and find your place in our
                team.
              </p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:border-sbuild/50 hover:shadow-md transition-all"
                >
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 mt-1 text-sm text-muted-foreground">
                        <span>{position.location}</span>
                        <span className="hidden md:inline">•</span>
                        <span>{position.type}</span>
                      </div>
                    </div>
                    <Button className="bg-sbuild hover:bg-sbuild/90" asChild>
                      <a
                        href={`mailto:careers@sbuild.com?subject=Application for ${position.title}`}
                      >
                        Apply Now
                      </a>
                    </Button>
                  </div>
                  <p className="text-muted-foreground">
                    {position.description}
                  </p>
                </div>
              ))}
            </div>

            {/* No Current Openings Message */}
            {openPositions.length === 0 && (
              <div className="text-center p-8 bg-gray-50 rounded-xl max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold mb-2">
                  No Current Openings
                </h3>
                <p className="text-muted-foreground mb-4">
                  We don't have any open positions right now, but we're always
                  looking for talented people to join our team.
                </p>
                <Button className="bg-sbuild hover:bg-sbuild/90" asChild>
                  <a href="mailto:careers@sbuild.com">Send Us Your Resume</a>
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-r from-sbuild/10 to-cyan-500/10">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
                Don't See the Right Fit?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're always interested in connecting with talented people. Send
                us your resume and let us know how you can contribute to our
                team.
              </p>
              <Button
                className="bg-sbuild hover:bg-sbuild/90 px-6 py-6 h-auto text-base"
                asChild
              >
                <a href="mailto:careers@sbuild.com">
                  Contact Our Recruiting Team
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
