'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

interface NavbarLinkProps {
  href: string;
  label: string;
  isHovered: boolean;
  onMouseEnter: () => void;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({
  href,
  label,
  isHovered,
  onMouseEnter,
}) => {
  return (
    <li
      className='flex h-full flex-col items-center justify-center'
      onMouseEnter={onMouseEnter}
    >
      <Link href={href}>{label}</Link>
      <motion.div
        className='h-[1px] w-full bg-black'
        initial={{ width: 0 }}
        animate={{ width: isHovered ? '100%' : 0 }}
        transition={{ duration: 0.3 }}
      />
    </li>
  );
};

export default NavbarLink;
