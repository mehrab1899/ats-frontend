// src/modules/applicants/hooks/useApplicantById.ts
import { useLazyLoadQuery } from 'react-relay';
import { GetApplicantByIdQuery } from '../graphql/applicantsQuery';
import { applicantsQuery_GetApplicantByIdQuery } from '@/__generated__/applicantsQuery_GetApplicantByIdQuery.graphql';

export const useApplicantById = (id: string) => {
    const data = useLazyLoadQuery<applicantsQuery_GetApplicantByIdQuery>(
        GetApplicantByIdQuery,
        { id },
        { fetchPolicy: 'store-and-network' }
    );

    return data.getApplicantById;
};
