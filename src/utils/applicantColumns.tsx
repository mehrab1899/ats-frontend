// src/utils/applicantColumns.ts
import { Column } from '@/components/DataTable';
import { ApplicantCell } from '@/components/admin/applicant/ApplicantCell';
import { ApplicantActionsCell } from '@/components/admin/applicant/ApplicantActionsCell';
import { ApplicantRow_applicant$key } from '@/__generated__/ApplicantRow_applicant.graphql';

export const applicantColumns: Column<ApplicantRow_applicant$key>[] = [
    {
        key: 'name',
        label: 'Name',
        render: (_val, row) => <ApplicantCell applicantRef={row} field="name" />,
    },
    {
        key: 'email',
        label: 'Email',
        render: (_val, row) => <ApplicantCell applicantRef={row} field="email" />,
    },
    {
        key: 'stage',
        label: 'Stage',
        render: (_val, row) => <ApplicantCell applicantRef={row} field="stage" />,
    },
    {
        key: 'position',
        label: 'Position',
        render: (_val, row) => <ApplicantCell applicantRef={row} field="position" />,
    },
    {
        key: 'appliedAt',
        label: 'Applied At',
        render: (_val, row) => <ApplicantCell applicantRef={row} field="appliedAt" />,
    },
    {
        key: 'id',
        label: 'Actions',
        render: (_val, row) => <ApplicantActionsCell applicantRef={row} />,
    },
];
