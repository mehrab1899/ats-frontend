import { AuthProvider } from "@/context/AuthContext";
import RelayProvider from "@/lib/RelayProvider";
import './globals.css'
import { ToastProvider } from "@/context/ToastContext";
import ErrorBoundary from "@/components/ErrorBoundary";

// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white" suppressHydrationWarning={true}>
        <ToastProvider>
          <RelayProvider>
            <AuthProvider>
              <ErrorBoundary>
                {children}
              </ErrorBoundary>
            </AuthProvider>
          </RelayProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
