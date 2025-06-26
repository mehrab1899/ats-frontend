// src/modules/jobs/hooks/useUpdateJobStatus.ts
import { useMutation } from 'react-relay';
import { jobMutations_UpdateJobStatusMutation } from '@/__generated__/jobMutations_UpdateJobStatusMutation.graphql';
import { UpdateJobStatusMutation } from '@/modules/jobs/graphql/jobMutations'; // adjust path as needed

export const useUpdateJobStatus = () => {
    return useMutation<jobMutations_UpdateJobStatusMutation>(UpdateJobStatusMutation);
};
