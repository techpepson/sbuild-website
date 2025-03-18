
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/#features' },
    { name: 'Contact', path: '/#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-10',
        isScrolled ? 'py-2 glass-morphism' : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative h-9 w-9 overflow-hidden rounded-full bg-accent animate-pulse-soft">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/60 rounded-full" />
            </div>
            <span className="text-xl font-display font-semibold tracking-tight">Decentralize</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={cn(
                      'text-sm font-medium relative transition-colors duration-300 ease-in-out',
                      'after:content-[""] after:block after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300',
                      'hover:text-accent hover:after:w-full',
                      (location.pathname === link.path || 
                       (link.path.includes('#') && location.pathname === '/' && location.hash === link.path.substring(1))) 
                        ? 'text-accent after:w-full' 
                        : 'text-foreground/80'
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button className="bg-accent hover:bg-accent/90 transition-all duration-300">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="p-2"
              onClick={handleMobileMenuToggle}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-slide-up">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={cn(
                      'block py-2 text-base transition-colors duration-300',
                      (location.pathname === link.path || 
                       (link.path.includes('#') && location.pathname === '/' && location.hash === link.path.substring(1))) 
                        ? 'text-accent font-medium' 
                        : 'text-foreground/80'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-4 pb-1">
              <Button className="w-full bg-accent hover:bg-accent/90 transition-all duration-300">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
