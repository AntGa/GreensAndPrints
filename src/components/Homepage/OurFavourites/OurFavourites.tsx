import React from 'react'
import { RevealText } from '@/components/utils/RevealText'
import { getCollectionProducts } from '@/lib/shopify'
import OurFavouritesCarousel from './OurFavouritesCarousel'

export default async function OurFavourites() {
  // Fetch products data from Shopify
  const products = await getCollectionProducts({
    collection: 'hidden-homepage-carousel',
  })

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <RevealText
          text="Our Favourites"
          textSize="text-4xl"
          duration={3}
          inView={true}
          once={true}
        />
        {/* Example Button */}
        <button className="rounded bg-green-500 px-4 py-2 text-white">
          Cool Button
        </button>
      </div>

      {/* Pass the products to the Carousel */}
      <OurFavouritesCarousel products={products} />

      <div>Products</div>
    </div>
  )
}
