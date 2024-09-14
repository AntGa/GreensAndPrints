'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface AnimatedButtonProps {
  text: string
  ClassName?: string
  link: string
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  text,
  ClassName,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`${link}`} className={`px-10 max-sm:w-dvw ${ClassName}`}>
      <motion.div
        className="relative inline-block w-full overflow-hidden rounded-full border border-black bg-black px-4 py-2 text-center font-geist text-lg font-light text-black"
        whileHover={{
          color: '#ffffff',
        }}
        transition={{ delay: 0.4 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className={`absolute inset-0 z-0 bg-soft-ivory`}
          initial={{ height: '100%', bottom: 0 }}
          animate={{ height: isHovered ? '0%' : '100%' }}
          transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        />
        <p className="relative z-10">{text}</p>
      </motion.div>
    </Link>
  )
}

export default AnimatedButton
