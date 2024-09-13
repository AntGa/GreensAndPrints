'use client'

import { ReactLenis, useLenis } from 'lenis/react'

function SmoothScroll({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const lenis = useLenis(({ scroll }) => {})

  return <ReactLenis root>{children}</ReactLenis>
}

export default SmoothScroll
