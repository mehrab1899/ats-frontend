'use client';

import Breadcrumbs from './Breadcrumbs';
import ProfileMenu from './ProfileMenu';

type NavbarProps = {
    collapsed: boolean;
    setCollapsed: (value: boolean) => void;
};

export default function Navbar({ collapsed, setCollapsed }: NavbarProps) {
    return (
        <header className="flex items-center justify-between h-16 px-6 bg-[#E6EDF4] shadow sticky top-0 z-40 border-b border-gray-200">
            <Breadcrumbs />
            <ProfileMenu />
        </header>
    );
}
