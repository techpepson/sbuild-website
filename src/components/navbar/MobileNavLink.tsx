
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface MobileNavLinkProps {
  to: string;
  children: React.ReactNode;
  isHomePage: boolean;
  scrolled: boolean;
  onClick: () => void;
}

const MobileNavLink = ({ to, children, isHomePage, scrolled, onClick }: MobileNavLinkProps) => {
  return (
    <li>
      <Link 
        to={to} 
        className={cn(
          "text-base font-medium block py-2 transition-colors",
          isHomePage && !scrolled ? "text-white hover:text-white/80" : "text-gray-800 hover:text-sbuild"
        )}
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
};

export default MobileNavLink;
