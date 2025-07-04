import { useLazyLoadQuery, useFragment } from 'react-relay/hooks';
import { applicantsQuery_GetApplicantByIdQuery } from '@/__generated__/applicantsQuery_GetApplicantByIdQuery.graphql';
import { ApplicantDetailFragment } from '../fragments/ApplicantDetail.fragment';
import { ApplicantDetail_applicant$key } from '@/__generated__/ApplicantDetail_applicant.graphql';
import { GetApplicantByIdQuery } from '../graphql/applicantsQuery';

export const useApplicantById = (id: string): ApplicantDetail_applicant$key => {
    const data = useLazyLoadQuery<applicantsQuery_GetApplicantByIdQuery>(
        GetApplicantByIdQuery,
        { id },
        { fetchPolicy: 'store-and-network' }
    );

    return data.getApplicantById;
};
