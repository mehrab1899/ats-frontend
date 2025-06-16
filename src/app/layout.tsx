// src/app/layout.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import RelayProvider from '@/lib/RelayProvider';


const bannerText = "Still looking for your dream job?"
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Capventis ATS</title>
      </head>
      <body >
        <RelayProvider>
          <AuthProvider>
            <Header bannerText={bannerText} />
            <main className="flex-grow">{children}</main>
            <Footer />
          </AuthProvider>
        </RelayProvider>
      </body>
    </html>
  );
}
