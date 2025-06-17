import { AuthProvider } from "@/context/AuthContext";
import RelayProvider from "@/lib/RelayProvider";
import './globals.css'
import { ToastProvider } from "@/context/ToastContext";

// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ToastProvider>
          <RelayProvider>
            <AuthProvider>
              {children}
            </AuthProvider>
          </RelayProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
