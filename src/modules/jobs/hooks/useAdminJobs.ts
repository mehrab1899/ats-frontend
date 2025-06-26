// src/modules/jobs/hooks/useAdminJobs.ts
import { useLazyLoadQuery } from 'react-relay';
import { jobQueries_AdminJobsQuery } from '@/__generated__/jobQueries_AdminJobsQuery.graphql';
import { AdminJobsQuery } from '../graphql/jobQueries';

export const useAdminJobs = (search?: string, status?: string, skip: number = 0, take: number = 10) => {
    const data = useLazyLoadQuery<jobQueries_AdminJobsQuery>(AdminJobsQuery, {
        search,
        status,
        skip,
        take,
    }, {
        fetchPolicy: 'store-or-network',
    });

    return {
        adminJobs: data.jobs,
    };
};
