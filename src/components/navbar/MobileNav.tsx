import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import MobileNavLink from "./MobileNavLink";

interface MobileNavProps {
  isOpen: boolean;
  isHomePage: boolean;
  scrolled: boolean;
  onClose: () => void;
  currentPath: string;
}

const MobileNav = ({
  isOpen,
  isHomePage,
  scrolled,
  onClose,
  currentPath,
}: MobileNavProps) => {
  return (
    <div
      className={cn(
        "absolute left-0 right-0 md:hidden backdrop-blur-md border-t shadow-md z-40 transition-all duration-300 ease-in-out",
        isHomePage && !scrolled
          ? "bg-black/80 border-white/10"
          : "bg-white/90 border-gray-200/20",
        isOpen
          ? "max-h-[400px] opacity-100 visible"
          : "max-h-0 opacity-0 invisible overflow-hidden"
      )}
    >
      <nav className="container px-4 py-4 mx-auto max-w-7xl">
        <ul className="space-y-4">
          <MobileNavLink
            to="/about"
            isHomePage={isHomePage}
            scrolled={scrolled}
            onClick={onClose}
            currentPath={currentPath}
          >
            About
          </MobileNavLink>
          <MobileNavLink
            to="/services"
            isHomePage={isHomePage}
            scrolled={scrolled}
            onClick={onClose}
            currentPath={currentPath}
          >
            Services
          </MobileNavLink>
          <MobileNavLink
            to="/work"
            isHomePage={isHomePage}
            scrolled={scrolled}
            onClick={onClose}
            currentPath={currentPath}
          >
            Our Work
          </MobileNavLink>
          <MobileNavLink
            to="/insights"
            isHomePage={isHomePage}
            scrolled={scrolled}
            onClick={onClose}
            currentPath={currentPath}
          >
            Insights
          </MobileNavLink>
          <li className="pt-2">
            <Button
              asChild
              variant="default"
              className="w-full bg-sbuild hover:bg-sbuild/90"
            >
              <Link to="/contact" onClick={onClose}>
                Contact Us
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
