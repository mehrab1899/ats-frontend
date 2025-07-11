'use client';

import React from 'react';
import Link from 'next/link';
import { useFragment } from 'react-relay';
import { JobCard_job$key } from '@/__generated__/JobCard_job.graphql';
import { JobCardFragment } from '@/modules/jobs/fragments/Job.fragment';

type Props = {
  jobRef: JobCard_job$key;
};

const truncateWords = (text: string, wordLimit: number) => {
  const words = text.trim().split(/\s+/);
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(' ') + '...'
    : text;
};

const JobCard = ({ jobRef }: Props) => {
  const job = useFragment(JobCardFragment, jobRef);

  return (
    <div className="h-full flex flex-col justify-between border rounded-lg p-6 shadow-lg bg-white min-h-[225px]">
      <div>
        <h3 className="font-semibold text-[var(--primary-color)] text-xl mb-2">{job.title}</h3>
        <p className="text-gray-600">{truncateWords(job.description, 30)}</p>
      </div>
      <Link href={`/apply/${job.id}`}>
        <button className="custom-btn mt-4 bg-blue-600 text-white py-2 px-4 rounded">
          Apply Now
        </button>
      </Link>
    </div>
  );
};

export default JobCard;
