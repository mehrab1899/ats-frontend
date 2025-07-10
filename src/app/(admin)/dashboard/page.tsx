'use client';

import React, { useMemo, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import SearchField from '@/components/SearchField';
import Pagination from '@/components/Pagination';
import { Job, jobColumns } from '@/utils/jobColumns';
import DataTable from '@/components/DataTable';
import { Applicant, applicantColumns } from '@/utils/applicantColumns';
import { useApplicants } from '@/modules/applicants/hooks/useApplicants';
import { useAdminJobs } from '@/modules/jobs/hooks/useAdminJobs';
import { useLazyLoadQuery } from 'react-relay';
// import { ApplicantListPaginationQuery } from '@/modules/applicants/graphql/applicantsQuery';
import applicantsQuery_ApplicantListPaginationQuery from '@/__generated__/applicantsQuery_ApplicantListPaginationQuery.graphql';
import { PaginatedApplicantList_data$key } from '@/__generated__/PaginatedApplicantList_data.graphql';
import { usePaginatedApplicants } from '@/modules/applicants/hooks/usePaginatedApplicants';

const StatCardsGrid = dynamic(() => import('@/components/admin/dashboard/StatCardsGrid'), {
    loading: () => <div className="text-center py-4">Loading cards...</div>,
    ssr: false
});

const JobTrendChart = dynamic(() => import('@/components/admin/dashboard/JobTrendChart'), {
    loading: () => <div className="text-center py-4">Loading chart...</div>,
    ssr: false
});


const TABS = ['Jobs', 'Applicants'];
type JobFilter = 'ALL' | 'OPEN' | 'DRAFT' | 'CLOSED';
type ApplicantFilter = 'APPLIED' | 'SHORTLISTED' | 'INTERVIEWED' | 'HIRED' | 'REJECTED';
type FilterType = JobFilter | ApplicantFilter;

const JOB_FILTERS: JobFilter[] = ['ALL', 'OPEN', 'DRAFT', 'CLOSED'];
const APPLICANT_FILTERS: ApplicantFilter[] = ['APPLIED', 'SHORTLISTED', 'INTERVIEWED', 'HIRED', 'REJECTED'];


export default function DashboardPage() {
    const [selectedTab, setSelectedTab] = useState<string>(TABS[0]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    // 🔹 Separate filters
    const [jobFilter, setJobFilter] = useState<'ALL' | 'OPEN' | 'DRAFT' | 'CLOSED'>('ALL');
    const [applicantFilter, setApplicantFilter] = useState<'APPLIED' | 'SHORTLISTED' | 'INTERVIEWED' | 'HIRED' | 'REJECTED'>('APPLIED');

    // const [currentPage, setCurrentPage] = useState<number>(1);

    // const [pageSize] = useState<number>(10);
    const pageSize = 10;


    const memoizedSearchTerm = useMemo(() => searchTerm, [searchTerm]);

    // 🔹 Derive status/stage filters from selected tab
    const statusFilter = useMemo(() => {
        return selectedTab === 'Jobs' && jobFilter !== 'ALL' ? jobFilter : undefined;
    }, [selectedTab, jobFilter]);

    const stageFilter = useMemo(() => {
        return selectedTab === 'Applicants' ? applicantFilter : undefined;
    }, [selectedTab, applicantFilter]);

    // 🔹 Fetch data
    // const { applicants } = useApplicants(memoizedSearchTerm, stageFilter, (currentPage - 1) * pageSize, pageSize);

    const applicantsQueryData = useLazyLoadQuery<PaginatedApplicantList_data$key>(
        applicantsQuery_ApplicantListPaginationQuery,
        {
            search: memoizedSearchTerm,
            stage: stageFilter,
            first: pageSize,
        },
        { fetchPolicy: 'store-or-network' }
    );

    const {
        applicants,
        currentPage: relayPage,
        totalPages,
        goToPage,
        goToNextPage,
        isLoading,
    } = usePaginatedApplicants({
        fragmentRef: applicantsQueryData,
        pageSize,
    });

    const currentPage = relayPage;
    const { adminJobs } = useAdminJobs(memoizedSearchTerm, statusFilter, (currentPage - 1) * pageSize, pageSize);

    const totalPagesApplicants = totalPages;
    const totalPagesJobs = Math.ceil(adminJobs?.totalJobsCount / pageSize);

    // 🔹 Reset page on relevant change
    // useEffect(() => {
    //     setCurrentPage(1);
    // }, [selectedTab, searchTerm, jobFilter, applicantFilter]);

    // 🔹 Active filters + setter based on tab
    const activeFilters = selectedTab === 'Jobs' ? JOB_FILTERS : APPLICANT_FILTERS;
    const selectedFilter = selectedTab === 'Jobs' ? jobFilter : applicantFilter;
    const setSelectedFilter = selectedTab === 'Jobs' ? setJobFilter : setApplicantFilter;

    const handleFilterClick = (filter: string) => {
        if (selectedTab === 'Jobs') {
            setJobFilter(filter as JobFilter);
        } else {
            setApplicantFilter(filter as ApplicantFilter);
        }
    };

    return (
        <div className="space-y-10">
            {/* Section 1: Stat Cards & Chart in single row */}
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-1/2">
                    <JobTrendChart />
                </div>
                <div className="w-full lg:w-1/2">
                    <StatCardsGrid />
                </div>
            </div>

            {/* Section 2: Table + Controls */}
            <div className="rounded-2xl shadow-md bg-white px-0 py-0">
                {/* Row 1: Tabs + Search */}
                <div className="flex justify-between items-end px-6 pt-4 border-b border-gray-200">
                    <div className="flex gap-6">
                        {TABS.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setSelectedTab(tab)}
                                className={`pb-2 font-medium text-sm transition duration-150 ${selectedTab === tab
                                    ? 'border-b-2 border-[var(--primary-color)] text-[var(--primary-color)]'
                                    : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className='mb-2'>
                        <SearchField
                            value={searchTerm}
                            onChange={setSearchTerm}
                            placeholder={`Search ${selectedTab.toLowerCase()}...`}
                        />
                    </div>
                </div>

                {/* Row 2: Filter Pills */}
                <div className="flex items-center flex-wrap gap-2 px-6 py-3">
                    {activeFilters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => handleFilterClick(filter)}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition border ${selectedFilter === filter
                                ? 'bg-[var(--primary-color)] text-white border-[var(--primary-color)]'
                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border-gray-300'
                                }`}
                        >
                            {filter === 'ALL' ? 'All' : filter.charAt(0) + filter.slice(1).toLowerCase()}
                        </button>
                    ))}

                </div>

                {/* Row 3: Table */}
                <div className="pt-2">
                    {selectedTab === 'Jobs' ? (
                        // <DataTable<Job>
                        //     columns={jobColumns}
                        //     data={[...adminJobs.jobs]} // force to mutable array
                        //     className="bg-white border-none [&>table>tbody>tr:nth-child(even)]:bg-gray-50 [&>table>tbody>tr:hover]:bg-[#f0f4f8] [&>table>tbody>tr:hover]:text-[var(--primary-color)]"
                        // />
                        null
                    ) : (
                        <DataTable<ApplicantRow_applicant$key>
                            columns={applicantColumns}
                            data={[...applicants]}
                            className="bg-white border-none [&>table>tbody>tr:nth-child(even)]:bg-gray-50 [&>table>tbody>tr:hover]:bg-[#f0f4f8] [&>table>tbody>tr:hover]:text-[var(--primary-color)]"
                        />
                    )}

                </div>

                {/* Pagination Row */}
                {/* <Pagination
                    currentPage={currentPage}
                    totalPages={selectedTab === 'Jobs' ? totalPagesJobs : totalPagesApplicants}
                    onPageChange={(page) => setCurrentPage(page)}
                /> */}
                <Pagination
                    currentPage={relayPage}
                    totalPages={totalPages}
                    onPageChange={goToPage}
                />
            </div>
        </div>
    );
}
