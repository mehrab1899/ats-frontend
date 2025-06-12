// src/app/components/Header.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  bannerText: string;
}

const Header: React.FC<HeaderProps> = ({ bannerText }) => {
  return (
    <div className="relative w-full h-[80vh]">
      <Image
        src="/banner-img.jpg"
        alt="Banner"
        width={1920}
        height={800}
        className="w-full h-[80vh] object-cover z-0"
        priority
      />
      <header className="absolute top-0 left-0 right-0 z-20 text-white px-8 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Capventis</h1>
        <nav className="flex space-x-8 text-lg font-medium">
          <Link href="/join-us" className="hover:text-gray-300 transition-colors duration-200">Join Us</Link>
          <Link href="/positions" className="hover:text-gray-300 transition-colors duration-200">Positions</Link>
          <Link href="/culture" className="hover:text-gray-300 transition-colors duration-200">Culture</Link>
        </nav>
        <button className="transition-colors duration-300 text-white px-4 py-2 rounded-md">
          Login
        </button>
      </header>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 text-center text-white px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-md">{bannerText}</h2>
      </div>
    </div>
  );
};

export default Header;
