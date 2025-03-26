
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
        "sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-md transition-all",
        scrolled ? "shadow-lg py-3" : "py-4"
      )}
      style={{ "--header-height": scrolled ? "64px" : "80px" } as React.CSSProperties}
    >
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/0844fa11-deda-490d-88d1-0f95f51ce885.png" 
                alt="SBuild Solutions Logo" 
                className="h-10" 
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-between md:flex-1">
            <nav className="flex-1 flex justify-center">
              <div className="flex space-x-8">
                <Link to="/" className="text-base font-medium text-white hover:text-sbuild transition-colors">
                  Home
                </Link>
                <Link to="/about" className="text-base font-medium text-white hover:text-sbuild transition-colors">
                  About
                </Link>
                <Link to="/services" className="text-base font-medium text-white hover:text-sbuild transition-colors">
                  Services
                </Link>
                <Link to="/work" className="text-base font-medium text-white hover:text-sbuild transition-colors">
                  Our Work
                </Link>
                <Link to="/insights" className="text-base font-medium text-white hover:text-sbuild transition-colors">
                  Insights
                </Link>
              </div>
            </nav>
            <div className="ml-8">
              <Button asChild variant="default" className="bg-sbuild hover:bg-sbuild/90">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            onClick={toggleMobileMenu}
            className="p-2 md:hidden text-white"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "absolute left-0 right-0 md:hidden bg-black/80 backdrop-blur-md border-t border-white/10 shadow-md z-40 transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-[400px] opacity-100 visible" : "max-h-0 opacity-0 invisible overflow-hidden"
        )}
      >
        <nav className="container px-4 py-4 mx-auto max-w-7xl">
          <ul className="space-y-4">
            <li>
              <Link 
                to="/" 
                className="text-base font-medium text-white hover:text-sbuild transition-colors block py-2"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-base font-medium text-white hover:text-sbuild transition-colors block py-2"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className="text-base font-medium text-white hover:text-sbuild transition-colors block py-2"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/work" 
                className="text-base font-medium text-white hover:text-sbuild transition-colors block py-2"
                onClick={closeMobileMenu}
              >
                Our Work
              </Link>
            </li>
            <li>
              <Link 
                to="/insights" 
                className="text-base font-medium text-white hover:text-sbuild transition-colors block py-2"
                onClick={closeMobileMenu}
              >
                Insights
              </Link>
            </li>
            <li className="pt-2">
              <Button asChild variant="default" className="w-full bg-sbuild hover:bg-sbuild/90">
                <Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
