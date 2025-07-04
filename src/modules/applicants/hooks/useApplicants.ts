import { graphql, useLazyLoadQuery, usePaginationFragment } from 'react-relay/hooks';
import { useMemo } from 'react';
import { ApplicantsConnection_viewer$key } from '@/__generated__/ApplicantsConnection_viewer.graphql';
import { useApplicantsFragmentPaginationQuery } from '@/__generated__/useApplicantsFragmentPaginationQuery.graphql';
import { ApplicantsPaginationFragment } from '../fragments/ApplicantsConnection.fragment';

export const useApplicants = (search: string, stage: string | null) => {
    const queryData = useLazyLoadQuery<useApplicantsFragmentPaginationQuery>(
        graphql`
      query useApplicantsFragmentPaginationQuery($search: String, $stage: Stage) {
        ...ApplicantsConnection_viewer @arguments(search: $search, stage: $stage)
      }
    `,
        { search, stage }
    );

    const {
        data,
        loadNext,
        hasNext,
        isLoadingNext,
        refetch,
    } = usePaginationFragment(ApplicantsPaginationFragment, queryData);

    const applicants = useMemo(() => data.applicants.edges.map(e => e.node), [data]);

    return {
        applicants,
        loadNext,
        hasNext,
        isLoadingNext,
        refetch,
    };
};
