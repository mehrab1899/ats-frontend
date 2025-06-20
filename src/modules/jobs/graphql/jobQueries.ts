import { graphql } from 'react-relay';

export const PublicJobsQuery = graphql`
  query jobQueries_PublicJobsQuery {
    publicJobs {
      id
      title
      description
      status
      skillsRequired
      benefits
      createdAt
    }
  }
`;

export const AdminJobsQuery = graphql`
  query jobQueries_AdminJobsQuery($search: String, $status: JobStatus, $skip: Int, $take: Int) {
    jobs(search: $search, status: $status, skip: $skip, take: $take) {
      jobs {
        id
        title
        description
        status
        type
        applicants
        createdAt
      }
      totalJobsCount
    }
  }
`;