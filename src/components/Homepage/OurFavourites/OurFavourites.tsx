'use client'

import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.01,
    },
  },
}
const item = {
  hidden: { y: 100 },
  show: { y: 0, transition: { ease: [0.33, 1, 0.68, 1], duration: 2 } },
}
export function OurFavourites() {
  const text = 'Our Favourites'
  return (
    <div className="flex flex-col">
      <div className="flex">
        <motion.div
          className="clipped"
          variants={container}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
        >
          {text.split('').map((char) => (
            <motion.span className="inline-block text-4xl" variants={item}>
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <div>Products</div>
    </div>
  )
}
