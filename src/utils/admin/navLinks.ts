import { LayoutDashboard, Briefcase, Users } from 'lucide-react';

const navLinks = [
    {
        label: 'Dashboard',
        href: '/dashboard',
        icon: LayoutDashboard,
    },
    {
        label: 'Jobs',
        href: '/jobs',
        icon: Briefcase,
    },
    {
        label: 'Applicants',
        href: '/applicants',
        icon: Users,
    },
];

export default navLinks;