'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion'

export const Navbar = () => {
  const { scrollY } = useScroll()
  const [isHovered, setIsHovered] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollYProgress = useTransform(scrollY, [0, 100], [0, 1])

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 100)
  })

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  const navbar_variants = {
    hovered: {
      backgroundColor: '#FAF9F6',
    },
    not_hovered: {
      backgroundColor: '#ffffff00',
    },
  }

  const bar_variants = {
    hovered: { width: '100%' },
    not_hovered: { width: '65%' },
  }

  return (
    <motion.div
      className="sticky top-0 z-50 p-4 pb-0 text-solid-deep-forest-green"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variants={navbar_variants}
      animate={isHovered || isScrolled ? 'hovered' : 'not_hovered'}
      transition={{ duration: 0.5 }}
    >
      <div className="flex w-full items-center justify-around">
        <ul className="flex gap-9 text-lg">
          <li>
            <Link href="/#">All Products</Link>
          </li>
          <li>
            <Link href="/#">About Us</Link>
          </li>
          <li>
            <Link href="/#">Locations</Link>
          </li>
          <li>
            <Link href="/#">Contact Us</Link>
          </li>
        </ul>
        <h1 className="flex-1 text-center font-playFair text-3xl font-semibold">
          Greens & Prints
        </h1>
        <div className="flex flex-1">
          <ul className="flex gap-9 text-lg">
            <li>
              <Link href="/#">About Us</Link>
            </li>
            <li>
              <Link href="/#">Locations</Link>
            </li>
            <li>
              <Link href="/#">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <motion.div
        variants={bar_variants}
        initial="not_hovered"
        animate={isHovered || isScrolled ? 'hovered' : 'not_hovered'}
        transition={{ duration: 0.5 }}
        className="mx-auto mt-5 h-[1px] bg-black"
      />
    </motion.div>
  )
}
