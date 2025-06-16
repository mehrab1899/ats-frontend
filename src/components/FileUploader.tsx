// src/app/components/FileUploader.tsx
import React from 'react';

type FileUploaderProps = {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FileUploader = ({ label, onChange }: FileUploaderProps) => {
  return (
    <div className="w-full">
      <label className="block text-gray-600">{label}</label>
      <input
        type="file"
        onChange={onChange}
        className="w-full p-3 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default FileUploader;
