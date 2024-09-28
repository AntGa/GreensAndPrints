'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  textclassName?: string;
  className?: string;
  duration?: number;
  once?: boolean;
}

const container = {
  hidden: {},
  show: (duration: number) => ({
    transition: {
      staggerChildren: 0.01,
    },
  }),
};

const item = {
  hidden: { y: 100 },
  show: { y: 0, transition: { ease: [0.33, 1, 0.68, 1], duration: 2 } },
};

export const RevealText: React.FC<AnimatedTextProps> = ({
  text,
  className = 'text-4xl',
  textclassName = ' ',
  duration = 2,
  once = true,
}) => {
  return (
    <motion.div
      className={`clipped ${className}`}
      variants={container}
      initial='hidden'
      whileInView='show'
      custom={duration}
      viewport={once ? { once } : undefined}
    >
      {text.split('').map((char, index) => (
        <motion.span
          className={`inline-block ${textclassName}`}
          variants={item}
          key={index}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};
