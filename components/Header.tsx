"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#4a5ee7]">
      <div className="md:max-w-[95%] mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
          <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-white">
            <Link href="#" onClick={() => setIsMenuOpen(false)}>Plenum</Link>
          </h1>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        <nav className={`
          ${isMenuOpen ? 'flex' : 'hidden'}
          md:flex flex-col md:flex-row items-center gap-4 md:gap-8 text-white
          w-full md:w-auto py-4 font-medium
        `}>
          <Link href="#about" onClick={() => setIsMenuOpen(false)} className="hover:opacity-80 transition-opacity w-full text-center md:w-auto">About</Link>
          <Link href="#team" onClick={() => setIsMenuOpen(false)} className="hover:opacity-80 transition-opacity w-full text-center md:w-auto">Team</Link>
          <Link href="#product" onClick={() => setIsMenuOpen(false)} className="hover:opacity-80 transition-opacity w-full text-center md:w-auto">Products</Link>
          <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:opacity-80 transition-opacity w-full text-center md:w-auto">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
