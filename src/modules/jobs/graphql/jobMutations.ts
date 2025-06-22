import { graphql } from 'react-relay';

export const UpdateJobMutation = graphql`
  mutation jobMutations_UpdateJobMutation($id: ID!, $input: JobInput!) {
    updateJob(id: $id, input: $input) {
      id
      title
      description
      status
      type
      applicants
      createdAt
    }
  }
`;
