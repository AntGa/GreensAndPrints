'use client'
import React from 'react'
import Image from 'next/image'
import AnimatedButton from '../utils/SlideUpButtons/AnimatedButton'
const HeroBanner = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/succs1.jpg"
        alt="Succulent plants"
        fill
        priority
        className="z-0 object-cover"
      />
      {/*Opacity Dim */}
      <div className="z-5 absolute inset-0 bg-black opacity-25"></div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 text-center text-white">
        <h1 className="text-3xl font-semibold md:text-5xl">
          Green Up Your Life with Style.
        </h1>
        <p className="mb-5 mt-2 text-2xl md:text-4xl">
          Discover our Greenery and Prints Collections
        </p>
        <AnimatedButton text="SHOP NOW." ClassName="w-64" link="/search" />
      </div>
    </div>
  )
}

export default HeroBanner
