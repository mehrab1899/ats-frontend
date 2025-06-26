// src/app/components/SelectInput.tsx
import React from 'react';

type SelectInputProps = {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { label: string; value: string }[]; // Array of options for the dropdown
    className?: string;  // Allow additional custom styles
    disabled?: boolean;

};

const SelectInput = ({ label, value, onChange, options, className, disabled }: SelectInputProps) => {
    return (
        <div className={`w-full ${className}`}>
            <label className="block text-gray-600">{label}</label>
            <select
                value={value}
                onChange={onChange}
                disabled={disabled}
                className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none 
                  ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'focus:ring-2 focus:ring-blue-500'}`}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;
