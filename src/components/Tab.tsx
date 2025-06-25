'use client';

interface TabProps {
    label: string;
    active: boolean;
    onClick: () => void;
}

export default function Tab({ label, active, onClick }: TabProps) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${active ? 'bg-[var(--primary-color)] text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
        >
            {label}
        </button>
    );
}