// src/app/layout.tsx
'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../globals.css';

const bannerText = "Still looking for your dream job?"
export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header bannerText={bannerText} />
            <main className="flex-grow">{children}</main>
            <Footer />
        </>

    );
}
