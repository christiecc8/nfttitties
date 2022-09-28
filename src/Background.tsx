import React from 'react';
import { useLocation } from 'react-router-dom';

const Background: React.FC<{}> = () => {
  const location = useLocation()
  if (location.pathname === '/mint') {
    return null;
  }
  
  return (
    <div className="absolute top-0 left-0 z-0 h-full w-full flex flex-col">
      <div className="main-page flex-100 w-full flex-1"></div>
    </div>
  );
};

export default Background;
