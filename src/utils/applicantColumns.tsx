import { Column } from '@/components/DataTable';
import { FaArchive, FaEdit } from 'react-icons/fa';
import Link from 'next/link';
import ApplicantStageAction from '@/app/(admin)/applicant/ApplicantStageAction';

export type Applicant = {
    id: string;
    name: string;
    email: string;
    stage: 'APPLIED' | 'SHORTLISTED' | 'INTERVIEWED' | 'HIRED' | 'REJECTED';
    position: string;
    appliedAt: string;
};

export const applicantColumns: Column<Applicant>[] = [
    {
        key: 'name',
        label: 'Name',
        render: (val, row) => (
            <Link href={`/applicant/${row.id}`} passHref>
                <span className="text-blue-600 hover:underline">{val}</span>
            </Link>
        ),
    },
    { key: 'email', label: 'Email' },
    { key: 'stage', label: 'Stage' },
    { key: 'position', label: 'Position' },
    {
        key: 'appliedAt',
        label: 'Applied At',
        render: (val) => new Date(val).toLocaleDateString(),
    },
    {
        key: 'id',
        label: 'Actions',
        render: (_val, row) => (
            <div className="flex gap-2">
                <ApplicantStageAction id={row.id} currentStage={row.stage} />
            </div>
        ),
    }
];
