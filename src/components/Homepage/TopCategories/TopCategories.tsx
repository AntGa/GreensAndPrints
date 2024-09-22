import React from 'react';
import { RevealText } from '../../utils/RevealText';
import { CategoriesPreview } from './CategoriesPreview';

export const TopCategories = () => {
  return (
    <div className='flex w-full max-w-7xl flex-col justify-center p-4 sm:mx-auto'>
      <div className='flex max-sm:justify-center md:flex-row'>
        <RevealText
          text='Top Categories'
          className='mb-5 text-4xl font-semibold md:text-5xl'
          duration={3}
          once={false}
        />
      </div>
      <CategoriesPreview />
    </div>
  );
};
