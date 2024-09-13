'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  textSize?: string
  duration?: number
  inView?: boolean
  once?: boolean
}

const container = {
  hidden: {},
  show: (duration: number) => ({
    transition: {
      staggerChildren: 0.01,
    },
  }),
}

const item = {
  hidden: { y: 100 },
  show: { y: 0, transition: { ease: [0.33, 1, 0.68, 1], duration: 2 } },
}

export const RevealText: React.FC<AnimatedTextProps> = ({
  text,
  textSize = 'text-4xl',
  duration = 2,
  inView = true,
  once = true,
}) => {
  return (
    <motion.div
      className="clipped"
      variants={container}
      initial="hidden"
      whileInView="show"
      custom={duration}
      viewport={inView ? { once } : undefined}
    >
      {text.split('').map((char, index) => (
        <motion.span
          className={`inline-block ${textSize}`}
          variants={item}
          key={index}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  )
}
