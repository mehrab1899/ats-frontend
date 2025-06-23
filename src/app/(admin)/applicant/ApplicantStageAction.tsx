'use client';

import { useToast } from '@/context/ToastContext';
import StatusDropdown from '@/components/StatusDropdown';
import { useUpdateApplicantStage } from '@/modules/applicants/hooks/useUpdateApplicantStage';

type Props = {
    id: string;
    currentStage: 'APPLIED' | 'SHORTLISTED' | 'INTERVIEWED' | 'HIRED' | 'REJECTED';
};

const stageOptions = ['APPLIED', 'SHORTLISTED', 'INTERVIEWED', 'HIRED', 'REJECTED'];

const ApplicantStageAction = ({ id, currentStage }: Props) => {
    const [commit, isInFlight] = useUpdateApplicantStage();
    const { addToast } = useToast();

    const handleChange = (newStage: Props['currentStage']) => {
        if (newStage === currentStage) return;

        commit({
            variables: { id, stage: newStage },
            onCompleted: () => addToast(`Stage updated to ${newStage}`, 'success'),
            onError: (err) => {
                console.error(err);
                addToast('Failed to update stage.', 'error');
            }
        });
    };

    return (
        <StatusDropdown
            options={stageOptions}
            currentValue={currentStage}
            onChange={handleChange}
            loading={isInFlight}
        />
    );
};

export default ApplicantStageAction;
