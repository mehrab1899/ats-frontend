import { useMutation } from 'react-relay';
import { UpdateApplicantStageMutation } from '../graphql/applicantMutations';
import { applicantMutations_UpdateApplicantStageMutation as MutationType } from '@/__generated__/applicantMutations_UpdateApplicantStageMutation.graphql';

export const useUpdateApplicantStage = () => {
    return useMutation<MutationType>(UpdateApplicantStageMutation);
};
