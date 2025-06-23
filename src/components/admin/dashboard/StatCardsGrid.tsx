import { useDashboardStats } from '@/modules/dashboard/hooks/useDashboardStats';
import StatCard from './StatCard';
import { STAT_CARD_META } from '@/utils/admin/statCardsMeta';

export default function StatCardsGrid() {
    const stats = useDashboardStats();

    return (
        <div className="grid gap-6 auto-rows-fr grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
            {STAT_CARD_META.map(({ key, label, icon: Icon, bgColor, textColor }) => (
                <StatCard
                    key={key}
                    label={label}
                    value={stats[key as keyof typeof stats]}
                    icon={<Icon className="w-8 h-8" />}
                    bgColor={bgColor}
                    textColor={textColor}
                />
            ))}
        </div>
    );
}
