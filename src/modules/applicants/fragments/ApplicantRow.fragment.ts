import { graphql } from 'react-relay';

export const ApplicantRowFragment = graphql`
  fragment ApplicantRow_applicant on ApplicantRow {
    id
    firstName
    lastName
    email
    stage
    appliedAt
    job {
      title
    }
  }
`;
