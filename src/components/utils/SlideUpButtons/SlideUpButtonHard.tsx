'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const getTextSize = (text: string, fontSize: string) => {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  if (!context) return { width: 0, height: 0 }
  context.font = fontSize
  const { width, actualBoundingBoxAscent, actualBoundingBoxDescent } =
    context.measureText(text)
  return {
    width,
    height: actualBoundingBoxAscent + actualBoundingBoxDescent,
  }
}

export const SlideUpButtonHard = () => {
  const [buttonSize, setButtonSize] = useState({ width: 0, height: 0 })
  const textRef1 = useRef<HTMLParagraphElement>(null)
  const textRef2 = useRef<HTMLParagraphElement>(null)
  const fontSize = '16px' // You can adjust this as needed

  useEffect(() => {
    if (textRef1.current && textRef2.current) {
      const size1 = getTextSize(textRef1.current.innerText, fontSize)
      const size2 = getTextSize(textRef2.current.innerText, fontSize)
      const width = Math.max(size1.width, size2.width)
      const height = Math.max(size1.height, size2.height)
      setButtonSize({ width: width + 20, height: height + 20 }) // Add some padding
    }
  }, [])

  return (
    <div
      className="relative mb-24 cursor-pointer overflow-hidden rounded-full"
      style={{ width: buttonSize.width, height: buttonSize.height }}
    >
      <motion.div
        className="relative h-full w-full"
        initial={{ top: '0' }}
        whileHover={{ top: '-100%' }}
      >
        <div className="flex h-full w-full items-center justify-center bg-blue-300">
          <p ref={textRef1}>Hi</p>
        </div>
        <div className="absolute top-full flex h-full w-full items-center justify-center bg-black text-white">
          <p ref={textRef2}>Bye</p>
        </div>
      </motion.div>
    </div>
  )
}
