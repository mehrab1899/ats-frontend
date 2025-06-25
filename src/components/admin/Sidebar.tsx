'use client';

import { X, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import navLinks from '../../utils/admin/navLinks';

type SidebarProps = {
    collapsed: boolean;
    setCollapsed: (value: boolean) => void;
};

export default function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
    const pathname = usePathname();

    return (
        <aside
            className={`${collapsed ? 'w-20' : 'w-72'
                } bg-[var(--primary-color)] text-white flex flex-col h-screen fixed left-0 top-0 z-50 transition-all duration-300 ease-in-out`}
        >
            {/* Top Bar: Brand + Collapse/Expand Toggle */}
            <div className="flex items-center justify-between h-16 px-6 border-b border-blue-900">
                {!collapsed ? (
                    <>
                        <span className="text-xl font-bold tracking-wide">Capventis</span>
                        <button
                            onClick={() => setCollapsed(true)}
                            className="cursor-pointer w-8 h-8 rounded-full bg-[#E6EDF4] text-[var(--primary-color)] flex items-center justify-center hover:opacity-90 transition"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </>
                ) : (
                    <button
                        onClick={() => setCollapsed(false)}
                        className="cursor-pointer w-8 h-8 rounded-full bg-[#E6EDF4] text-[var(--primary-color)] flex items-center justify-center hover:opacity-90 transition"
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                )}
            </div>

            {/* Navigation */}
            <nav className="flex flex-col p-4 gap-2">
                {navLinks.map(({ label, href, icon: Icon }) => (
                    <Link
                        key={href}
                        href={href}
                        className={`flex items-center gap-3 px-4 py-2 rounded-md hover:bg-[#E6EDF4] hover:text-[var(--primary-color)] transition ${pathname === href ? 'bg-[#E6EDF4] text-[var(--primary-color)] font-semibold' : ''
                            }`}
                    >
                        <Icon className="w-5 h-5" />
                        {!collapsed && <span>{label}</span>}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
