'use client';

import { useState } from 'react';
import { LogOut, User, UserCircle } from 'lucide-react';

export default function ProfileMenu() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="cursor-pointer flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#DDE6F0] transition"
            >
                <UserCircle className="w-8 h-8 text-[#012C56]" />
                <span className="font-medium text-[#012C56]">Admin</span>
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-44 bg-[#012C56] rounded-md shadow-lg z-50 text-white">
                    <button className="w-full px-4 py-2 text-left hover:bg-[#E6EDF4] hover:text-[#012C56] flex items-center gap-2 transition-colors">
                        <User className="w-4 h-4" />
                        View Profile
                    </button>
                    <button className="w-full px-4 py-2 text-left hover:bg-[#E6EDF4] hover:text-[#012C56] flex items-center gap-2 transition-colors">
                        <LogOut className="w-4 h-4" />
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}