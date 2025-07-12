import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavLink from "./NavLink";

interface DesktopNavProps {
  isHomePage: boolean;
  scrolled: boolean;
  currentPath: string;
}

const DesktopNav = ({ isHomePage, scrolled, currentPath }: DesktopNavProps) => {
  return (
    <div className="hidden md:flex md:items-center md:justify-between md:flex-1">
      <nav className="flex-1 flex justify-center">
        <div className="flex space-x-8">
          <NavLink
            to="/about"
            isHomePage={isHomePage}
            scrolled={scrolled}
            currentPath={currentPath}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            isHomePage={isHomePage}
            scrolled={scrolled}
            currentPath={currentPath}
          >
            Services
          </NavLink>
          <NavLink
            to="/work"
            isHomePage={isHomePage}
            scrolled={scrolled}
            currentPath={currentPath}
          >
            Our Work
          </NavLink>
          <NavLink
            to="/insights"
            isHomePage={isHomePage}
            scrolled={scrolled}
            currentPath={currentPath}
          >
            Insights
          </NavLink>
        </div>
      </nav>
      <div className="ml-8">
        <Button
          asChild
          variant="default"
          className="bg-sbuild hover:bg-sbuild/90"
        >
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
};

export default DesktopNav;
