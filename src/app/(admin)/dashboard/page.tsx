import StatCardsGrid from '@/components/admin/dashboard/StatCardsGrid';
import JobTrendChart from '@/components/admin/dashboard/JobTrendChart';

export default function DashboardPage() {
    return (
        <div className="space-y-10">
            <StatCardsGrid />
            <JobTrendChart />
        </div>
    );
}