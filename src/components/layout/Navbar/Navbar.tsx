'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Search from './search';
import CartModal from '@/components/cart/modal';
import Sidebar from './sidebar';
import NavbarLink from '@/components/utils/navbarlink';

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isNavbarHovered, setIsNavbarHovered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') {
      setIsNavbarHovered(true);
    } else {
      setIsNavbarHovered(false);
    }
  }, [pathname]);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    if (pathname === '/') {
      setIsNavbarHovered(false);
    }
    setHoveredIndex(null);
  };

  return (
    <motion.div
      className={`fixed left-0 top-0 z-50 w-full text-soft-ivory ${isNavbarHovered || isScrolled || isSidebarOpen ? 'bg-hovered-color' : 'bg-transparent'}`}
      onMouseEnter={() => setIsNavbarHovered(true)}
      onMouseLeave={handleMouseLeave}
      variants={{
        hovered: { backgroundColor: '#F7F1E3', color: '#333333' },
        not_hovered: { backgroundColor: '#ffffff00', color: '#F7F1E3' },
      }}
      animate={isNavbarHovered || isScrolled ? 'hovered' : 'not_hovered'}
      transition={{ duration: 0.25 }}
    >
      <div className='relative m-auto flex h-full w-full max-w-[1370px] items-center justify-between px-4 lg:px-8'>
        <div className='flex items-center gap-9 text-lg'>
          <div className='max-xl:m-7 xl:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6 cursor-pointer'
              onClick={() => setIsSidebarOpen(true)}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </div>

          <ul className='m-6 hidden h-full items-center gap-9 font-geist text-lg xl:flex'>
            <NavbarLink
              href='/products'
              label='All Products'
              isHovered={hoveredIndex === 0}
              onMouseEnter={() => handleMouseEnter(0)}
            />
            <NavbarLink
              href='/contact'
              label='Contact Us'
              isHovered={hoveredIndex === 2}
              onMouseEnter={() => handleMouseEnter(2)}
            />
          </ul>
        </div>

        <Link
          href='/'
          className='absolute left-1/2 -mt-2 -translate-x-1/2 transform font-playFair text-2xl font-semibold sm:text-4xl'
        >
          Greens & Prints
        </Link>
        <div className='flex gap-9 text-lg'>
          <Search />
          <div className='flex justify-end md:w-1/3'>
            <CartModal />
          </div>
        </div>
      </div>
      <motion.div
        initial='not_hovered'
        animate={isNavbarHovered || isScrolled ? 'hovered' : 'not_hovered'}
        transition={{ duration: 0.8 }}
        className='mx-auto h-[0.5px] bg-black'
      />

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </motion.div>
  );
};

export default Navbar;
