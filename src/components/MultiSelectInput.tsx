'use client';

import React, { useRef, useState, useEffect } from 'react';

type Option = { label: string; value: string };

interface MultiSelectInputProps {
    label: string;
    options: Option[];
    values: string[];
    onChange: (newValues: string[]) => void;
    disabled?: boolean;
}

const MultiSelectInput: React.FC<MultiSelectInputProps> = ({
    label,
    options,
    values,
    onChange,
    disabled = false
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // ✅ Effect to handle click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleSelect = (val: string) => {
        if (values.includes(val)) {
            onChange(values.filter(v => v !== val));
        } else {
            onChange([...values, val]);
        }
    };

    const removeItem = (val: string) => {
        onChange(values.filter(v => v !== val));
    };

    return (
        <div ref={wrapperRef} className="relative w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>

            {/* Selected Tags */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`min-h-[42px] border px-2 py-1 flex flex-wrap gap-2 rounded-md cursor-pointer ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'hover:border-blue-500'
                    }`}
            >
                {values.length === 0 && (
                    <span className="text-gray-400 text-sm">Select {label.toLowerCase()}</span>
                )}
                {values.map((val) => {
                    const item = options.find(o => o.value === val);
                    return (
                        <span
                            key={val}
                            className="flex items-center gap-1 text-sm bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full"
                        >
                            {item?.label || val}
                            {!disabled && (
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeItem(val);
                                    }}
                                    className="ml-1 text-blue-500 hover:text-red-600"
                                >
                                    &times;
                                </button>
                            )}
                        </span>
                    );
                })}
            </div>

            {/* Dropdown */}
            {isOpen && !disabled && (
                <div className="absolute z-50 bg-white shadow-md border w-full mt-1 max-h-48 overflow-y-auto rounded-md">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`px-4 py-2 cursor-pointer hover:bg-blue-100 flex items-center justify-between ${values.includes(option.value) ? 'bg-blue-50 font-medium' : ''
                                }`}
                            onClick={() => toggleSelect(option.value)}
                        >
                            {option.label}
                            {values.includes(option.value) && (
                                <span className="text-blue-600 font-bold text-sm">✓</span>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MultiSelectInput;
