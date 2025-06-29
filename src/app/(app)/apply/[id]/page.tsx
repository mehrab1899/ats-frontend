'use client';

import React from "react";
import { useParams } from "next/navigation";
import { useJobById } from "@/modules/jobs/hooks/useJobById";
import ApplicationForm from "@/components/ApplicationForm";

export default function ApplyPage() {
    const params = useParams();
    const jobId = params?.id as string;

    const { getJobById: job } = useJobById(jobId);

    if (!job) {
        return (
            <div className="max-w-4xl mx-auto py-10 px-4 text-center">
                <p className="text-lg text-red-500 font-medium">Job not found.</p>
            </div>
        );
    }

    const skills = job.skillsRequired ?? [];
    const benefits = job.benefits ?? [];


    return (
        <div className="max-w-4xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold text-[var(--primary-color)] mb-8 text-center">
                Apply for {job.title}
            </h1>

            <section className="space-y-4 text-left">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800">Position</h2>
                    <p className="text-gray-600">{job.title}</p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-800">Description</h2>
                    <p className="text-gray-600">{job.description}</p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-800">Skills Required</h2>
                    <ul className="list-disc list-inside text-gray-600">
                        {skills.map((skill: any, idx: any) => (
                            <li key={idx}>{skill}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-800">Benefits</h2>
                    <ul className="list-disc list-inside text-gray-600">
                        {benefits.map((benefit: any, idx: any) => (
                            <li key={idx}>{benefit}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <hr className="my-8 border-t border-gray-200" />

            <h2 className="text-2xl font-bold text-[var(--primary-color)] mb-4">Application Form</h2>
            <ApplicationForm jobId={jobId} />
        </div>
    );
}
