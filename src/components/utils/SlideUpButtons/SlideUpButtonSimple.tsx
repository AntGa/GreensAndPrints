'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const SlideUpButton = () => {
  return (
    <div className="relative mb-24 h-10 w-24 cursor-pointer overflow-hidden rounded-full">
      <motion.div
        className="relative flex h-full w-full items-center justify-center"
        initial={{ top: '0' }}
        whileHover={{ top: '-100%' }}
        transition={{ ease: [0.65, 0, 0.35, 1], duration: 1 }}
      >
        <div className="flex h-full w-full items-center justify-center bg-blue-300"></div>
        <div className="absolute top-full flex h-full w-full items-center justify-center bg-black text-white"></div>
      </motion.div>
      <p className="absolute left-[50%] top-0 translate-x-[-50%] text-white">
        Hi
      </p>
    </div>
  )
}
