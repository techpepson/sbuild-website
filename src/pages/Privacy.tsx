import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import CallToAction from "@/components/CallToAction";

const Privacy = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
                  inView
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-4"
                )}
              >
                Privacy Policy
              </h1>
              <p
                className={cn(
                  "text-lg text-muted-foreground",
                  "transition-all duration-700 delay-100 ease-out",
                  inView
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-4"
                )}
              >
                Last updated: May 15, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <h2>Our Commitment to Privacy</h2>
              <p>
                At SBuild Solutions, we take your privacy seriously. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website or use our
                services. Please read this privacy policy carefully. If you do
                not agree with the terms of this privacy policy, please do not
                access the site.
              </p>

              <h2>Information We Collect</h2>
              <p>
                We may collect information about you in a variety of ways. The
                information we may collect via the Website includes:
              </p>
              <h3>Personal Data</h3>
              <p>
                Personally identifiable information, such as your name, shipping
                address, email address, and telephone number, and demographic
                information, such as your age, gender, hometown, and interests,
                that you voluntarily give to us when you register with the
                Website or when you choose to participate in various activities
                related to the Website.
              </p>
              <h3>Derivative Data</h3>
              <p>
                Information our servers automatically collect when you access
                the Website, such as your IP address, your browser type, your
                operating system, your access times, and the pages you have
                viewed directly before and after accessing the Website.
              </p>

              <h2>Use of Your Information</h2>
              <p>
                Having accurate information about you permits us to provide you
                with a smooth, efficient, and customized experience.
                Specifically, we may use information collected about you via the
                Website to:
              </p>
              <ul>
                <li>Create and manage your account.</li>
                <li>Email you regarding your account or order.</li>
                <li>
                  Fulfill and manage purchases, orders, payments, and other
                  transactions related to the Website.
                </li>
                <li>
                  Generate a personal profile about you to make future visits to
                  the Website more personalized.
                </li>
                <li>Increase the efficiency and operation of the Website.</li>
                <li>
                  Monitor and analyze usage and trends to improve your
                  experience with the Website.
                </li>
                <li>Notify you of updates to the Website.</li>
                <li>
                  Offer new products, services, and/or recommendations to you.
                </li>
                <li>Perform other business activities as needed.</li>
                <li>
                  Request feedback and contact you about your use of the
                  Website.
                </li>
                <li>Resolve disputes and troubleshoot problems.</li>
                <li>Respond to product and customer service requests.</li>
                <li>Send you a newsletter.</li>
              </ul>

              <h2>Disclosure of Your Information</h2>
              <p>
                We may share information we have collected about you in certain
                situations. Your information may be disclosed as follows:
              </p>
              <h3>By Law or to Protect Rights</h3>
              <p>
                If we believe the release of information about you is necessary
                to respond to legal process, to investigate or remedy potential
                violations of our policies, or to protect the rights, property,
                and safety of others, we may share your information as permitted
                or required by any applicable law, rule, or regulation.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy,
                please contact us at:
              </p>
              <p>
                SBuild Solutions
                <br />
                University of Ghana
                <br />
                Accra, Ghana
                <br />
                Email: sbuildsolutions@gmail.com
                <br />
                Phone: +233558628269
              </p>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
