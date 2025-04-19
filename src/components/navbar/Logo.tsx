
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="flex items-center gap-2">
        <img 
          src="/lovable-uploads/8b5085f4-86cd-4d7b-ac88-e42bab520661.png" 
          alt="SBuild Solutions Logo" 
          className="h-10" 
        />
      </div>
    </Link>
  );
};

export default Logo;
