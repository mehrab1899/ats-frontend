// src/modules/applicants/fragments/ApplicantRow.fragment.ts
import { graphql } from 'react-relay';

export const ApplicantRowFragment = graphql`
  fragment ApplicantRow_applicant on ApplicantRow {
    id
    name
    email
    stage
    position
    appliedAt
  }
`;
