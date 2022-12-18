import React from 'react';

const Graphic = () => {
  return (
    <div class="relative w-full h-full">
      <div class="z-20 absolute top-4 left-0 md:top-4 md:left-0 bg-yellow-400 w-3/6 h-3/6 rounded-full"></div>
      <div class="z-0 absolute top-0 left-8 md:top-0 md:left-16 bg-red-600 w-4/6 h-4/6 rounded-full"></div>
      <div class="z-10 absolute top-24 left-6 md:top-28 md:left-14 bg-blue-600 w-2/5 h-2/5 rounded-full"></div>
    </div>
  );
};

export default Graphic;
