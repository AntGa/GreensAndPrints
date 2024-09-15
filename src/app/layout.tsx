import type { Metadata } from 'next'
import '../styles/globals.css'
import { GeistSans } from 'geist/font/sans'
import SmoothScroll from '@/components/SmoothScroll'
import { Playfair_Display } from 'next/font/google'
import { Navbar } from '@/components/layout/Navbar/Navbar'
import { Analytics } from '@vercel/analytics/react'

const Playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playFair',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Greens & Prints',
  description: 'A family business',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-soft-ivory">
      <body className={`${Playfair.className} ${GeistSans.variable} relative`}>
        <Navbar />
        <SmoothScroll>
          {children}
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  )
}
