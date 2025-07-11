import { graphql } from 'react-relay';

export const JobCardFragment = graphql`
  fragment JobCard_job on Job {
    id
    title
    description
  }
`;
