'use client';

import React from 'react';
import Link from 'next/link';

type JobCardProps = {
  id: string;
  title: string;
  description: string;
};

const truncateWords = (text: string, wordLimit: number) => {
  const words = text.trim().split(/\s+/);
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(' ') + '...'
    : text;
};
 
  

const JobCard = ({ id, title, description }: JobCardProps) => {
  return (
    <div className="h-full flex flex-col justify-between border rounded-lg p-6 shadow-lg bg-white min-h-[225px]">
      <div>
        <h3 className="font-semibold text-[var(--primary-color)] text-xl mb-2">{title}</h3>
        <p className="text-gray-600">
          {truncateWords(description, 30)}
        </p>
      </div>
      <Link href={`/apply/${id}`}>
        <button className="custom-btn mt-4 bg-blue-600 text-white py-2 px-4 rounded">
          Apply Now
        </button>
      </Link>
    </div>
  );
};

export default JobCard;
