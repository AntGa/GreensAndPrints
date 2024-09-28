import type { Metadata } from 'next';
import '../styles/globals.css';
import { GeistSans } from 'geist/font/sans';
import SmoothScroll from '@/components/SmoothScroll';
import { Cardo, Playfair_Display } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar/Navbar';
import { Analytics } from '@vercel/analytics/react';
import { CartProvider } from '@/components/cart/cart-context';
import { cookies } from 'next/headers';
import { getCart } from '@/lib/shopify';
const Playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playFair',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Greens & Prints',
  description: 'A family business',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cartId = cookies().get('cartId')?.value;
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart(cartId);
  return (
    <html lang='en' className='bg-soft-ivory'>
      <body className={`${Playfair.className} ${GeistSans.variable} relative`}>
        <CartProvider cartPromise={cart}>
          <Navbar />
          <SmoothScroll>
            {children}
            <Analytics />
          </SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}
