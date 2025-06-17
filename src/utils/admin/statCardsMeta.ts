import { Briefcase, Users, Star } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export type StatCardMeta = {
    key: string;
    label: string;
    icon: LucideIcon; // component reference
    bgColor: string;
    textColor: string;
};

export const STAT_CARD_META: StatCardMeta[] = [
    {
        key: 'activeJobs',
        label: 'Active Jobs',
        icon: Briefcase,
        bgColor: 'bg-[#EDF7FF]',
        textColor: 'text-[#004D99]',
    },
    {
        key: 'totalApplicants',
        label: 'Total Applicants',
        icon: Users,
        bgColor: 'bg-[#F6F4FF]',
        textColor: 'text-[#4B3D8F]',
    },
    {
        key: 'topJob',
        label: 'Top Job: Frontend Engineer',
        icon: Star,
        bgColor: 'bg-[#FFECE7]',
        textColor: 'text-[#C75B39]',
    },
];
