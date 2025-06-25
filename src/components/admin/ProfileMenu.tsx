'use client';

import { useState } from 'react';
import { LogOut, User, UserCircle } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function ProfileMenu() {
    const [open, setOpen] = useState(false);
    const { logout } = useAuth(); // ✅ Access logout function
    const router = useRouter();   // ✅ For redirection

    const handleLogout = () => {
        logout();            // 1. Clear token + auth state
        router.replace('/login'); // 2. Redirect to login
    };

    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="cursor-pointer flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#DDE6F0] transition"
            >
                <UserCircle className="w-8 h-8 text-[var(--primary-color)]" />
                <span className="font-medium text-[var(--primary-color)]">Admin</span>
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-44 bg-[var(--primary-color)] rounded-md shadow-lg z-50 text-white">
                    <button className="w-full px-4 py-2 text-left hover:bg-[#E6EDF4] hover:text-[var(--primary-color)] flex items-center gap-2 transition-colors">
                        <User className="w-4 h-4" />
                        View Profile
                    </button>
                    <button
                        onClick={handleLogout}
                        className="w-full px-4 py-2 text-left hover:bg-[#E6EDF4] hover:text-[var(--primary-color)] flex items-center gap-2 transition-colors"
                    >
                        <LogOut className="w-4 h-4" />
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}
