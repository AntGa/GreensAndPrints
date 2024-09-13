'use client'

import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

export default function OurFavouritesCarousel({
  products,
}: {
  products: any[]
}) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: false })

  const handleResize = useCallback(() => {
    if (embla) {
      const screenWidth = window.innerWidth
      embla.reInit({ dragFree: screenWidth <= 1024 })
    }
  }, [embla])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container flex gap-5">
        {products.map((product, i) => (
          <div key={i} className="embla__slide flex flex-col items-center">
            <div className="relative h-[450px] w-[250px] overflow-hidden rounded-xl">
              <Image
                alt={product.title}
                src={product.featuredImage?.url}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold">{product.title}</h3>

            <p className="text-sm text-gray-600">
              {product.description ||
                'This is a placeholder description for the product.'}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
