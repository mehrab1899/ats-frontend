// app/(admin)/layout.tsx
'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/admin/Sidebar';
import Navbar from '@/components/admin/Navbar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="flex min-h-screen bg-background text-foreground">
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

            <div
                className={`flex flex-col transition-all duration-300 ${collapsed ? 'ml-20' : 'ml-72'
                    } w-full`}
            >
                <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
                <main className="flex-1 p-6">{children}</main>
            </div>
        </div>

    );
};

export default DashboardLayout;
