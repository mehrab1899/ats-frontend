'use client';

interface SearchFieldProps {
    value: string;
    onChange: (val: string) => void;
    placeholder?: string;
}

export default function SearchField({ value, onChange, placeholder }: SearchFieldProps) {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-64 px-5 py-2 rounded-full border border-gray-300 shadow-sm bg-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
        />
    );
}