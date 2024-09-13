'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { RevealText } from '@/components/utils/RevealText'

export function OurFavourites() {
  const text = 'Our Favourites'
  return (
    <div className="flex flex-col">
      <div className="flex">
        <RevealText
          text="Our Favourites"
          textSize="text-4xl"
          duration={2}
          inView={true}
          once={true}
        />
      </div>
      <div>Products</div>
    </div>
  )
}
