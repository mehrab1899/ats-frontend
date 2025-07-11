import { graphql, usePaginationFragment } from 'react-relay';
import { usePaginatedPublicJobsPaginationFragment$key } from '@/__generated__/usePaginatedPublicJobsPaginationFragment.graphql';

export const publicJobsPaginationFragment = graphql`
  fragment usePaginatedPublicJobsPaginationFragment on Query
  @argumentDefinitions(
    first: { type: "Int", defaultValue: 6 }
    after: { type: "String" }
  )
  @refetchable(queryName: "PublicJobsPaginationFragmentRefetch") {
    publicJobs(first: $first, after: $after)
      @connection(key: "PublicJobs_publicJobs") {
      edges {
        node {
          id
          ...JobCard_job
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }
`;

export function usePaginatedPublicJobs(
    dataRef: usePaginatedPublicJobsPaginationFragment$key
) {
    return usePaginationFragment(publicJobsPaginationFragment, dataRef);
}
