import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isHomePage: boolean;
  scrolled: boolean;
  currentPath: string;
}

const NavLink = ({
  to,
  children,
  isHomePage,
  scrolled,
  currentPath,
}: NavLinkProps) => {
  const isActive = currentPath === to;

  return (
    <Link
      to={to}
      className={cn(
        "text-base font-medium transition-colors relative",
        isHomePage
          ? scrolled
            ? isActive
              ? "text-sbuild font-semibold"
              : "text-gray-800 hover:text-sbuild"
            : isActive
            ? "text-white font-semibold"
            : "text-white hover:text-white/80"
          : isActive
          ? "text-sbuild font-semibold"
          : "text-gray-800 hover:text-sbuild"
      )}
    >
      {children}
      {isActive && (
        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sbuild rounded-full" />
      )}
    </Link>
  );
};

export default NavLink;
