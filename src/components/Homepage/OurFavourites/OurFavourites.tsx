import React from 'react';
import { RevealText } from '@/components/utils/RevealText';
import { getCollectionProducts } from '@/lib/shopify';
import OurFavouritesCarousel from './OurFavouritesCarousel';

export default async function OurFavourites() {
  const products = await getCollectionProducts({
    collection: 'hidden-homepage-carousel',
  });

  return (
    <div className='text-5 flex w-full max-w-7xl flex-col overflow-hidden p-4 sm:mx-auto'>
      <div className='flex items-center max-sm:flex-col sm:justify-between'>
        <RevealText
          text='Best Sellers'
          className='mb-5 text-4xl font-semibold md:text-5xl'
          duration={3}
          once={false}
        />
        <button className='rounded bg-charcoal-gray px-4 py-2 text-white'>
          Shop Now
        </button>
      </div>

      <OurFavouritesCarousel products={products} />
    </div>
  );
}
