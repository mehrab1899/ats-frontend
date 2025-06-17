import StatCard from './StatCard';
import { STAT_CARD_META } from '@/utils/admin/statCardsMeta';

const values = {
    activeJobs: 12,
    totalApplicants: 320,
    topJob: '84 Applications',
};

export default function StatCardsGrid() {
    return (
        <div className="grid gap-6 auto-rows-fr grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
            {STAT_CARD_META.map(({ key, label, icon: Icon, bgColor, textColor }) => (
                <StatCard
                    key={key}
                    label={label}
                    value={values[key as keyof typeof values]}
                    icon={<Icon className="w-8 h-8" />}
                    bgColor={bgColor}
                    textColor={textColor}
                />
            ))}
        </div>
    );
}
