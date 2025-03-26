
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isHomePage: boolean;
  scrolled: boolean;
}

const NavLink = ({ to, children, isHomePage, scrolled }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "text-base font-medium transition-colors",
        isHomePage
          ? scrolled ? "text-gray-800 hover:text-sbuild" : "text-white hover:text-white/80"
          : "text-gray-800 hover:text-sbuild"
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
