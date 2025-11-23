import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center" aria-label="SBuild Solutions">
      <img
        src="/logo.png"
        alt="SBuild Solutions"
        className="h-10 w-auto"
        draggable={false}
      />
    </Link>
  );
};

export default Logo;
