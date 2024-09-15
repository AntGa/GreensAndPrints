import React from 'react'
import { RevealText } from '@/components/utils/RevealText'
import { getCollectionProducts } from '@/lib/shopify'
import OurFavouritesCarousel from './OurFavouritesCarousel'
import { SlideUpButton } from '@/components/utils/SlideUpButtons/SlideUpButtonSimple'
import AnimatedButton from '@/components/utils/SlideUpButtons/AnimatedButton'
export default async function OurFavourites() {
  const products = await getCollectionProducts({
    collection: 'hidden-homepage-carousel',
  })

  return (
    <div className="flex w-full max-w-7xl flex-col overflow-hidden p-4 sm:mx-auto">
      <div className="mb-5 flex items-center max-sm:flex-col sm:justify-between">
        <RevealText
          text="Our Favourites"
          className="mb-4 text-4xl font-semibold md:mb-0 md:text-5xl"
          duration={3}
          once={false}
        />
        <AnimatedButton text="SHOP NOW" ClassName="" link="/search" />
      </div>
      <OurFavouritesCarousel products={products} />
    </div>
  )
}
