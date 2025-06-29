import { AuthProvider } from "@/context/AuthContext";
import RelayProvider from "@/lib/RelayProvider";
import './globals.css'
import { ToastProvider } from "@/context/ToastContext";
import ErrorBoundary from "@/components/ErrorBoundary";

export const metadata = {
  title: "Capventis ATS",
  description: "Smart applicant tracking for modern teams.",
};
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body >
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
