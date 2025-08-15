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
        description
      }
      cv
      coverLetter
      message
      appliedAt
    }
  }
`;

export const ScoreResumeQuery = graphql`
  query applicantsQuery_ScoreResumeQuery($resumeUrl: String!, $jobDescription: String!) {
    scoreResume(resumeUrl: $resumeUrl, jobDescription: $jobDescription) {
      category
      confidence
      relevance_score
      explanation
    }
  }
`;