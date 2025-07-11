'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/admin/Sidebar';
import Navbar from '@/components/admin/Navbar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated, loading } = useAuth(); 
    const router = useRouter();

    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            router.replace('/login');
        }
    }, [loading, isAuthenticated]);

    if (loading || !isAuthenticated) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <p className="text-gray-500 text-lg">Checking authentication...</p>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen">
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
