import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface MobileNavLinkProps {
  to: string;
  children: React.ReactNode;
  isHomePage: boolean;
  scrolled: boolean;
  onClick: () => void;
  currentPath: string;
}

const MobileNavLink = ({
  to,
  children,
  isHomePage,
  scrolled,
  onClick,
  currentPath,
}: MobileNavLinkProps) => {
  const isActive = currentPath === to;

  return (
    <li>
      <Link
        to={to}
        className={cn(
          "text-base font-medium block py-2 transition-colors",
          isHomePage && !scrolled
            ? isActive
              ? "text-white font-semibold"
              : "text-white hover:text-white/80"
            : isActive
            ? "text-sbuild font-semibold"
            : "text-gray-800 hover:text-sbuild"
        )}
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
};

export default MobileNavLink;
