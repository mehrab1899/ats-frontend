// src/app/components/JobCard.tsx
'use client';

import React from 'react';
import Link from 'next/link';

type JobCardProps = {
  id: string; // <-- add this
  title: string;
  description: string;
};

const JobCard = ({ id, title, description }: JobCardProps) => {
  return (
    <div className="border rounded-lg p-6 shadow-lg">
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <Link href={`/apply/${id}`}>
        <button className="custom-btn mt-4 bg-blue-600 text-white py-2 px-4 rounded">
          Apply Now
        </button>
      </Link>
    </div>
  );
};

export default JobCard;
