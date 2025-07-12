'use client';

import React, { useRef, useState } from 'react';
import { FaFileAlt, FaTimes, FaCheckCircle } from 'react-icons/fa';

type FileUploaderProps = {
  label: string;
  onChange: (file: File | null) => void;
  onError?: (msg: string | null) => void;
};

const MAX_FILE_SIZE_MB = 5;
const ACCEPTED_FILE_TYPES = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

const FileUploader: React.FC<FileUploaderProps> = ({ label, onChange, onError }) => {
  const [file, setFile] = useState<File | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;

    if (selectedFile) {
      if (!ACCEPTED_FILE_TYPES.includes(selectedFile.type)) {
        const msg = 'Only PDF and DOCX files are allowed.';
        setErrorMsg(msg);
        onError?.(msg);
        setFile(selectedFile);
        onChange(null);
        return;
      }

      if (selectedFile.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        const msg = 'File must be under 5 MB.';
        setErrorMsg(msg);
        onError?.(msg);
        setFile(selectedFile);
        onChange(null);
        return;
      }
    }

    setErrorMsg(null);
    setFile(selectedFile);
    onError?.(null);
    onChange(selectedFile);
  };

  const handleRemoveFile = () => {
    setFile(null);
    setErrorMsg(null);
    onChange(null);
    onError?.(null);
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div className="w-full space-y-2">
      <label className="block text-gray-700 font-medium mb-1">{label}</label>

      <div
        onClick={() => inputRef.current?.click()}
        className="relative flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-400 bg-gray-100 rounded-xl cursor-pointer hover:bg-gray-200 transition-colors text-center"
      >
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

        {file ? (
          <>
            <FaFileAlt className="text-gray-600 text-3xl mb-1" />
            <p className="text-gray-700 font-medium max-w-[90%] truncate px-2">
              {file.name}
            </p>
            {errorMsg ? (
              <FaTimes className="text-red-500 text-xl mt-2" />
            ) : (
              <FaCheckCircle className="text-green-500 text-xl mt-2" />
            )}
          </>
        ) : (
          <>
            <FaFileAlt className="text-gray-500 text-3xl mb-1" />
            <p className="text-gray-600 font-medium">Choose a file</p>
          </>
        )}

        <input
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}
    </div>
  );
};

export default FileUploader;
