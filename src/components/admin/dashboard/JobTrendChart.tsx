'use client';

import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
    { month: 'Jan', jobs: 4 },
    { month: 'Feb', jobs: 7 },
    { month: 'Mar', jobs: 5 },
    { month: 'Apr', jobs: 9 },
    { month: 'May', jobs: 12 },
    { month: 'Jun', jobs: 8 },
];

export default function JobTrendChart() {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4 text-[#012C56]">Monthly Job Postings</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="jobs" stroke="#012C56" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}