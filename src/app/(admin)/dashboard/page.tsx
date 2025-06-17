'use client';

import React, { useState } from 'react';
import StatCardsGrid from '@/components/admin/dashboard/StatCardsGrid';
import JobTrendChart from '@/components/admin/dashboard/JobTrendChart';
import TabSwitcher from '@/components/admin/dashboard/TabSwitcher';
import SearchField from '@/components/SearchField';

const TABS = ['Jobs', 'Applicants'];
const FILTERS = ['All', 'Active', 'Archived'];

export default function DashboardPage() {
    const [selectedTab, setSelectedTab] = useState<string>(TABS[0]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedFilter, setSelectedFilter] = useState<string>(FILTERS[0]);

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
            <div className="rounded-2xl border bg-white shadow-sm px-6 py-4 space-y-4">
                {/* Row 1: Tabs + Search */}
                <div className="flex justify-between items-center flex-wrap gap-4">
                    <TabSwitcher options={TABS} selected={selectedTab} onSelect={setSelectedTab} />
                    <SearchField
                        value={searchTerm}
                        onChange={setSearchTerm}
                        placeholder={`Search ${selectedTab.toLowerCase()}...`}
                    />
                </div>

                {/* Row 2: Filter Pills */}
                <div className="flex flex-wrap gap-2">
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

                {/* Row 3: Placeholder Table */}
                <div className="mt-4 border rounded-lg p-4 bg-gray-50 text-sm text-gray-600 text-center">
                    Table content for <strong>{selectedTab}</strong> filtered by <strong>{selectedFilter}</strong>{' '}
                    with search term "<strong>{searchTerm}</strong>" will appear here.
                </div>
            </div>
        </div>
    );
}
