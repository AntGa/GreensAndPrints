import React from 'react';
import { RevealText } from '@/components/utils/RevealText';
const page = () => {
  return (
    <div className='mt-[80px] flex h-screen w-screen flex-col p-10'>
      <RevealText
        text='Contact us'
        className='my-10 text-left text-2xl font-semibold md:text-5xl'
      />
      Contact Raymond at greensandprintsstore@gmail.com
    </div>
  );
};

export default page;
