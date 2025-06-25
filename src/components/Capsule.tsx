'use client';

interface CapsuleProps {
    label: string;
    active: boolean;
    onClick: () => void;
}

export default function Capsule({ label, active, onClick }: CapsuleProps) {
    return (
        <button
            onClick={onClick}
            className={`px-3 py-1 rounded-full text-sm font-medium transition ${active ? 'bg-[var(--primary-color)] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
        >
            {label}
        </button>
    );
}