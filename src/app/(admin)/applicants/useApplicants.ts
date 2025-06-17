'use client';

import { useEffect, useState } from 'react';
import { applicantData } from './mockData';
import { Applicant } from './columns';

export function useApplicants(): { data: Applicant[]; loading: boolean } {
    const [data, setData] = useState<Applicant[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setData(applicantData); // 🔁 Swap with GraphQL later
            setLoading(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    return { data, loading };
}
