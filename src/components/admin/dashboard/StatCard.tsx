import React from 'react';

type StatCardProps = {
    label: string;
    value: string | number;
    icon?: React.ReactNode;
    bgColor?: string;
    textColor?: string;
};

export default function StatCard({
    label,
    value,
    icon,
    bgColor = 'bg-white',
    textColor = 'text-[#012C56]',
}: StatCardProps) {
    return (
        <div className={`${bgColor} shadow-md rounded-xl p-6 min-h-[160px] flex flex-col justify-between`}>
            <div className={`text-xl font-semibold ${textColor}`}>{label}</div>
            <div className="flex items-center gap-4 mt-2">
                {icon && <div className={`text-4xl ${textColor}`}>{icon}</div>}
                <div className={`text-3xl font-bold ${textColor}`}>{value}</div>
            </div>
        </div>
    );
}
