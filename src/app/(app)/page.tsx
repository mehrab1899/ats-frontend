'use client';

import React from 'react';
import JobCard from '../../components/JobCard';
import JobListQuery from '@/components/JobListQuery';

const jobData = [
    {
        title: 'Frontend Developer',
        description: 'We are looking for a skilled React developer with experience in building scalable web applications.',
    },
    {
        title: 'Backend Engineer',
        description: 'Join our team to build robust APIs and microservices using Node.js and TypeScript.',
    },
    {
        title: 'UI/UX Designer',
        description: 'Design intuitive user interfaces and experiences for our applicant tracking platform.',
    },
];

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
    return (
        <div className="bg-gray-100 text-center min-h-screen px-4 py-10 space-y-24">

            {/* About Us Section */}
            <section className="max-w-4xl mx-auto">
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
            <section className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-12">
                    Open Positions
                </h2>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {jobData.map((job, index) => (
                        <JobCard key={index} title={job.title} description={job.description} />
                    ))}
                </div>
            </section>

            {/* Why Us / Culture Section */}
            <section className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-12">
                    Why Work With Us
                </h2>

                <div className="space-y-12">
                    {cultureData.map((item, index) => (
                        <div
                            key={index}
                            className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                        >
                            <div className="w-1/2">
                                <img
                                    src={item.imgSrc}
                                    alt={item.title}
                                    className="w-92 h-100 object-contain rounded-lg mx-auto"
                                />
                            </div>
                            <div className="w-1/2 px-6 py-4">
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
