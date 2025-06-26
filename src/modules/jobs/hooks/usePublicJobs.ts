import { useLazyLoadQuery } from 'react-relay';
import { jobQueries_PublicJobsQuery } from '@/__generated__/jobQueries_PublicJobsQuery.graphql';
import { PublicJobsQuery } from '../graphql/jobQueries';

export const usePublicJobs = () => {
    // Using the `PublicJobsQuery` for public jobs listing
    const data = useLazyLoadQuery<jobQueries_PublicJobsQuery>(PublicJobsQuery, {}, {
        fetchPolicy: 'store-or-network', // Fetch from store if available, or network otherwise
    });

    return {
        publicJobs: data.publicJobs,
    };
};
