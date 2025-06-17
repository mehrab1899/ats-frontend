'use client';

import React from 'react';
import JobCard from '../../components/JobCard';
import { useJobs } from '@/modules/jobs/hooks/useJobs';

const cultureData = [
    {
        imgSrc: '/modern.jpg',
        title: 'Innovation at the Core',
        description:
            'At Capventis, innovation drives everything we do. We foster an environment where creativity and fresh ideas are encouraged.',
    },
    {
        imgSrc: '/culture.jpg',
        title: 'Collaborative Work Environment',
        description:
            'We believe in the power of teamwork. Our culture is built on collaboration, where every voice is heard and valued.',
    },
    {
        imgSrc: '/growth.jpg',
        title: 'Growth and Development',
        description:
            'We are committed to the growth of our employees, providing ample opportunities for learning, skill development, and career advancement.',
    },
];

export default function Home() {
    const { jobs } = useJobs(); // ✅ Relay hook
    console.log('jobs', jobs);
    return (
        <div className="bg-gray-100 text-center min-h-screen px-4 py-10 space-y-24">

            {/* About Us Section */}
            <section id="about" className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-6">
                    About Us
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Capventis specializes in delivering smart, data-driven solutions for modern businesses.
                    Our Applicant Tracking System empowers HR teams to efficiently manage job postings, streamline
                    applications, and enhance hiring experiences.
                </p>
            </section>

            {/* Job Positions Section */}
            <section id="positions" className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-12">Open Positions</h2>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {jobs?.length === 0 ? (
                        <p className="col-span-full text-gray-500">No open positions available right now.</p>
                    ) : (
                        jobs.map((job) => (
                            <JobCard id={job.id} key={job.id} title={job.title} description={job.description} />
                        ))
                    )}
                </div>
            </section>

            {/* Why Us / Culture Section */}
            <section id="culture" className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-12">
                    Why Work With Us
                </h2>

                <div className="space-y-16">
                    {cultureData.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Image */}
                            <div className="w-full md:w-1/2">
                                <img
                                    src={item.imgSrc}
                                    alt={item.title}
                                    className="w-full h-auto object-cover rounded-2xl shadow-md"
                                />
                            </div>

                            {/* Text */}
                            <div className="w-full md:w-1/2 px-4 md:px-6">
                                <h3 className="text-2xl font-semibold text-blue-800 mb-4">{item.title}</h3>
                                <p className="text-lg text-gray-700">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
