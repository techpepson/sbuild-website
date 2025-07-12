import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import MobileMenuToggle from "./MobileMenuToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 border-b",
        isHomePage
          ? scrolled
            ? "bg-white/80 backdrop-blur-md border-gray-200/20 shadow-sm py-3"
            : "bg-transparent border-transparent py-4"
          : "bg-white/80 backdrop-blur-md border-gray-200/20 shadow-sm py-3"
      )}
      style={
        { "--header-height": scrolled ? "64px" : "80px" } as React.CSSProperties
      }
    >
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <Logo />
          <DesktopNav
            isHomePage={isHomePage}
            scrolled={scrolled}
            currentPath={location.pathname}
          />
          <MobileMenuToggle
            isOpen={mobileMenuOpen}
            isHomePage={isHomePage}
            scrolled={scrolled}
            onClick={toggleMobileMenu}
          />
        </div>
      </div>

      <MobileNav
        isOpen={mobileMenuOpen}
        isHomePage={isHomePage}
        scrolled={scrolled}
        onClose={closeMobileMenu}
        currentPath={location.pathname}
      />
    </header>
  );
};

export default Navbar;
