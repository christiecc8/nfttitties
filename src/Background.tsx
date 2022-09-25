import React from 'react';

const Background: React.FC<{}> = () => {
  return (
    <div className="absolute top-0 left-0 z-0 h-[calc(100%+64px)] w-full flex flex-col -mt-16">
      <div className="main-page flex-100 w-full flex-1"></div>
    </div>
  );
};

export default Background;
