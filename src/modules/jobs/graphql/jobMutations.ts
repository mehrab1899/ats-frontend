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

export const CreateJobMutation = graphql`
  mutation jobMutations_CreateJobMutation($input: JobInput!) {
    createJob(input: $input) {
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

export const UpdateJobStatusMutation = graphql`mutation jobMutations_UpdateJobStatusMutation($id: ID!, $status: JobStatus!) {
    updateJobStatus(id: $id, status: $status) {
      id
      status
    }
  }`;