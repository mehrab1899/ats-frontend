'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useApplicantById } from '@/modules/applicants/hooks/useApplicantById';
import { useScoreResume } from '@/modules/applicants/hooks/useScoreResume';

const badgeColors: Record<string, string> = {
  APPLIED: 'bg-blue-100 text-blue-800',
  SHORTLISTED: 'bg-yellow-100 text-yellow-800',
  INTERVIEWED: 'bg-indigo-100 text-indigo-800',
  HIRED: 'bg-green-100 text-green-800',
  REJECTED: 'bg-red-100 text-red-800',
};

const getScoreColor = (score: number) => {
  if (score >= 0.75) return "text-green-600";
  if (score >= 0.4) return "text-yellow-600";
  return "text-red-600";
};

const getBarColor = (score: number) => {
  if (score >= 0.75) return "bg-green-500";
  if (score >= 0.4) return "bg-yellow-500";
  return "bg-red-500";
};

const ApplicantDetail = () => {
  const { id } = useParams();
  const applicant = useApplicantById(id as string);
  const { category, confidence, relevance_score, explanation } = useScoreResume(applicant.cv || '', applicant.job.description || '');
  console.log('in resume component')
  const matched = explanation.match(/Matched Skills:\n([\s\S]*?)\n\n/)?.[1]?.trim().split("\n") || [];
  const partial = explanation.match(/Partial Matches:\n([\s\S]*?)\n\n/)?.[1]?.trim().split("\n") || [];
  const missing = explanation.match(/Missing Skills:\n([\s\S]*)/)?.[1]?.trim().split("\n") || [];

  return (
    <>
      <div className="bg-white rounded-2xl shadow-md p-8 mt-8 border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Resume Match Analysis</h3>

        {/* Category */}
        <div className="mb-6">
          <Label>Category</Label>
          <span className="ml-2 inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            {category}
          </span>
        </div>

        {/* Scores */}
        <div className="mb-6">
          <Label>Confidence</Label>
          <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
            <div
              className={`h-3 rounded-full ${getBarColor(confidence)}`}
              style={{ width: `${(confidence * 100).toFixed(0)}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-1">{(confidence * 100).toFixed(1)}%</p>
        </div>

        <div className="mb-8">
          <Label>Relevance Score</Label>
          <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
            <div
              className={`h-3 rounded-full ${getBarColor(relevance_score)}`}
              style={{ width: `${(relevance_score * 100).toFixed(0)}%` }}
            ></div>
          </div>
          <p className={`text-sm mt-1 ${getScoreColor(relevance_score)}`}>
            {(relevance_score * 100).toFixed(1)}% match
          </p>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <Label>Matched Skills</Label>
            <ul className="list-disc list-inside mt-2 space-y-1 text-green-700">
              {matched.length ? matched.map((m, i) => <li key={i}>{m.replace(/^- /, "")}</li>) : <li>—</li>}
            </ul>
          </div>
          <div>
            <Label>Partial Matches</Label>
            <ul className="list-disc list-inside mt-2 space-y-1 text-yellow-700">
              {partial.length ? partial.map((p, i) => <li key={i}>{p.replace(/^- /, "")}</li>) : <li>—</li>}
            </ul>
          </div>
          <div>
            <Label>Missing Skills</Label>
            <ul className="list-disc list-inside mt-2 space-y-1 text-red-700">
              {missing.length ? missing.map((m, i) => <li key={i}>{m.replace(/^- /, "")}</li>) : <li>—</li>}
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-2xl p-8 mt-8">
        <div className="bg-[#E6EDF4] rounded-2xl shadow-md p-8 border border-[#DDE6F0]">
          <h2 className="text-3xl font-semibold text-[var(--primary-color)] mb-6">
            {applicant.firstName} {applicant.lastName}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            <Info label="Email" value={applicant.email} />
            <Info label="Phone" value={applicant.phone} />
            <Info label="Applied Position" value={applicant.job.title} />
            <Info
              label="Stage"
              value={
                <span className={`inline-block px-3 py-1 text-sm rounded-full font-medium ${badgeColors[applicant.stage]}`}>
                  {applicant.stage}
                </span>
              }
            />
            <Info label="Applied At" value={new Date(applicant.appliedAt).toLocaleString()} />
            <Info label="Message" value={applicant.message || '—'} />

            <div className="flex flex-col gap-2 mt-2">
              <Label>CV</Label>
              <a
                href={applicant.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit bg-[var(--primary-color)] hover:bg-[#0a1f3d] text-white px-4 py-2 rounded-md transition"
              >
                View CV
              </a>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <Label>Cover Letter</Label>
              <a
                href={applicant.coverLetter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit bg-[var(--primary-color)] hover:bg-[#0a1f3d] text-white px-4 py-2 rounded-md transition"
              >
                View Cover Letter
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Info = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div>
    <Label>{label}</Label>
    <p className="text-[var(--primary-color)] text-base font-medium mt-1 break-words">{value}</p>
  </div>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <span className="text-sm text-[#2e4257] font-semibold tracking-wide uppercase">
    {children}
  </span>
);

export default ApplicantDetail;
