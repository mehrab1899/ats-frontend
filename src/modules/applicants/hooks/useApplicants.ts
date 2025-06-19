import { useLazyLoadQuery } from 'react-relay';
import { applicantsQuery_ApplicantsQuery } from '@/__generated__/applicantsQuery_ApplicantsQuery.graphql';
import { ApplicantsQuery } from '../graphql/applicantsQuery'; // Correctly import the query name

export const useApplicants = (search?: string, stage?: string, skip: number = 0, take: number = 10) => {
    const data = useLazyLoadQuery<applicantsQuery_ApplicantsQuery>(ApplicantsQuery, {
        search,
        stage,
        skip,
        take,
    }, {
        fetchPolicy: 'store-or-network', // Use cache if available, otherwise fetch from network
    });

    return {
        applicants: data.applicants,
    };
};
