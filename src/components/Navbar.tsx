
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
        "sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md transition-all",
        scrolled ? "shadow-sm py-3" : "py-4"
      )}
      style={{ "--header-height": scrolled ? "64px" : "80px" } as React.CSSProperties}
    >
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 4C18.5 4 15 6.5 15 10.5C15 14.5 11.5 17 7.5 17C3.5 17 0 19.5 0 23.5C0 27.5 3.5 30 7.5 30C11.5 30 15 27.5 15 23.5C15 19.5 18.5 17 22.5 17C26.5 17 30 14.5 30 10.5C30 6.5 26.5 4 22.5 4Z" fill="#059669"/>
              </svg>
              <span className="font-bold text-xl tracking-tight">SBuild</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-between md:flex-1">
            <nav className="flex-1 flex justify-center">
              <div className="flex space-x-8">
                <Link to="/" className="text-base font-medium text-gray-700 hover:text-sbuild transition-colors">
                  Home
                </Link>
                <Link to="/about" className="text-base font-medium text-gray-700 hover:text-sbuild transition-colors">
                  About
                </Link>
                <Link to="/services" className="text-base font-medium text-gray-700 hover:text-sbuild transition-colors">
                  Services
                </Link>
                <Link to="/work" className="text-base font-medium text-gray-700 hover:text-sbuild transition-colors">
                  Our Work
                </Link>
                <Link to="/insights" className="text-base font-medium text-gray-700 hover:text-sbuild transition-colors">
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
            className="p-2 md:hidden"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "absolute left-0 right-0 md:hidden bg-white border-t border-gray-100 shadow-md z-40 transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-[400px] opacity-100 visible" : "max-h-0 opacity-0 invisible overflow-hidden"
        )}
      >
        <nav className="container px-4 py-4 mx-auto max-w-7xl">
          <ul className="space-y-4">
            <li>
              <Link 
                to="/" 
                className="text-base font-medium text-gray-700 hover:text-sbuild transition-colors block py-2"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-base font-medium text-gray-700 hover:text-sbuild transition-colors block py-2"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className="text-base font-medium text-gray-700 hover:text-sbuild transition-colors block py-2"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/work" 
                className="text-base font-medium text-gray-700 hover:text-sbuild transition-colors block py-2"
                onClick={closeMobileMenu}
              >
                Our Work
              </Link>
            </li>
            <li>
              <Link 
                to="/insights" 
                className="text-base font-medium text-gray-700 hover:text-sbuild transition-colors block py-2"
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
