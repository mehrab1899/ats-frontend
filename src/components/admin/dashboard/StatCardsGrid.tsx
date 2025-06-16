import StatCard from './StatCard';
import { Briefcase, Users, Star } from 'lucide-react';

export default function StatCardsGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <StatCard label="Active Jobs" value={12} icon={<Briefcase />} bgColor="bg-[#EDF7FF]" textColor="text-[#004D99]" />
            <StatCard label="Total Applicants" value={320} icon={<Users />} bgColor="bg-[#F6F4FF]" textColor="text-[#4B3D8F]" />
            <StatCard label="Top Job: Frontend Engineer" value="84 Applications" icon={<Star />} bgColor="bg-[#FFECE7]" textColor="text-[#C75B39]" />
        </div>
    );
}