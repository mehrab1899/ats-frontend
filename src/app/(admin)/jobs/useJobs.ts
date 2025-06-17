'use client';

import { useEffect, useState } from 'react';
import { jobData } from './mockData';
import { Job } from './columns';

export function useJobs(): { data: Job[]; loading: boolean } {
    const [data, setData] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setData(jobData); // 🔁 Swap with GraphQL response later
            setLoading(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    return { data, loading };
}
