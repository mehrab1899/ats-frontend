import { useMonthlyTrends } from '@/modules/dashboard/hooks/useMonthlyTrends';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function JobTrendChart() {
    const data = useMonthlyTrends();

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4 text-[var(--primary-color)]">Monthly Job Postings</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="jobs" stroke="#012C56" strokeWidth={2} />
                    <Line type="monotone" dataKey="applicants" stroke="#2e4257" strokeWidth={2} />
                    <Line type="monotone" dataKey="hired" stroke="#00a86b" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
