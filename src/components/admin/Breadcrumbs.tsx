'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Breadcrumbs() {
    const path = usePathname();
    const segments = path.split('/').filter(Boolean);

    return (
        <nav className="text-base font-medium text-gray-600 space-x-1 hover:bg-[#DDE6F0] transition">
            <span className="text-gray-400">/</span>
            {segments.map((segment, index) => {
                const href = '/' + segments.slice(0, index + 1).join('/');
                const label = segment.charAt(0).toUpperCase() + segment.slice(1);
                const isLast = index === segments.length - 1;

                return (
                    <span key={href}>
                        <Link
                            href={href}
                            className={`px-2 py-1 rounded-md transition-colors ${isLast
                                ? 'text-gray-700 font-semibold'
                                : 'text-blue-600 hover:bg-[#DDE6F0] hover:text-[#012C56]'
                                }`}
                        >
                            {label}
                        </Link>
                        {!isLast && <span className="text-gray-400"> / </span>}
                    </span>
                );
            })}
        </nav>
    );
}
