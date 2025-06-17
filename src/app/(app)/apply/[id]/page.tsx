"use client";

import React from "react";
import { useParams } from "next/navigation";
import ApplicationForm from "@/components/ApplicationForm";
import { useJobs } from "@/modules/jobs/hooks/useJobs";

export default function ApplyPage() {
    const params = useParams();
    const jobId = params?.id; const { jobs } = useJobs();

    console.log('jobId', jobId)
    console.log('jobs', jobs)

    const selectedJob = jobs.find((job) => job.id === jobId);

    if (!selectedJob) {
        return (
            <div className="max-w-4xl mx-auto py-10 px-4 text-center">
                <p className="text-lg text-red-500 font-medium">Job not found.</p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold text-[#012C56] mb-8 text-center">
                Apply for {selectedJob.title}
            </h1>

            <section className="space-y-4 text-left">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800">Position</h2>
                    <p className="text-gray-600">{selectedJob.title}</p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-800">Description</h2>
                    <p className="text-gray-600">{selectedJob.description}</p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-800">Skills Required</h2>
                    <ul className="list-disc list-inside text-gray-600">
                        {selectedJob.skillsRequired.map((skill, idx) => (
                            <li key={idx}>{skill}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-800">Benefits</h2>
                    <ul className="list-disc list-inside text-gray-600">
                        {selectedJob.benefits.map((benefit, idx) => (
                            <li key={idx}>{benefit}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <hr className="my-8 border-t border-gray-200" />

            <h2 className="text-2xl font-bold text-[#012C56] mb-4">Application Form</h2>
            <ApplicationForm />
        </div>
    );
}
