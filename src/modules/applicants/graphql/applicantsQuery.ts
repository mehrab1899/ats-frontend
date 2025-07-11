// src/modules/applicants/graphql/applicantsQuery.ts
import { graphql } from 'react-relay';

export const ApplicantsQuery = graphql`
  query applicantsQuery_ApplicantsQuery($search: String, $stage: Stage, $skip: Int, $take: Int) {
    applicants(search: $search, stage: $stage, skip: $skip, take: $take) {
      applicants {
        id
        ...ApplicantRow_applicant
      }
      totalApplicantsCount
    }
  }
`;

export const GetApplicantByIdQuery = graphql`
  query applicantsQuery_GetApplicantByIdQuery($id: ID!) {
    getApplicantById(id: $id) {
      id
      firstName
      lastName
      email
      phone
      stage
      job {
        id
        title
      }
      cv
      coverLetter
      message
      appliedAt
    }
  }
`;