// src/components/admin/applicant/ApplicantActionsCell.tsx
'use client';

import { useFragment } from 'react-relay/hooks';
import { ApplicantRow_applicant$key } from '@/__generated__/ApplicantRow_applicant.graphql';
import { ApplicantRowFragment } from '@/modules/applicants/fragments/ApplicantRow.fragment';
import ApplicantStageAction from '@/app/(admin)/applicant/ApplicantStageAction';

type Props = {
    applicantRef: ApplicantRow_applicant$key;
};

export const ApplicantActionsCell = ({ applicantRef }: Props) => {
    const applicant = useFragment(ApplicantRowFragment, applicantRef);

    return <ApplicantStageAction id={applicant.id} currentStage={applicant.stage} />;
};
