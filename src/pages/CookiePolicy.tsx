import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import CallToAction from "@/components/CallToAction";

const CookiePolicy = () => {
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
                Cookie Policy
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
              <h2>Introduction</h2>
              <p>
                SBuild Solutions ("we" or "us" or "our") may use cookies, web
                beacons, tracking pixels, and other tracking technologies when
                you visit our website sbuild.com, including any other media
                form, media channel, mobile website, or mobile application
                related or connected thereto (collectively, the "Site") to help
                customize the Site and improve your experience.
              </p>
              <p>
                We reserve the right to make changes to this Cookie Policy at
                any time and for any reason. We will alert you about any changes
                by updating the "Last Updated" date of this Cookie Policy. Any
                changes or modifications will be effective immediately upon
                posting the updated Cookie Policy on the Site, and you waive the
                right to receive specific notice of each such change or
                modification.
              </p>
              <p>
                You are encouraged to periodically review this Cookie Policy to
                stay informed of updates. You will be deemed to have been made
                aware of, will be subject to, and will be deemed to have
                accepted the changes in any revised Cookie Policy by your
                continued use of the Site after the date such revised Cookie
                Policy is posted.
              </p>

              <h2>Use of Cookies</h2>
              <p>
                A "cookie" is a string of information which assigns you a unique
                identifier that we store on your computer. Your browser then
                provides that unique identifier to use each time you submit a
                query to the Site. We use cookies on the Site to, among other
                things, keep track of services you have used, record
                registration information, record your user preferences, keep you
                logged into the Site, facilitate purchase procedures, and track
                the pages you visit. Cookies help us understand how the Site is
                being used and improve your user experience.
              </p>

              <h2>Types of Cookies</h2>
              <p>
                The following types of cookies may be used when you visit the
                Site:
              </p>

              <h3>Essential Cookies</h3>
              <p>
                Essential cookies are required for providing you with features
                or services that you have requested. For example, certain
                cookies enable you to log into secure areas of our site.
                Disabling these cookies will make certain features and services
                unavailable.
              </p>

              <h3>Functionality Cookies</h3>
              <p>
                Functionality cookies are used to record your choices and
                settings regarding our services, maintain your preferences over
                time and recognize you when you return to our services. These
                cookies help us to personalize our content for you, greet you by
                name, and remember your preferences (for example, your choice of
                language or region).
              </p>

              <h3>Performance Cookies</h3>
              <p>
                Performance cookies collect information about how you use a
                website, like which pages you visited and which links you
                clicked on. None of this information can be used to identify
                you. It is all aggregated and, therefore, anonymized. Their sole
                purpose is to improve website functions. This includes cookies
                from third-party analytics services as long as the cookies are
                for the exclusive use of the owner of the website visited.
              </p>

              <h2>Control of Cookies</h2>
              <p>
                Most browsers are set to accept cookies by default. However, you
                can remove or reject cookies in your browser's settings. Please
                be aware that such action could affect the availability and
                functionality of the Site.
              </p>
              <p>
                For more information on how to control cookies, check your
                browser or device's settings for how you can control or reject
                cookies, or visit the following links:
              </p>
              <ul>
                <li>
                  Apple Safari:{" "}
                  <a
                    href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
                  </a>
                </li>
                <li>
                  Google Chrome:{" "}
                  <a
                    href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://support.google.com/chrome/answer/95647
                  </a>
                </li>
                <li>
                  Microsoft Edge:{" "}
                  <a
                    href="https://support.microsoft.com/en-us/help/4468242/microsoft-edge-browsing-data-and-privacy-microsoft-privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://support.microsoft.com/en-us/help/4468242/microsoft-edge-browsing-data-and-privacy
                  </a>
                </li>
                <li>
                  Mozilla Firefox:{" "}
                  <a
                    href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences
                  </a>
                </li>
              </ul>

              <h2>Other Tracking Technologies</h2>
              <p>
                In addition to cookies, we may use web beacons, pixel tags, and
                other tracking technologies on the Site to help customize the
                Site and improve your experience. A "web beacon" or "pixel tag"
                is a tiny object or image embedded in a web page or email. They
                are used to track the number of users who have visited
                particular pages and viewed emails, and acquire other
                statistical data. They collect only a limited set of data, such
                as a cookie number, time and date of a page or email view, and a
                description of the page or email on which they reside. Web
                beacons and pixel tags cannot be declined. However, you can
                limit their use by controlling the cookies that interact with
                them.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions or comments about this Cookie Policy,
                please contact us at:
              </p>
              <p>
                SBuild Solutions
                <br />
                123 Tech Way
                <br />
                San Francisco, CA 94105
                <br />
                Email: privacy@sbuild.com
                <br />
                Phone: (555) 123-4567
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

export default CookiePolicy;
