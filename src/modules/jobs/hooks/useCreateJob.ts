// src/modules/jobs/hooks/useCreateJob.ts
import { useMutation } from 'react-relay';
import { CreateJobMutation } from '@/modules/jobs/graphql/jobMutations';
import { jobMutations_CreateJobMutation as CreateJobMutationType } from '@/__generated__/jobMutations_CreateJobMutation.graphql';

export const useCreateJob = () => {
    return useMutation<CreateJobMutationType>(CreateJobMutation);
};
