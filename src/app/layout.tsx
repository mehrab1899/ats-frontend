import { AuthProvider } from "@/context/AuthContext";
import RelayProvider from "@/lib/RelayProvider";
import './globals.css'

// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <RelayProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </RelayProvider>
      </body>
    </html>
  );
}
