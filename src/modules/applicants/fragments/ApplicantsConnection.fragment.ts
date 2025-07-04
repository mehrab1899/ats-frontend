import { graphql } from 'react-relay';

export const ApplicantsPaginationFragment = graphql`
  fragment ApplicantsConnection_viewer on Query
  @argumentDefinitions(
    first: { type: "Int", defaultValue: 10 }
    after: { type: "String" }
    search: { type: "String" }
    stage: { type: "Stage" }
  )
  @refetchable(queryName: "ApplicantsConnectionPaginationQuery") {
    applicants(search: $search, stage: $stage, first: $first, after: $after)
      @connection(key: "ApplicantsConnection_applicants") {
      edges {
        node {
          id
          ...ApplicantRow_applicant
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
