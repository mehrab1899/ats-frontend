'use client';

import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className="w-full h-full flex items-center justify-center px-12">
            In dashboard layout
            {children}
        </div>
    );
};

export default DashboardLayout;
