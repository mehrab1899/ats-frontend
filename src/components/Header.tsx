'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  bannerText: string;
}

const Header: React.FC<HeaderProps> = ({ bannerText }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="relative w-full h-[70vh]">
      {/* Banner Image */}
      <Image
        src="/banner-img.jpg"
        alt="Banner"
        width={1920}
        height={700}
        className="w-full h-[70vh] object-cover z-0"
        priority
      />

      {/* Capsule Header */}
      <header className="absolute top-6 left-1/2 transform -translate-x-1/2 z-30 bg-[#0a1f3d]/80 text-white px-6 py-3 rounded-full flex items-center justify-between w-[90%] max-w-6xl backdrop-blur-md">
        <h1 className="text-xl sm:text-2xl font-bold">Capventis</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-md font-medium">
          <Link href="/#about" scroll={true} className="hover:text-gray-300 transition-colors">About Us</Link>
          <Link href="/#positions" scroll={true} className="hover:text-gray-300 transition-colors">Positions</Link>
          <Link href="/#culture" scroll={true} className="hover:text-gray-300 transition-colors">Culture</Link>
        </nav>

        {/* Desktop Button */}
        <button onClick={() => router.push('/login')}
          className="hidden md:inline-block bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors">
          Login
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>
      </header>

      {/* Mobile Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#0a1f3d] z-40 text-white flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
            <h1 className="text-2xl font-bold">Capventis</h1>
            <button onClick={() => setMenuOpen(false)} className="text-2xl">
              <FaTimes />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-1 space-y-8 text-xl font-semibold">
            <Link href="/#about" scroll={true} onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition-colors">About Us</Link>
            <Link href="/#positions" scroll={true} onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition-colors">Positions</Link>
            <Link href="/#culture" scroll={true} onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition-colors">Culture</Link>
            <button onClick={() => router.push('/login')} className="mt-6 bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-300 transition-colors">
              Login
            </button>
          </nav>
        </div>
      )}

      {/* Banner Text (hidden on mobile, left-aligned on larger screens) */}
      <div className="hidden sm:block absolute bottom-10 left-12 z-20 text-left text-white px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold drop-shadow-md">
          {bannerText}
        </h2>
      </div>
    </div>
  );
};

export default Header;
