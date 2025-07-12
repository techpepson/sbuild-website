import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Our Work", href: "/work" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Custom SaaS Development", href: "/services#saas" },
        { name: "Cloud Integration", href: "/services#cloud" },
        { name: "API Development", href: "/services#api" },
        { name: "UI/UX Design", href: "/services#design" },
        { name: "Maintenance & Support", href: "/services#support" },
        { name: "Mobile App Development", href: "/services#support" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Case Studies", href: "/case-studies" },
        { name: "FAQs", href: "/faqs" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Careers", href: "/careers" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container px-4 py-16 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <img
                src="/lovable-uploads/6befea8b-db57-4a1b-a6f6-7fc4a54b594b.png"
                alt="SBuild Solutions Logo"
                className="h-10"
              />
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              At SBuild Solutions, we craft scalable and high-performing
              software to drive growth and efficiency for businesses of all
              sizes.
            </p>
            <div className="flex space-x-4">
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61561514013919"
                className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-sbuild hover:bg-sbuild hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                target="_blank"
                href="https://x.com/sbuildsolns"
                className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-sbuild hover:bg-sbuild hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/sbuildsolns/"
                className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-sbuild hover:bg-sbuild hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-sbuild hover:bg-sbuild hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((group, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-sbuild transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-muted-foreground mb-4">
              Stay updated with the latest in SaaS and technology.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="rounded-lg border-gray-200"
              />
              <Button className="bg-sbuild hover:bg-sbuild/90 rounded-lg">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} SBuild Solutions. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-sbuild"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-muted-foreground hover:text-sbuild"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookie-policy"
              className="text-sm text-muted-foreground hover:text-sbuild"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
