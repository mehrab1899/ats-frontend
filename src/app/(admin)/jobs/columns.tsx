import { Column } from '@/components/DataTable';

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
    { key: 'title', label: 'Title' },
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
            <div className= "flex gap-2" >
            <button className="text-blue-600 hover:underline"> Edit </button>
                < button className="text-red-600 hover:underline" > Archive </button>
                </div>
        ),
      }
];
