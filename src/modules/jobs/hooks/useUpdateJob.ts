import { useMutation } from 'react-relay';
import { UpdateJobMutation } from '@/modules/jobs/graphql/jobMutations';
import { jobMutations_UpdateJobMutation as UpdateJobMutationType } from '@/__generated__/jobMutations_UpdateJobMutation.graphql';

export const useUpdateJob = () => {
    return useMutation<UpdateJobMutationType>(UpdateJobMutation);
};
