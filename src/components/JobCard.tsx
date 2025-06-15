// src/app/components/JobCard.tsx
import React from 'react';

type JobCardProps = {
  title: string;
  description: string;
};

const JobCard = ({ title, description }: JobCardProps) => {
  return (
    <div className="border rounded-lg p-6 shadow-lg">
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">Apply Now</button>
    </div>
  );
};

export default JobCard;
