'use client';

import React, { useMemo, useState, useEffect } from 'react';
import StatCardsGrid from '@/components/admin/dashboard/StatCardsGrid';
import JobTrendChart from '@/components/admin/dashboard/JobTrendChart';
import SearchField from '@/components/SearchField';
import DataTable from '@/components/DataTable';
import Pagination from '@/components/Pagination';
import { jobColumns } from '@/utils/jobColumns';
import { applicantColumns } from '@/utils/applicantColumns';
import { useApplicants } from '@/modules/applicants/hooks/useApplicants';
import { useAdminJobs } from '@/modules/jobs/hooks/useAdminJobs';

const TABS = ['Jobs', 'Applicants'];
const JOB_FILTERS = ['ALL', 'OPEN', 'DRAFT', 'CLOSED'];
const APPLICANT_FILTERS = ['APPLIED', 'SHORTLISTED', 'INTERVIEWED', 'HIRED', 'REJECTED'];

export default function DashboardPage() {
    const [selectedTab, setSelectedTab] = useState<string>(TABS[0]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    // 🔹 Separate filters
    const [jobFilter, setJobFilter] = useState<'ALL' | 'OPEN' | 'DRAFT' | 'CLOSED'>('ALL');
    const [applicantFilter, setApplicantFilter] = useState<'APPLIED' | 'SHORTLISTED' | 'INTERVIEWED' | 'HIRED' | 'REJECTED'>('APPLIED');

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize] = useState<number>(10);

    const memoizedSearchTerm = useMemo(() => searchTerm, [searchTerm]);

    // 🔹 Derive status/stage filters from selected tab
    const statusFilter = useMemo(() => {
        return selectedTab === 'Jobs' && jobFilter !== 'ALL' ? jobFilter : undefined;
    }, [selectedTab, jobFilter]);

    const stageFilter = useMemo(() => {
        return selectedTab === 'Applicants' ? applicantFilter : undefined;
    }, [selectedTab, applicantFilter]);

    // 🔹 Fetch data
    const { applicants } = useApplicants(memoizedSearchTerm, stageFilter, (currentPage - 1) * pageSize, pageSize);
    const { adminJobs } = useAdminJobs(memoizedSearchTerm, statusFilter, (currentPage - 1) * pageSize, pageSize);

    const totalPagesApplicants = Math.ceil(applicants.totalApplicantsCount / pageSize);
    const totalPagesJobs = Math.ceil(adminJobs?.totalJobsCount / pageSize);

    // 🔹 Reset page on relevant change
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedTab, searchTerm, jobFilter, applicantFilter]);

    // 🔹 Active filters + setter based on tab
    const activeFilters = selectedTab === 'Jobs' ? JOB_FILTERS : APPLICANT_FILTERS;
    const selectedFilter = selectedTab === 'Jobs' ? jobFilter : applicantFilter;
    const setSelectedFilter = selectedTab === 'Jobs' ? setJobFilter : setApplicantFilter;

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
                                    ? 'border-b-2 border-[#012C56] text-[#012C56]'
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
                            onClick={() => setSelectedFilter(filter)}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition border ${selectedFilter === filter
                                ? 'bg-[#012C56] text-white border-[#012C56]'
                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border-gray-300'
                                }`}
                        >
                            {filter === 'ALL' ? 'All' : filter.charAt(0) + filter.slice(1).toLowerCase()}
                        </button>
                    ))}
                </div>

                {/* Row 3: Table */}
                <div className="pt-2">
                    <DataTable
                        columns={selectedTab === 'Jobs' ? jobColumns : applicantColumns}
                        data={selectedTab === 'Jobs' ? adminJobs.jobs : applicants.applicants}
                        className="bg-white border-none [&>table>tbody>tr:nth-child(even)]:bg-gray-50 [&>table>tbody>tr:hover]:bg-[#f0f4f8] [&>table>tbody>tr:hover]:text-[#012C56]"
                    />
                </div>

                {/* Pagination Row */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={selectedTab === 'Jobs' ? totalPagesJobs : totalPagesApplicants}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>
        </div>
    );
}
