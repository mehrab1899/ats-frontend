'use client';

import React, { useState } from 'react';
import StatCardsGrid from '@/components/admin/dashboard/StatCardsGrid';
import JobTrendChart from '@/components/admin/dashboard/JobTrendChart';
import TabSwitcher from '@/components/admin/dashboard/TabSwitcher';
import SearchField from '@/components/SearchField';
import DataTable from '@/components/DataTable';
import { jobColumns } from '../jobs/columns';
import { applicantColumns } from '../applicants/columns';
import { useJobs } from '../jobs/useJobs';
import { useApplicants } from '../applicants/useApplicants';

const TABS = ['Jobs', 'Applicants'];
const FILTERS = ['All', 'Active', 'Archived'];

export default function DashboardPage() {
    const [selectedTab, setSelectedTab] = useState<string>(TABS[0]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedFilter, setSelectedFilter] = useState<string>(FILTERS[0]);

    const { data: jobData } = useJobs();
    const { data: applicantData } = useApplicants();
    console.log('applicantData', applicantData)

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
                    {FILTERS.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setSelectedFilter(filter)}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition border ${selectedFilter === filter
                                ? 'bg-[#012C56] text-white border-[#012C56]'
                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border-gray-300'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Row 3: Table */}
                <div className="pt-2">
                    <DataTable
                        columns={selectedTab === 'Jobs' ? jobColumns : applicantColumns}
                        data={selectedTab === 'Jobs' ? jobData : applicantData}
                        className="bg-white border-none [&>table>tbody>tr:nth-child(even)]:bg-gray-50 [&>table>tbody>tr:hover]:bg-[#f0f4f8] [&>table>tbody>tr:hover]:text-[#012C56]"
                    />
                </div>
            </div>
        </div>
    );
}