// src/app/components/TextInput.tsx
import React from 'react';

type TextInputProps = {
  label: string;
  type: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
};

const TextInput = ({ label, type, value, onChange, placeholder, className, disabled }: TextInputProps) => {
  return (
    <div className={`w-full ${className}`}>
      <label className="block text-gray-600">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={disabled}
      />
    </div>
  );
};

export default TextInput;
