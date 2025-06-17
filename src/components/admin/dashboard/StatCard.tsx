import React from 'react';

type StatCardProps = {
    label: string;
    value: string | number;
    icon?: React.ReactNode;
    bgColor?: string;
    textColor?: string;
};

export default function StatCard({ label, value, icon, bgColor = 'bg-white', textColor = 'text-[#012C56]' }: StatCardProps) {
    return (
        <div className={`${bgColor} shadow-md rounded-lg p-4 h-36 flex flex-col justify-between`}>
            <div className={`text-lg font-semibold ${textColor}`}>{label}</div>
            <div className="flex items-center gap-3">
                {icon && <div className={`text-3xl ${textColor}`}>{icon}</div>}
                <div className={`text-2xl font-bold ${textColor}`}>{value}</div>
            </div>
        </div>
    );
}