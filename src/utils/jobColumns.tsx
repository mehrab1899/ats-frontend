// src/utils/jobColumns.ts
import { JobCell, JobActionsCell } from '@/components/admin/job/JobCell';
import { Column } from '@/components/DataTable';
import { AdminJobRow_job$key } from '@/__generated__/AdminJobRow_job.graphql';

export const jobColumns: Column<AdminJobRow_job$key>[] = [
    {
        key: 'title',
        label: 'Title',
        render: (_val, row) => <JobCell jobRef={row} field="title" />
    },
    {
        key: 'description',
        label: 'Description',
        render: (_val, row) => <JobCell jobRef={row} field="description" />
    },
    {
        key: 'status',
        label: 'Status',
        render: (_val, row) => <JobCell jobRef={row} field="status" />
    },
    {
        key: 'type',
        label: 'Job Type',
        render: (_val, row) => <JobCell jobRef={row} field="type" />
    },
    {
        key: 'applicants',
        label: 'Applicants',
        render: (_val, row) => <JobCell jobRef={row} field="applicants" />
    },
    {
        key: 'createdAt',
        label: 'Posted On',
        render: (_val, row) => <JobCell jobRef={row} field="createdAt" />
    },
    {
        key: 'id',
        label: 'Actions',
        render: (_val, row) => <JobActionsCell jobRef={row} />
    }
];
