'use client';

import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex items-center justify-center gap-2 py-4">
            {/* Previous Page Button */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:bg-gray-200 disabled:text-gray-400"
            >
                <FaChevronLeft />
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(index + 1)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition duration-150 ${currentPage === index + 1
                        ? 'bg-[#012C56] text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                >
                    {index + 1}
                </button>
            ))}

            {/* Next Page Button */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:bg-gray-200 disabled:text-gray-400"
            >
                <FaChevronRight />
            </button>
        </div>
    );
};

export default Pagination;
