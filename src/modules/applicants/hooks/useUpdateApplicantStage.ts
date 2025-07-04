// useUpdateApplicantStage.ts
import { useMutation } from 'react-relay/hooks';
import { applicantMutations_UpdateApplicantStageMutation } from '@/__generated__/applicantMutations_UpdateApplicantStageMutation.graphql';
import { UpdateApplicantStageMutation } from '../graphql/applicantMutations';

export function useUpdateApplicantStage() {
    return useMutation<applicantMutations_UpdateApplicantStageMutation>(UpdateApplicantStageMutation);
}
