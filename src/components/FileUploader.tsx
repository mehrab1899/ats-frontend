'use client';

import React, { useRef, useState } from 'react';
import { FaFileAlt, FaTimes, FaCheckCircle } from 'react-icons/fa';

type FileUploaderProps = {
  label: string;
  onChange: (file: File | null) => void;
};

const FileUploader: React.FC<FileUploaderProps> = ({ label, onChange }) => {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    onChange(selectedFile);
  };

  const handleRemoveFile = () => {
    setFile(null);
    onChange(null);
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div className="w-full space-y-2">
      <label className="block text-gray-700 font-medium mb-1">{label}</label>

      <div
        onClick={() => inputRef.current?.click()}
        className="relative flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-400 bg-gray-100 rounded-xl cursor-pointer hover:bg-gray-200 transition-colors text-center"
      >
        {/* ❌ Remove Icon */}
        {file && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveFile();
            }}
            className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition-colors"
            aria-label="Remove file"
          >
            <FaTimes />
          </button>
        )}

        {/* 📄 File Info or Placeholder */}
        {file ? (
          <>
            <FaFileAlt className="text-gray-600 text-3xl mb-1" />
            <p className="text-gray-700 font-medium max-w-[90%] truncate px-2">
              {file.name}
            </p>
            <FaCheckCircle className="text-green-500 text-xl mt-2" />
          </>
        ) : (
          <>
            <FaFileAlt className="text-gray-500 text-3xl mb-1" />
            <p className="text-gray-600 font-medium">Choose a file</p>
          </>
        )}

        {/* Hidden File Input */}
        <input
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default FileUploader;
