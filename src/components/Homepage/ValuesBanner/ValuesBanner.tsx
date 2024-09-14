'use client';

import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export const ValuesBanner = () => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [isMobile, setIsMobile] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  const handleResize = useCallback(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 1024);
    }
  }, []);

  const handleSelect = useCallback(() => {
    if (embla) {
      setSelectedIndex(embla.selectedScrollSnap());
    }
  }, [embla]);

  const checkSlides = useCallback(() => {
    if (embla) {
      const slideCount = embla.scrollSnapList().length;
      setSlideCount(slideCount);
    }
  }, [embla]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [handleResize]);

  useEffect(() => {
    if (embla) {
      embla.on('select', handleSelect);
      checkSlides();
    }
  }, [embla, handleSelect, checkSlides]);

  useEffect(() => {
    if (embla) {
      embla.reInit({
        watchDrag: (emblaApi, event) => {
          if (!isMobile) {
            return false;
          }
          return true;
        },
      });
    }
  }, [embla, isMobile, slideCount]);

  const handleIndicatorClick = (index: number) => {
    if (embla) {
      embla.scrollTo(index);
    }
  };

  const numberOfSlides = 3;
  return (
    <div className='values-carousel embla w-full bg-soft-ivory'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container mx-auto flex'>
          <div className='embla__slide flex w-full flex-col px-4'>
            <h2 className='text-3xl font-bold'>Globally Sourced.</h2>
            <h2 className='mb-2 text-3xl font-bold'>Locally Crafted</h2>
            <p className='font-geist font-normal'>
              Carefully selected, sustainably cultivated plants grown in our
              local greenhouse right here in Auckland.
            </p>
          </div>
          <div className='embla__slide flex w-full flex-col px-4'>
            <h2 className='text-3xl font-bold'>Hand-Picked Quality.</h2>
            <h2 className='mb-2 text-3xl font-bold'>Sustainably Grown</h2>
            <p className='font-geist font-normal'>
              We pride ourselves on hand-picking every plant to ensure premium
              quality and sustainability.
            </p>
          </div>
          <div className='embla__slide flex w-full flex-col px-4'>
            <h2 className='text-3xl font-bold'>Delivered with Care.</h2>
            <h2 className='mb-2 text-3xl font-bold'>Responsibly Packaged</h2>
            <p className='font-geist font-normal'>
              Our plants are responsibly packaged and delivered to your doorstep
              with the utmost care.
            </p>
          </div>
        </div>
      </div>

      {isMobile && (
        <div className='progress-indicators mt-4 flex justify-center'>
          {Array(numberOfSlides)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`progress-rectangle cursor-pointer ${
                  index === selectedIndex ? 'bg-green-500' : 'bg-gray-300'
                } mx-2 h-2 w-8`}
              />
            ))}
        </div>
      )}
    </div>
  );
};
