'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const sidebarVariants = {
    open: {
      x: 0,
      transition: { ease: [0.61, 1, 0.88, 1], duration: 1 },
    },
    closed: {
      x: '-100%',
      transition: { ease: [0.61, 1, 0.88, 1], duration: 1 },
    },
  };

  return (
    <motion.div
      className='fixed left-0 top-0 z-40 h-full bg-soft-ivory'
      initial='closed'
      animate={isOpen ? 'open' : 'closed'}
      variants={sidebarVariants}
      style={{
        width: '100%',
        maxWidth: '728px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className='p-6'>
        <button onClick={onClose} className='text-black'>
          Close
        </button>
        <ul className='mt-4 flex flex-col space-y-4'>
          <li>
            <Link href='/search'>All Products</Link>
          </li>
          <li>
            <Link href='/information/contact'>Contact Us</Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Sidebar;
