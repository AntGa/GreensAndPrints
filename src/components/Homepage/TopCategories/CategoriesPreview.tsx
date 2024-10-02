'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const CategoriesPreview = () => {
  return (
    <div className='clipped flex flex-col items-center justify-around gap-4 md:flex-row'>
      <div className='flex h-96 w-96 flex-col items-center'>
        <div className='relative h-3/4 w-full'>
          <Link href='search/plants'>
            <Image
              src='/assets/temp/planttable.jpg'
              alt='planttable'
              fill
              className='object-cover'
            />
          </Link>
        </div>
        <h2 className='mt-2 text-3xl'>Plants</h2>
      </div>
      <div className='flex h-96 w-96 flex-col items-center'>
        <div className='relative h-3/4 w-full'>
          <Link href='search/succulents'>
            <Image
              src='/assets/temp/plant.jpg'
              alt='plant'
              fill
              className='object-cover'
            />
          </Link>
        </div>

        <h2 className='mt-2 text-3xl'>Succulents</h2>
      </div>
      <div className='flex h-96 w-96 flex-col items-center'>
        <div className='relative h-3/4 w-full'>
          <Link href='search/signs'>
            <Image
              src='/assets/temp/sign.jpg'
              alt='sign'
              fill
              className='object-cover'
            />
          </Link>
        </div>
        <h2 className='mt-2 text-3xl'>Signs</h2>
      </div>
    </div>
  );
};
