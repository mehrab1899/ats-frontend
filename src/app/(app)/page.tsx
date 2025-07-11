'use client';

import React from 'react';
import JobCard from '../../components/JobCard';
// import { usePublicJobs } from '@/modules/jobs/hooks/usePublicJobs';
import { Carousel } from '@/components/Carousel';
import { PublicJobsPaginationQuery } from '@/modules/jobs/graphql/jobQueries'
import { useLazyLoadQuery } from 'react-relay';
import { jobQueries_PublicJobsPaginationQuery } from '@/__generated__/jobQueries_PublicJobsPaginationQuery.graphql';
import { usePaginatedPublicJobs } from '@/modules/jobs/hooks/usePaginatedPublicJobs';
import Button from '@/components/Button';

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

    const queryData = useLazyLoadQuery<jobQueries_PublicJobsPaginationQuery>(
        PublicJobsPaginationQuery,
        { first: 6 },
        { fetchPolicy: 'store-or-network' }
    );

    const {
        data,
        loadNext,
        hasNext,
        isLoadingNext
    } = usePaginatedPublicJobs(queryData);

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

                {!data?.publicJobs?.edges?.length ? (
                    <p className="text-center text-gray-500">
                        No open positions available right now.
                    </p>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[600px] overflow-y-auto px-4">
                            {data?.publicJobs.edges.map((edge) =>
                                edge?.node ? (
                                    <JobCard key={edge.node.id} jobRef={edge.node} />
                                ) : null
                            )}
                        </div>

                        {hasNext && (
                            <div className="mt-6 flex justify-center">
                                <Button
                                    onClick={() => loadNext(6)}
                                    className={`bg-slate-800 hover:bg-slate-700 disabled:opacity-50`}
                                    label={isLoadingNext ? 'Loading...' : 'Load More'}
                                />
                            </div>
                        )}
                    </>
                )}
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
