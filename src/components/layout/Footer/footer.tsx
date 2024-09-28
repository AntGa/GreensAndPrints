import React from 'react';

export const Footer = () => {
  return (
    <div className='bg-classy-green w-full py-20 text-white'>
      <div className='mx-auto flex max-w-7xl gap-11'>
        <div className='flex flex-col'>
          <h1 className='text-4xl'>Greens & Prints</h1>
          <p>© Greens and Prints</p>
        </div>
        <div className='flex flex-col gap-5'>
          <h2 className='text-2xl leading-snug'>Information</h2>
          <p>Shipping Information</p>
          <p>Terms & Conditions</p>
          <p>Returns & Return Policy</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <h2>Information</h2>
        </div>
      </div>
    </div>
  );
};
