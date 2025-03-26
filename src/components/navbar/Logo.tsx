
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="flex items-center gap-2">
        <img 
          src="/lovable-uploads/0844fa11-deda-490d-88d1-0f95f51ce885.png" 
          alt="SBuild Solutions Logo" 
          className="h-10" 
        />
      </div>
    </Link>
  );
};

export default Logo;
