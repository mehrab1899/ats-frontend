'use client';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left Branding Panel: hidden on small screens */}
            <div className="hidden md:flex md:w-2/5 lg:w-1/2 bg-[var(--primary-color)] text-white flex-col justify-center items-center px-6 lg:px-12 py-16">
                <h1 className="text-3xl lg:text-4xl font-extrabold mb-4">Capventis</h1>
                <p className="text-base lg:text-lg text-blue-100 text-center max-w-sm lg:max-w-md">
                    Building smarter recruitment pipelines with precision and performance.
                </p>
            </div>

            {/* Right Form Section: full width on mobile, responsive on larger screens */}
            <div className="w-full md:w-3/5 lg:w-1/2 bg-gray-50 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-8">
                {children}
            </div>
        </div>
    );
}
