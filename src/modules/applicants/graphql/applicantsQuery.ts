// src/modules/applicants/graphql/applicantsQuery.ts
import { graphql } from 'react-relay';

export const ApplicantsQuery = graphql`
  query applicantsQuery_ApplicantsQuery($search: String, $stage: Stage, $skip: Int, $take: Int) {
    applicants(search: $search, stage: $stage, skip: $skip, take: $take) {
      id
      name
      email
      stage
      position
      appliedAt
    }
  }
`;
