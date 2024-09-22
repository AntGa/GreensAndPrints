'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 500, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { ease: [0.33, 1, 0.68, 1], duration: 3.5 },
  },
};

export const CategoriesPreview = () => {
  return (
    <motion.div
      variants={container}
      initial='hidden'
      whileInView='show'
      custom={3}
      viewport={{ once: true }}
      className='clipped flex flex-col items-center justify-around gap-4 md:flex-row'
    >
      <motion.div variants={item} className='relative h-96 w-96'>
        <Image
          src='/assets/temp/planttable.jpg'
          alt='planttable'
          fill
          objectFit='cover'
        />
      </motion.div>
      <motion.div variants={item} className='relative h-96 w-96'>
        <Image
          src='/assets/temp/plant.jpg'
          alt='plant'
          fill
          objectFit='cover'
        />
      </motion.div>
      <motion.div variants={item} className='relative h-96 w-96'>
        <Image src='/assets/temp/sign.jpg' alt='sign' fill objectFit='cover' />
      </motion.div>
    </motion.div>
  );
};
