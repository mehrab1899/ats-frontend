// src/modules/applicants/hooks/useApplicantById.ts
import { useLazyLoadQuery } from 'react-relay';
import { GetApplicantByIdQuery } from '../graphql/applicantsQuery';
import { applicantQueries_GetApplicantByIdQuery } from '@/__generated__/applicantQueries_GetApplicantByIdQuery.graphql';

export const useApplicantById = (id: string) => {
    const data = useLazyLoadQuery<applicantQueries_GetApplicantByIdQuery>(
        GetApplicantByIdQuery,
        { id },
        { fetchPolicy: 'store-and-network' }
    );

    return data.getApplicantById;
};
