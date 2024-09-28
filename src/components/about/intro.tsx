import React from 'react';
import { RevealText } from '../utils/RevealText';

export const AboutIntro = () => {
  return (
    <div className='flex w-full bg-soft-ivory font-playFair'>
      <div className='w-full'>
        <RevealText
          text='Our journey began with a passion for both sustainability and design.'
          className='my-10 p-10 text-left text-2xl font-semibold md:text-5xl'
        />

        <p className='px-5 text-2xl'>
          Greens And Prints are committed to delivering high-quality prints and
          beatifully arranged succulents that celebrate the harmony between
          nature and artistry. Through our work, we aim to bring the outside in,
          creating spaces that are filled with life, color, and a sense of
          connection to the natural world.
        </p>
        <p className='my-10 px-5 text-2xl'>
          We believe that art has the power to inspire change, so we’re
          committed to making that change by combining arts and greenery that
          can foster creativity while promoting environmental awareness.
        </p>
      </div>
      <div className='my-10 content-center px-5'>
        <img src='images/about-right.png' />
      </div>
    </div>
  );
};
