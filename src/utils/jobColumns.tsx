import JobStatusAction from '@/components/admin/job/JobStatusAction';
import { Column } from '@/components/DataTable';
import Link from 'next/link';
import { FaEdit, FaArchive } from 'react-icons/fa';
import type { jobQueries_AdminJobsQuery$data } from '@/__generated__/jobQueries_AdminJobsQuery.graphql';

export type Job = jobQueries_AdminJobsQuery$data['jobs']['jobs'][number];

export const jobColumns: Column<Job>[] = [
    {
        key: 'title', label: 'Title', render: (val, row) => (
            <Link href={`/job/${row.id}?mode=view`} passHref>
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
                <Link href={`/job/${row.id}?mode=edit`} passHref>
                    <button
                        className="flex items-center gap-1 px-4 py-2 rounded-full text-[var(--primary-color)] border border-[var(--primary-color)] hover:bg-[#E6EDF4] transition duration-150"
                    >
                        <FaEdit className="text-sm" />
                    </button>
                </Link>
                <JobStatusAction id={row.id} currentStatus={row.status} />
            </div>
        ),
    }
];
