// src/modules/applicants/fragments/PaginatedApplicantList.fragment.ts
import { graphql } from 'react-relay';

export const PaginatedApplicantListFragment = graphql`
  fragment PaginatedApplicantList_data on Query
  @refetchable(queryName: "applicantsQuery_ApplicantListPaginationQuery")
  @argumentDefinitions(
    search: { type: "String" }
    stage: { type: "Stage" }
    first: { type: "Int", defaultValue: 10 }
    after: { type: "String" }
  ) {
    applicants(
      search: $search
      stage: $stage
      first: $first
      after: $after
    ) @connection(key: "PaginatedApplicantList_data_applicants") {
      totalCount
      edges {
        cursor
        node {
          id
          ...ApplicantRow_applicant
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;