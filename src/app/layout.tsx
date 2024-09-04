import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import { Playfair_Display } from 'next/font/google'
import { Navbar } from '@/components/ui/Navbar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
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
    <html lang="en">
      <body className={`${inter.className} ${Playfair.className} relative`}>
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
