import { graphql } from 'react-relay';

export const ApplicantDetailFragment = graphql`
  fragment ApplicantDetail_applicant on Applicant {
    id
    firstName
    lastName
    email
    phone
    stage
    appliedAt
    message
    cv
    coverLetter
    job {
      id
      title
    }
  }
`;
