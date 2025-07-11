import { graphql } from 'react-relay';

export const PublicJobsPaginationQuery = graphql`
  query jobQueries_PublicJobsPaginationQuery($first: Int!, $after: String) {
    ...usePaginatedPublicJobsPaginationFragment @arguments(first: $first, after: $after)
  }
`;

export const AdminJobsQuery = graphql`
  query jobQueries_AdminJobsQuery($search: String, $status: JobStatus, $skip: Int, $take: Int) {
    jobs(search: $search, status: $status, skip: $skip, take: $take) {
      jobs {
        __typename
        id
        ...AdminJobRow_job
      }
      totalJobsCount
    }
  }
`;
export const GetJobByIdQuery = graphql`
  query jobQueries_GetJobByIdQuery($id: ID!) {
    getJobById(id: $id) {
      __typename
      id
      title
      description
      status
      type
      skillsRequired
      benefits
      createdAt
      applicants
    }
  }
`;