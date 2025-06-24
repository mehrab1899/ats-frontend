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

export const GetJobByIdQuery = graphql`
  query jobQueries_GetJobByIdQuery($id: ID!) {
    getJobById(id: $id) {
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