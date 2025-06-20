import { Column } from '@/components/DataTable';
import { FaArchive, FaEdit } from 'react-icons/fa';

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
