'use client';

import { useFragment } from 'react-relay/hooks';
import { AdminJobRowFragment } from '@/modules/jobs/fragments/AdminJobRow.fragment';
import { AdminJobRow_job$key } from '@/__generated__/AdminJobRow_job.graphql';
import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';
import JobStatusAction from './JobStatusAction';

type Props = {
    jobRef: AdminJobRow_job$key;
    field: keyof ReturnType<typeof useFragment<typeof AdminJobRowFragment, AdminJobRow_job$key>>;
};

export function JobCell({ jobRef, field }: Props) {
    const job = useFragment(AdminJobRowFragment, jobRef);

    if (field === 'title') {
        return (
            <Link href={`/job/${job.id}?mode=view`} passHref>
                <span className="text-blue-600 hover:underline">{job.title}</span>
            </Link>
        );
    }

    if (field === 'createdAt') {
        return <>{new Date(job.createdAt).toLocaleDateString()}</>;
    }

    return <>{(job as any)[field]}</>;
}

export function JobActionsCell({ jobRef }: { jobRef: AdminJobRow_job$key }) {
    const job = useFragment(AdminJobRowFragment, jobRef);

    return (
        <div className="flex gap-2">
            <Link href={`/job/${job.id}?mode=edit`} passHref>
                <button className="flex items-center gap-1 px-4 py-2 rounded-full text-[var(--primary-color)] border border-[var(--primary-color)] hover:bg-[#E6EDF4] transition duration-150">
                    <FaEdit className="text-sm" />
                </button>
            </Link>
            <JobStatusAction id={job.id} currentStatus={job.status} />
        </div>
    );
}
