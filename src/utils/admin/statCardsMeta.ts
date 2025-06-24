import { Briefcase, Users, Star } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export type StatCardMeta = {
    key: string;
    label: string;
    icon: LucideIcon;
    bgColor: string;
    textColor: string;
};

export const STAT_CARD_META: StatCardMeta[] = [
    {
        key: 'activeJobs',
        label: 'Active Jobs',
        icon: Briefcase,
        bgColor: 'bg-gradient-to-r from-[#EDF7FF] to-[#C4D9F7]',
        textColor: 'text-[#004D99]',
    },
    {
        key: 'totalApplicants',
        label: 'Total Applicants',
        icon: Users,
        bgColor: 'bg-gradient-to-r from-[#F6F4FF] to-[#D7CCE0]',
        textColor: 'text-[#4B3D8F]',
    },
    {
        key: 'topJob',
        label: 'Top Job',
        icon: Star,
        bgColor: 'bg-gradient-to-r from-[#FFECE7] to-[#FFBDAF]',
        textColor: 'text-[#C75B39]',
    },
    {
        key: 'shortlistedCount',
        label: 'Shortlisted Count',
        icon: Users,
        // New grayish gradient for shortlisted card
        bgColor: 'bg-gradient-to-r from-[#E5E5E5] to-[#B0B0B0]', 
        textColor: 'text-[#003C6C]', // Dark blue text for clarity
    },
];
