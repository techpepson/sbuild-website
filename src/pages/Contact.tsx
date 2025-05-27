import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import {
  ArrowRight,
  Building,
  CheckCircle2,
  Globe,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const ContactPage = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [tabValue, setTabValue] = useState("general");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
      service: "",
    },
  });

  const [refLeft, inViewLeft] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refRight, inViewRight] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const onSubmit = async (data) => {
    setSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", data);

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
      variant: "default",
    });

    reset();
    setSubmitting(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-sbuild/5 to-cyan-500/5">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight mb-6">
                Let's Build Something Amazing Together
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Have a project in mind? We'd love to hear about it. Reach out to
                us and let's start a conversation.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <div className="inline-flex items-center rounded-full bg-white px-4 py-2 shadow-sm border border-gray-100">
                  <Phone className="h-4 w-4 text-sbuild mr-2" />
                  <span>+1 (800) 555-0123</span>
                </div>

                <div className="inline-flex items-center rounded-full bg-white px-4 py-2 shadow-sm border border-gray-100">
                  <Mail className="h-4 w-4 text-sbuild mr-2" />
                  <span>contact@sbuild.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div
                ref={refLeft}
                className={cn(
                  "transition-all duration-700 transform",
                  inViewLeft
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                )}
              >
                <Card className="shadow-md border border-gray-100/80 overflow-hidden">
                  <Tabs
                    defaultValue="general"
                    value={tabValue}
                    onValueChange={setTabValue}
                    className="w-full"
                  >
                    <TabsList className="grid grid-cols-3 w-full">
                      <TabsTrigger value="general">General Inquiry</TabsTrigger>
                      <TabsTrigger value="sales">Sales</TabsTrigger>
                      <TabsTrigger value="support">Support</TabsTrigger>
                    </TabsList>

                    <CardContent className="p-6">
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6"
                      >
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="name">
                              Full Name <span className="text-red-500">*</span>
                            </Label>
                            <div className="mt-1 relative">
                              <Input
                                id="name"
                                type="text"
                                placeholder="Your name"
                                className="pl-10"
                                {...register("name", {
                                  required: "Name is required",
                                })}
                              />
                              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            </div>
                            {errors.name && (
                              <p className="text-sm text-red-500 mt-1">
                                {errors.name.message}
                              </p>
                            )}
                          </div>

                          <div>
                            <Label htmlFor="email">
                              Email Address{" "}
                              <span className="text-red-500">*</span>
                            </Label>
                            <div className="mt-1 relative">
                              <Input
                                id="email"
                                type="email"
                                placeholder="Your email"
                                className="pl-10"
                                {...register("email", {
                                  required: "Email is required",
                                  pattern: {
                                    value:
                                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                  },
                                })}
                              />
                              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            </div>
                            {errors.email && (
                              <p className="text-sm text-red-500 mt-1">
                                {errors.email.message}
                              </p>
                            )}
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="company">Company</Label>
                              <div className="mt-1 relative">
                                <Input
                                  id="company"
                                  type="text"
                                  placeholder="Your company"
                                  className="pl-10"
                                  {...register("company")}
                                />
                                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              </div>
                            </div>

                            <div>
                              <Label htmlFor="phone">Phone Number</Label>
                              <div className="mt-1 relative">
                                <Input
                                  id="phone"
                                  type="tel"
                                  placeholder="Your phone"
                                  className="pl-10"
                                  {...register("phone")}
                                />
                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              </div>
                            </div>
                          </div>

                          {tabValue === "sales" && (
                            <div>
                              <Label htmlFor="service">
                                Interested Service{" "}
                                <span className="text-red-500">*</span>
                              </Label>
                              <select
                                id="service"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                {...register("service", {
                                  required:
                                    tabValue === "sales"
                                      ? "Please select a service"
                                      : false,
                                })}
                              >
                                <option value="">Select a service</option>
                                <option value="custom-saas">
                                  Custom SaaS Development
                                </option>
                                <option value="cloud">
                                  Cloud Integration & Migration
                                </option>
                                <option value="api">
                                  API Development & Integration
                                </option>
                                <option value="ui-ux">
                                  UI/UX Design for SaaS Products
                                </option>
                                <option value="support">
                                  Maintenance & Support
                                </option>
                              </select>
                              {errors.service && (
                                <p className="text-sm text-red-500 mt-1">
                                  {errors.service.message}
                                </p>
                              )}
                            </div>
                          )}

                          <div>
                            <Label htmlFor="message">
                              Message <span className="text-red-500">*</span>
                            </Label>
                            <div className="mt-1 relative">
                              <textarea
                                id="message"
                                rows={5}
                                placeholder="How can we help you?"
                                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none pl-10"
                                {...register("message", {
                                  required: "Message is required",
                                })}
                              ></textarea>
                              <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            </div>
                            {errors.message && (
                              <p className="text-sm text-red-500 mt-1">
                                {errors.message.message}
                              </p>
                            )}
                          </div>
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-sbuild to-sbuild/90 hover:bg-sbuild/90 h-12"
                          disabled={submitting}
                        >
                          {submitting ? "Sending..." : "Send Message"}
                          {!submitting && (
                            <ArrowRight className="ml-2 h-4 w-4" />
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Tabs>
                </Card>
              </div>

              {/* Contact Information - Replaced the entire Global Presence section */}
              <div
                ref={refRight}
                className={cn(
                  "transition-all duration-700 transform",
                  inViewRight
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                )}
              >
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mb-4">
                      Get in Touch
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      We'd love to hear from you. Feel free to reach out through
                      your preferred channel or visit our office.
                    </p>
                  </div>

                  <div className="mt-8 bg-gradient-to-r from-sbuild/10 to-cyan-500/10 rounded-xl p-6">
                    <h3 className="flex items-center text-lg font-semibold mb-3">
                      <CheckCircle2 className="h-5 w-5 text-sbuild mr-2" />
                      Quick Response Guarantee
                    </h3>
                    <p className="text-muted-foreground">
                      We respond to all inquiries within 24 business hours. Our
                      dedicated team is committed to providing you with the
                      information and support you need.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center py-3 px-6 rounded-lg bg-sbuild text-white hover:bg-sbuild/90 transition-colors"
                    >
                      Schedule a Meeting
                    </a>

                    <a
                      href="tel:+18005550123"
                      className="inline-flex items-center justify-center py-3 px-6 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Us Directly
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about our services and process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: "What type of businesses do you work with?",
                  a: "We work with businesses of all sizes, from startups to enterprises, across various industries. Our solutions are tailored to meet the specific needs of each client.",
                },
                {
                  q: "How long does it typically take to develop a SaaS application?",
                  a: "Development timelines vary based on project complexity. A minimal viable product (MVP) might take 2-3 months, while more complex applications can take 6+ months. We'll provide a detailed timeline during our consultation.",
                },
                {
                  q: "Do you offer ongoing support after the project is completed?",
                  a: "Yes, we offer various maintenance and support plans to ensure your application continues to run smoothly and stays up-to-date with the latest technologies and security standards.",
                },
                {
                  q: "How do you handle data security and privacy?",
                  a: "We implement industry best practices for security at every stage of development. Our solutions comply with relevant regulations (GDPR, HIPAA, etc.) and include features like encryption, secure authentication, and regular security audits.",
                },
                {
                  q: "What is your pricing structure?",
                  a: "We offer flexible pricing models based on project scope, complexity, and timeline. This includes fixed-price projects, time and materials, and retainer options. We'll discuss the most suitable model during our consultation.",
                },
                {
                  q: "Can you help migrate our existing system to the cloud?",
                  a: "Yes, we specialize in cloud migration services. Our team will assess your current system, develop a migration strategy, and execute the transition with minimal disruption to your operations.",
                },
              ].map((faq, i) => (
                <Card
                  key={i}
                  className="shadow-sm hover:shadow-md transition-all border border-gray-100/80"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-muted-foreground mb-4">
                Can't find the answer you're looking for?
              </p>
              <Button className="bg-sbuild hover:bg-sbuild/90">
                Contact Our Support Team
              </Button>
            </div>
          </div>
        </section>

        {/* Map Section - Updated location to Ghana North Legon Papa's Pizza */}
        <section className="py-16">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="rounded-xl overflow-hidden shadow-md border border-gray-100/80 h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.4954901440593!2d-0.18861502424054882!3d5.656700333271369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c7ebaeaaaab%3A0xd78257e67498c1f0!2sPapa&#39;s%20Pizza%20North%20Legon!5e0!3m2!1sen!2sgh!4v1696969347244!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SBuild Office Location - Ghana North Legon"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
