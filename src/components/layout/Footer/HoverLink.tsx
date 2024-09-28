'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface HoverLinkProps {
  children: React.ReactNode;
  href: string;
}

const linkContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.01,
    },
  },
};

const underline = {
  hidden: {
    width: 0,
    left: '50%',
    opacity: 0,
    transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
  },
  show: {
    width: '100%',
    left: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
  },
};

export const HoverLink: React.FC<HoverLinkProps> = ({ children, href }) => {
  return (
    <motion.div
      className='group relative cursor-pointer'
      initial='hidden'
      whileHover='show'
      variants={linkContainer}
    >
      <span>
        <Link href={href}>{children}</Link>
      </span>
      <motion.div
        className='absolute bottom-0 left-0 h-[1px] bg-white'
        variants={underline}
      />
    </motion.div>
  );
};
