import { Column } from '@/components/DataTable';
import Link from 'next/link';
import { FaEdit, FaArchive } from 'react-icons/fa';

export type Job = {
    id: string;
    title: string;
    description: string;
    status: 'OPEN' | 'CLOSED' | 'DRAFT';
    type: 'Full-time' | 'Part-time' | 'Contract';
    applicants: number;
    createdAt: string;
};



export const jobColumns: Column<Job>[] = [
    {
        key: 'title', label: 'Title', render: (val, row) => (
            <Link href={`/job/${row.id}`} passHref>
                <span className="text-blue-600 hover:underline">{val}</span>
            </Link>
        ),
    },
    { key: 'description', label: 'Description' },
    { key: 'status', label: 'Status' },
    { key: 'type', label: 'Job Type' },
    { key: 'applicants', label: 'Applicants' },
    {
        key: 'createdAt',
        label: 'Posted On',
        render: (val) => new Date(val).toLocaleDateString(),
    },
    {
        key: 'id',
        label: 'Actions',
        render: (_val, row) => (
            <div className="flex gap-2">
                <button
                    className="flex items-center gap-1 px-4 py-2 rounded-full text-[#012c56] border border-[#012c56] hover:bg-[#E6EDF4] transition duration-150"
                >
                    <FaEdit className="text-sm" />
                </button>
                <button
                    className="flex items-center gap-1 px-4 py-2 rounded-full text-red-600 border border-red-600 hover:bg-red-100 transition duration-150"
                >
                    <FaArchive className="text-sm" />
                </button>
            </div>
        ),
    }
];
