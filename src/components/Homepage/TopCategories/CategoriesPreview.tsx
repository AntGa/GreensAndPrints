'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { once } from 'events';

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
    transition: { ease: [0.33, 1, 0.68, 1], duration: 2 },
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
      <motion.div
        variants={item}
        className='h-96 w-96 bg-pink-300'
      ></motion.div>
      <motion.div
        variants={item}
        className='h-96 w-96 bg-green-500'
      ></motion.div>
      <motion.div
        variants={item}
        className='h-96 w-96 bg-indigo-500'
      ></motion.div>
    </motion.div>
  );
};
