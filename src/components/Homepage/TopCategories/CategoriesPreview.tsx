'use client';

import React from 'react';

import Image from 'next/image';

export const CategoriesPreview = () => {
  return (
    <div className='clipped flex flex-col items-center justify-around gap-4 md:flex-row'>
      <div className='relative h-96 w-96'>
        <Image
          src='/assets/temp/planttable.jpg'
          alt='planttable'
          fill
          className='object-cover'
        />
      </div>
      <div className='relative h-96 w-96'>
        <Image
          src='/assets/temp/plant.jpg'
          alt='plant'
          fill
          className='object-cover'
        />
      </div>
      <div className='relative h-96 w-96'>
        <Image
          src='/assets/temp/sign.jpg'
          alt='sign'
          fill
          className='object-cover'
        />
      </div>
    </div>
  );
};
