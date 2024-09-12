import React from 'react'
import { getCollectionProducts } from '@/lib/shopify'

export async function OurFavCarousel() {
  const products = await getCollectionProducts({
    collection: 'hidden-homepage-carousel',
  })
  console.log(products)
  return <div>OurFavCarousel</div>
}
