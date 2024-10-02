import React from 'react';
import { HoverLink } from './HoverLink';
export const Footer = () => {
  return (
    <div className='w-full bg-classy-green py-20 text-white'>
      <div className='mx-auto flex max-w-7xl flex-col gap-11 max-md:items-center md:flex-row'>
        <div className='flex flex-col'>
          <h1 className='text-4xl'>Greens & Prints</h1>
          <p>© Greens and Prints</p>
        </div>
        <div className='flex flex-col items-center gap-5'>
          <h2 className='text-2xl leading-snug'>Information</h2>
          <HoverLink href='/information/shipping'>
            Shipping Information
          </HoverLink>
          <HoverLink href='/information/termsandconditions'>
            Terms & Conditions
          </HoverLink>
          <HoverLink href='/information/returnsandrefund'>
            Returns & Return Policy
          </HoverLink>
          <HoverLink href='/information/privacypolicy'>
            Privacy Policy
          </HoverLink>
          <HoverLink href='/information/contact'>Contact</HoverLink>
        </div>
      </div>
    </div>
  );
};
