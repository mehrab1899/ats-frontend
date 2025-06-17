import { Job } from './columns';

export const jobData: Job[] = [
    {
        id: 'job-1',
        title: 'Frontend Developer',
        description: 'React + Tailwind Developer',
        status: 'OPEN',
        type: 'Full-time',
        applicants: 12,
        createdAt: '2024-12-01T10:00:00Z',
    },
    {
        id: 'job-2',
        title: 'Backend Engineer',
        description: 'Node.js + GraphQL + Prisma',
        status: 'DRAFT',
        type: 'Contract',
        applicants: 8,
        createdAt: '2025-01-10T14:30:00Z',
    },
];
