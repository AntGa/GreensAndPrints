'use client';
import React from 'react';

const HeroCarousel = () => {
  return (
    <div className='h-dvh w-full overflow-hidden'>
      <div className='big-image'>
        <div className='flex h-full w-full flex-col items-center justify-center p-4 text-center text-white'>
          <h1 className='text-3xl font-semibold md:text-5xl'>
            Green Up Your Life with Style.
          </h1>
          <p className='mt-2 text-2xl md:text-4xl'>
            Discover our Greenery and Prints Collections
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
