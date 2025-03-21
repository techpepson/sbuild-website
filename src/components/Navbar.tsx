import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

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
    <header className={cn(
      "sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md transition-all",
      scrolled ? "shadow-sm py-3" : "py-4"
    )}>
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl tracking-tight">
              SBuild
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/about" className="text-lg font-medium hover:text-sbuild transition-colors">
              About
            </Link>
            <Link to="/services" className="text-lg font-medium hover:text-sbuild transition-colors">
              Services
            </Link>
            <Link to="/work" className="text-lg font-medium hover:text-sbuild transition-colors">
              Work
            </Link>
            <Link to="/insights" className="text-lg font-medium hover:text-sbuild transition-colors">
              Insights
            </Link>
            <Link to="/contact" className="text-lg font-medium hover:text-sbuild transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button 
            onClick={toggleMobileMenu}
            className="p-2 md:hidden"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Fixed this to ensure links are visible */}
      <div className={cn(
        "md:hidden bg-white border-t border-gray-100 absolute left-0 right-0 shadow-md transition-all duration-300 ease-in-out overflow-hidden",
        mobileMenuOpen ? "max-h-[500px] opacity-100 z-50" : "max-h-0 opacity-0 -z-10"
      )}>
        <nav className="container px-4 py-4 mx-auto max-w-7xl">
          <ul className="space-y-4">
            <li>
              <Link 
                to="/about" 
                className="text-lg font-medium hover:text-sbuild transition-colors block py-2"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className="text-lg font-medium hover:text-sbuild transition-colors block py-2"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/work" 
                className="text-lg font-medium hover:text-sbuild transition-colors block py-2"
                onClick={closeMobileMenu}
              >
                Work
              </Link>
            </li>
            <li>
              <Link 
                to="/insights" 
                className="text-lg font-medium hover:text-sbuild transition-colors block py-2"
                onClick={closeMobileMenu}
              >
                Insights
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="text-lg font-medium hover:text-sbuild transition-colors block py-2"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
