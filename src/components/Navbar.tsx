
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Update scroll state on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Work', href: '/work' },
  ];
  
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      )}
    >
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 z-10">
            <div className="w-9 h-9 rounded-lg bg-sbuild flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-display font-semibold tracking-tight">
              SBuild<span className="text-sbuild">Solutions</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  location.pathname === item.href
                    ? 'text-sbuild'
                    : 'text-muted-foreground hover:text-sbuild'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Call to Action */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-sbuild hover:bg-sbuild/90">Contact Us</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
          
          {/* Mobile Menu */}
          <div
            className={cn(
              'fixed inset-0 bg-white flex flex-col justify-center items-center space-y-8 transition-all duration-300 md:hidden',
              isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            )}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'text-lg font-medium transition-colors',
                  location.pathname === item.href
                    ? 'text-sbuild'
                    : 'text-muted-foreground hover:text-sbuild'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button className="mt-4 bg-sbuild hover:bg-sbuild/90">Contact Us</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
