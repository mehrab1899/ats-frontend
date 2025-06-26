'use client';

import { useToast } from '@/context/ToastContext';
import StatusDropdown from '@/components/StatusDropdown';
import { useUpdateJobStatus } from '@/modules/jobs/hooks/useUpdateJobStatus';

type Job = {
    status: 'OPEN' | 'CLOSED' | 'DRAFT';
};

const JobStatusAction: React.FC<{ id: string; currentStatus: Job['status'] }> = ({ id, currentStatus }) => {
    const [commit, isInFlight] = useUpdateJobStatus();
    const { addToast } = useToast();

    const handleChange = (status: Job['status']) => {
        if (status === currentStatus) return;

        commit({
            variables: { id, status },
            onCompleted: () => {
                addToast(`Status updated to ${status}`, 'success');
            },
            onError: (err) => {
                console.error(err);
                addToast('Failed to update status. Please try again.', 'error');
            },
        });
    };

    return (
        <StatusDropdown
            options={['OPEN', 'CLOSED', 'DRAFT']}
            currentValue={currentStatus}
            onChange={handleChange}
            loading={isInFlight}
        />
    );
};

export default JobStatusAction;
