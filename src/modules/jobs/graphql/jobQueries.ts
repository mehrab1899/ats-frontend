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
