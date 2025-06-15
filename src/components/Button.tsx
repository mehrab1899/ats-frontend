import React from 'react';

type ButtonProps = {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;  
  className?: string;  
};

const Button = ({ label, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-blue-700 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
