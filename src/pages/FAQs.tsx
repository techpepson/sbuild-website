import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CallToAction from '@/components/CallToAction';

const FAQs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqItems = [
    {
      question: "What services does SBuild Solutions offer?",
      answer: "SBuild Solutions specializes in SaaS (Software as a Service) development, cloud integration, API development, UI/UX design, and ongoing maintenance and support services. We create custom software solutions designed to meet your specific business needs and help you scale efficiently."
    },
    {
      question: "How long does it typically take to develop a custom SaaS solution?",
      answer: "The timeline for developing a custom SaaS solution varies based on the complexity and scope of the project. Simple applications might take 2-3 months, while more complex enterprise solutions can take 6 months or longer. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements."
    },
    {
      question: "What technologies do you use for development?",
      answer: "We use a variety of modern technologies depending on the project requirements. Our tech stack typically includes React, Angular, or Vue.js for frontend development; Node.js, Python, or .NET for backend; and AWS, Google Cloud, or Azure for cloud infrastructure. We're always focused on using the best tools for each specific project."
    },
    {
      question: "How do you ensure the security of SaaS applications?",
      answer: "Security is a top priority in all our developments. We implement industry best practices including data encryption, secure authentication methods, regular security audits, and compliance with relevant regulations like GDPR or HIPAA when applicable. We also provide ongoing security updates and monitoring for all our solutions."
    },
    {
      question: "Can you help migrate our existing software to the cloud?",
      answer: "Yes, cloud migration is one of our core services. We help businesses transition from on-premises or legacy systems to modern cloud-based solutions. Our process involves a thorough assessment of your current system, developing a migration strategy, implementing the migration with minimal disruption, and providing support throughout the transition."
    },
    {
      question: "Do you offer support and maintenance after the project is completed?",
      answer: "Absolutely. We offer various support and maintenance packages to ensure your software continues to run smoothly and stays up-to-date with the latest security patches and technology updates. Our support includes technical assistance, bug fixes, feature enhancements, and performance optimization."
    },
    {
      question: "How do you handle project management and communication?",
      answer: "We use an agile development approach with regular client touchpoints throughout the project. You'll have a dedicated project manager who will provide weekly updates, demos of progress, and clear communication about timelines and milestones. We use collaboration tools like Jira, Slack, and Microsoft Teams to facilitate communication."
    },
    {
      question: "What if I want to make changes or add features after the project has started?",
      answer: "We understand that requirements can evolve during the development process. Our agile methodology allows for flexibility in making changes. We'll evaluate the requested changes, discuss any impact on the timeline or budget, and work with you to incorporate them in a way that maintains the quality and integrity of the solution."
    },
    {
      question: "Can you integrate with existing systems or third-party software?",
      answer: "Yes, we specialize in system integrations. We can connect your new SaaS solution with existing business systems, CRMs, ERPs, payment processors, or any third-party tools you use. Our API development capabilities ensure smooth data flow between different systems."
    },
    {
      question: "How do you price your services?",
      answer: "Our pricing depends on the scope and complexity of your project. We typically offer either fixed-price quotes for well-defined projects or time-and-materials pricing for projects with evolving requirements. After our initial consultation and requirements gathering, we'll provide a detailed proposal with transparent pricing."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 md:pt-32">
        {/* Header */}
        <section ref={ref} className="py-12 md:py-20 bg-gray-50">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
              <h1 
                className={cn(
                  "text-4xl md:text-5xl font-display font-semibold tracking-tight mb-6",
                  "transition-all duration-700 ease-out",
                  inView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
                )}
              >
                Frequently Asked Questions
              </h1>
              <p 
                className={cn(
                  "text-lg text-muted-foreground",
                  "transition-all duration-700 delay-100 ease-out",
                  inView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
                )}
              >
                Find answers to common questions about our services and processes.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className={cn(
                      "border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm",
                      "transition-all duration-500 transform",
                      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                      `delay-${index * 50}`
                    )}
                  >
                    <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
                Didn't Find Your Answer?
              </h2>
              <p className="text-muted-foreground mb-8">
                Contact our team directly and we'll be happy to help with any questions you have.
              </p>
              <div className="flex justify-center">
                <Link to="/contact" className="bg-sbuild hover:bg-sbuild/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
