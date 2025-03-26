
import React from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

interface MobileMenuToggleProps {
  isOpen: boolean;
  isHomePage: boolean;
  scrolled: boolean;
  onClick: () => void;
}

const MobileMenuToggle = ({ isOpen, isHomePage, scrolled, onClick }: MobileMenuToggleProps) => {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "p-2 md:hidden",
        isHomePage && !scrolled ? "text-white" : "text-gray-800"
      )}
      aria-label="Toggle mobile menu"
    >
      {isOpen ? <X /> : <Menu />}
    </button>
  );
};

export default MobileMenuToggle;
