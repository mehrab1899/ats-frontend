import { useLazyLoadQuery } from 'react-relay';
import { useMemo } from 'react';
import { ApplicantsQuery } from '../graphql/applicantsQuery';
import { applicantsQuery_ApplicantsQuery } from '@/__generated__/applicantsQuery_ApplicantsQuery.graphql';

export const useApplicants = (search?: string, stage?: string, skip: number = 0, take: number = 10) => {
    // Memoize the query variables to avoid excessive re-fetches
    const queryVariables = useMemo(() => ({
        search,
        stage,
        skip,
        take,
    }), [search, stage, skip, take]);  // Update only when the relevant params change

    const data = useLazyLoadQuery<applicantsQuery_ApplicantsQuery>(ApplicantsQuery, queryVariables, {
        fetchPolicy: 'store-or-network',
    });

    return {
        applicants: data.applicants,
    };
};
