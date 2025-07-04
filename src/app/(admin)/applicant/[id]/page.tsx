'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useApplicantById } from '@/modules/applicants/hooks/useApplicantById';
import { useFragment } from 'react-relay/hooks';
import { graphql } from 'react-relay';
import { ApplicantDetailFragment } from '@/modules/applicants/fragments/ApplicantDetail.fragment';

const badgeColors: Record<string, string> = {
    APPLIED: 'bg-blue-100 text-blue-800',
    SHORTLISTED: 'bg-yellow-100 text-yellow-800',
    INTERVIEWED: 'bg-indigo-100 text-indigo-800',
    HIRED: 'bg-green-100 text-green-800',
    REJECTED: 'bg-red-100 text-red-800',
};

const ApplicantDetail = () => {
    const { id } = useParams();
    const applicantRef = useApplicantById(id as string);
    const applicant = useFragment(ApplicantDetailFragment, applicantRef);
    console.log('applicant by id', applicant)

    return (
        <div className="max-w-4xl mx-auto mt-10 px-6">
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
