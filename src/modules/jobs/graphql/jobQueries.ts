// src/modules/jobs/graphql/jobQueries.ts
import { graphql } from 'react-relay';

export const JobsQuery = graphql`
  query jobQueries_JobsQuery {
    jobs {
      id
      title
      description
      status
      skillsRequired
      benefits
      createdAt
      applicantCount
    }
  }
`;
