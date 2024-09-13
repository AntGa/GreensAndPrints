'use client'

import React from 'react'
import { RevealText } from '@/components/utils/RevealText'

export function OurFavourites() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <RevealText
          text="Our Favourites"
          textSize="text-4xl"
          duration={3}
          inView={true}
          once={true}
        />
      </div>
      <div>Products</div>
    </div>
  )
}
