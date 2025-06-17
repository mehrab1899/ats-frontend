// src/modules/jobs/hooks/useJobs.ts
import { useLazyLoadQuery } from 'react-relay';
import { jobQueries_JobsQuery } from '@/__generated__/jobQueries_JobsQuery.graphql';
import { JobsQuery } from '../graphql/jobQueries';

export const useJobs = () => {
    const data = useLazyLoadQuery<jobQueries_JobsQuery>(JobsQuery, {}, {
        fetchPolicy: 'store-or-network',
    });

    return {
        jobs: data.jobs,
    };
};
