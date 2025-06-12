// src/app/layout.tsx
import React from 'react';
import './globals.css'; // Include global styles (TailwindCSS)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Capventis ATS</title>
      </head>
      <body>
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold">Capventis ATS</h1>
          </div>
          <div>
            <button className="bg-blue-600 text-white py-2 px-4 rounded">Login (Admin)</button>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2025 Capventis. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
