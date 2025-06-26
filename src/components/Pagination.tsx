'use client';

import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const getPaginationRange = (current: number, total: number): (number | '...')[] => {
    const delta = 1;
    const range: (number | '...')[] = [];
    const left = Math.max(2, current - delta);
    const right = Math.min(total - 1, current + delta);

    range.push(1);

    if (left > 2) range.push('...');

    for (let i = left; i <= right; i++) {
        range.push(i);
    }

    if (right < total - 1) range.push('...');

    if (total > 1) range.push(total);

    return range;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const pages = getPaginationRange(currentPage, totalPages);

    console.log('totalPages', totalPages)

    return (
        <div className="flex items-center justify-center gap-2 py-4 text-sm font-medium">
            {/* Prev Button */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-3 py-1 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:bg-gray-200 disabled:text-gray-400"
            >
                <FaChevronLeft size={12} />
            </button>

            {/* Numbered Pages */}
            {pages.map((page, idx) =>
                page === '...' ? (
                    <span key={`ellipsis-${idx}`} className="px-2 py-1 text-gray-500">
                        ...
                    </span>
                ) : (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`px-3 py-1 rounded-md transition border-b-2 ${currentPage === page
                            ? 'text-[var(--primary-color)] border-[var(--primary-color)] font-semibold'
                            : 'text-gray-700 border-transparent hover:bg-gray-100'
                            }`}
                    >
                        {page}
                    </button>
                )
            )}

            {/* Next Button */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 px-3 py-1 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:bg-gray-200 disabled:text-gray-400"
            >
                <FaChevronRight size={12} />
            </button>
        </div>
    );
};

export default Pagination;
