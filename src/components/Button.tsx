import React from 'react';

type ButtonProps = {
  label: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

const Button = ({ label, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-blue-700 flex items-center justify-center ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
