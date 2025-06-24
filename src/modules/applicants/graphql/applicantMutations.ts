import { graphql } from 'react-relay';

export const UpdateApplicantStageMutation = graphql`
  mutation applicantMutations_UpdateApplicantStageMutation($id: ID!, $stage: Stage!) {
    updateApplicantStage(id: $id, stage: $stage) {
      id
      stage
    }
  }
`;