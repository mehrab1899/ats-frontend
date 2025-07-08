import { graphql } from 'react-relay';

export const AdminJobRowFragment = graphql`
  fragment AdminJobRow_job on Job {
    id
    title
    description
    status
    type
    applicants
    createdAt
  }
`;
