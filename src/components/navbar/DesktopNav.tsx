
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import NavLink from './NavLink';

interface DesktopNavProps {
  isHomePage: boolean;
  scrolled: boolean;
}

const DesktopNav = ({ isHomePage, scrolled }: DesktopNavProps) => {
  return (
    <div className="hidden md:flex md:items-center md:justify-between md:flex-1">
      <nav className="flex-1 flex justify-center">
        <div className="flex space-x-8">
          <NavLink to="/" isHomePage={isHomePage} scrolled={scrolled}>
            Home
          </NavLink>
          <NavLink to="/about" isHomePage={isHomePage} scrolled={scrolled}>
            About
          </NavLink>
          <NavLink to="/services" isHomePage={isHomePage} scrolled={scrolled}>
            Services
          </NavLink>
          <NavLink to="/work" isHomePage={isHomePage} scrolled={scrolled}>
            Our Work
          </NavLink>
          <NavLink to="/insights" isHomePage={isHomePage} scrolled={scrolled}>
            Insights
          </NavLink>
        </div>
      </nav>
      <div className="ml-8">
        <Button asChild variant="default" className="bg-sbuild hover:bg-sbuild/90">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
};

export default DesktopNav;
