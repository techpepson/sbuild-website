
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
      // Calculate hero section height (approximate)
      const heroHeight = window.innerHeight * 0.9; // 90% of viewport height
      
      if (window.scrollY > heroHeight) {
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
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        scrolled 
          ? "bg-white/80 backdrop-blur-md border-gray-200/20 shadow-sm py-3" 
          : "bg-transparent border-transparent py-4"
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
                <Link to="/" className={cn(
                  "text-base font-medium transition-colors",
                  scrolled ? "text-gray-800 hover:text-sbuild" : "text-white hover:text-white/80"
                )}>
                  Home
                </Link>
                <Link to="/about" className={cn(
                  "text-base font-medium transition-colors",
                  scrolled ? "text-gray-800 hover:text-sbuild" : "text-white hover:text-white/80"
                )}>
                  About
                </Link>
                <Link to="/services" className={cn(
                  "text-base font-medium transition-colors",
                  scrolled ? "text-gray-800 hover:text-sbuild" : "text-white hover:text-white/80"
                )}>
                  Services
                </Link>
                <Link to="/work" className={cn(
                  "text-base font-medium transition-colors",
                  scrolled ? "text-gray-800 hover:text-sbuild" : "text-white hover:text-white/80"
                )}>
                  Our Work
                </Link>
                <Link to="/insights" className={cn(
                  "text-base font-medium transition-colors",
                  scrolled ? "text-gray-800 hover:text-sbuild" : "text-white hover:text-white/80"
                )}>
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
          "absolute left-0 right-0 md:hidden backdrop-blur-md border-t shadow-md z-40 transition-all duration-300 ease-in-out",
          scrolled ? "bg-white/90 border-gray-200/20" : "bg-black/80 border-white/10",
          mobileMenuOpen ? "max-h-[400px] opacity-100 visible" : "max-h-0 opacity-0 invisible overflow-hidden"
        )}
      >
        <nav className="container px-4 py-4 mx-auto max-w-7xl">
          <ul className="space-y-4">
            <li>
              <Link 
                to="/" 
                className={cn(
                  "text-base font-medium block py-2 transition-colors",
                  scrolled ? "text-gray-800 hover:text-sbuild" : "text-white hover:text-white/80"
                )}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={cn(
                  "text-base font-medium block py-2 transition-colors",
                  scrolled ? "text-gray-800 hover:text-sbuild" : "text-white hover:text-white/80"
                )}
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={cn(
                  "text-base font-medium block py-2 transition-colors",
                  scrolled ? "text-gray-800 hover:text-sbuild" : "text-white hover:text-white/80"
                )}
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/work" 
                className={cn(
                  "text-base font-medium block py-2 transition-colors",
                  scrolled ? "text-gray-800 hover:text-sbuild" : "text-white hover:text-white/80"
                )}
                onClick={closeMobileMenu}
              >
                Our Work
              </Link>
            </li>
            <li>
              <Link 
                to="/insights" 
                className={cn(
                  "text-base font-medium block py-2 transition-colors",
                  scrolled ? "text-gray-800 hover:text-sbuild" : "text-white hover:text-white/80"
                )}
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
