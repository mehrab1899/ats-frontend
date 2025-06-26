import { useEffect, useRef, useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';

type Props<T extends string> = {
    options: T[];
    currentValue: T;
    onChange: (newValue: T) => void;
    loading?: boolean;
};

const StatusDropdown = <T extends string>({
    options,
    currentValue,
    onChange,
    loading = false
}: Props<T>) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const filtered = options.filter(o => o !== currentValue);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={ref} className="relative inline-block">
            <button
                onClick={() => setIsOpen(prev => !prev)}
                disabled={loading}
                title="Change status"
                className="p-2 rounded-full hover:bg-gray-100 border border-gray-300 text-gray-600"
            >
                <FaEllipsisV className="text-sm" />
            </button>

            {isOpen && (
                <div className="absolute z-50 right-0 mt-2 w-44 bg-white border border-gray-200 rounded shadow-lg">
                    <ul className="flex flex-col">
                        {filtered.map((opt) => (
                            <li key={opt}>
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        onChange(opt);
                                    }}
                                    disabled={loading}
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                                >
                                    {opt}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default StatusDropdown;
