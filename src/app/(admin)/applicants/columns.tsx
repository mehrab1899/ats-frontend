import { Column } from '@/components/DataTable';

export type Applicant = {
    id: string;
    name: string;
    email: string;
    stage: 'APPLIED' | 'SHORTLISTED' | 'INTERVIEWED' | 'HIRED' | 'REJECTED';
    position: string;
    appliedAt: string;
};

export const applicantColumns: Column<Applicant>[] = [
    { key: 'name', label: 'Name' },
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
            <div className="flex gap-2" >
                <button className="text-blue-600 hover:underline"> Edit </button>
                < button className="text-red-600 hover:underline" > Archive </button>
            </div>
        ),
    }
];
