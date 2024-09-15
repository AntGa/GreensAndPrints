'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { usePathname } from 'next/navigation' // Import usePathname

export const Navbar = () => {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isNavbarHovered, setIsNavbarHovered] = useState(false)
  const pathname = usePathname() // Get current path

  useEffect(() => {
    // Automatically set navbar to hovered state if not on home page
    if (pathname !== '/') {
      setIsNavbarHovered(true)
    } else {
      setIsNavbarHovered(false)
    }
  }, [pathname])

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  const handleMouseEnter = () => {
    setIsNavbarHovered(true)
  }

  const handleMouseLeave = () => {
    // Keep navbar hovered if not on the home page
    if (pathname === '/') {
      setIsNavbarHovered(false)
    }
    setHoveredIndex(null)
  }

  const handleLinkMouseEnter = (index: number) => {
    setHoveredIndex(index)
  }

  const navbar_variants = {
    hovered: {
      backgroundColor: '#F7F1E3',
      color: '#333333',
    },
    not_hovered: {
      backgroundColor: '#ffffff00',
      color: '#F7F1E3',
    },
  }

  const bar_variants = {
    hovered: { maxWidth: '1920px', backgroundColor: '#000000' },
    not_hovered: { maxWidth: '1380px', backgroundColor: '#F7F1E3' },
  }

  return (
    <motion.div
      className={`fixed left-0 top-0 z-50 w-full text-soft-ivory ${isNavbarHovered || isScrolled ? 'bg-hovered-color' : 'bg-transparent'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variants={navbar_variants}
      animate={isNavbarHovered || isScrolled ? 'hovered' : 'not_hovered'}
      transition={{ duration: 0.25 }}
    >
      <div className="relative m-auto flex h-full w-full max-w-[1370px] items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-9 text-lg">
          <div className="xl:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>

          <ul className="m-6 hidden h-full items-center gap-9 font-geist text-lg xl:flex">
            {['All Products', 'Locations', 'Contact Us'].map(
              (item, index: number) => (
                <li
                  key={index}
                  className="flex h-full flex-col items-center justify-center"
                  onMouseEnter={() => handleLinkMouseEnter(index)}
                >
                  <Link href="/#">{item}</Link>
                  <motion.div
                    className="h-[1px] w-full bg-black"
                    initial={{ width: 0 }}
                    animate={{
                      width: hoveredIndex === index ? '100%' : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </li>
              )
            )}
          </ul>
        </div>

        <Link
          href="/"
          className="absolute left-1/2 -mt-2 -translate-x-1/2 transform font-playFair text-2xl font-semibold sm:text-4xl"
        >
          Greens & Prints
        </Link>
        <div className="flex gap-9 text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="m-7 size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
      </div>
      <motion.div
        variants={bar_variants}
        initial="not_hovered"
        animate={isNavbarHovered || isScrolled ? 'hovered' : 'not_hovered'}
        transition={{ duration: 0.8 }}
        className="mx-auto h-[0.5px] bg-black"
      />
    </motion.div>
  )
}