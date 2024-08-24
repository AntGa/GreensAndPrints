import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold">Greens & Prints</h1>
      <nav>
        <ul>
          <li className="inline-block px-5 text-lg">
            <Link href="/">Shopping</Link>
          </li>
          <li className="inline-block px-5 text-lg">
            <Link href="/">New Arrivals</Link>
          </li>
          <li className="inline-block px-5 text-lg">
            <Link href="/">Who we are</Link>
          </li>
          <li className="inline-block px-5 text-lg">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
