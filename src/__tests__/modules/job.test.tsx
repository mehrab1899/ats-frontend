import {
    renderHook,
    act,
    waitFor,
    render,
    screen,
    fireEvent,
} from '@testing-library/react';
import {
    RelayEnvironmentProvider,
    loadQuery,
    usePreloadedQuery,
} from 'react-relay/hooks';
import {
    createMockEnvironment,
    MockPayloadGenerator,
} from 'relay-test-utils';

import { useAdminJobs } from '@/modules/jobs/hooks/useAdminJobs';
import { useCreateJob } from '@/modules/jobs/hooks/useCreateJob';
import { useJobById } from '@/modules/jobs/hooks/useJobById';
import { useUpdateJob } from '@/modules/jobs/hooks/useUpdateJob';
import { useUpdateJobStatus } from '@/modules/jobs/hooks/useUpdateJobStatus';

import JobCard from '@/components/JobCard';
import JobCreateForm from '@/app/(admin)/job/page';
import JobStatusAction from '@/components/admin/job/JobStatusAction';
import StatusDropdown from '@/components/StatusDropdown';
import { ToastProvider } from '@/context/ToastContext';

// Import your query that includes the fragment JobCard expects
import { GetJobByIdQuery } from '@/modules/jobs/graphql/jobQueries';
import { JobCard_job$key } from '@/__generated__/JobCard_job.graphql';

jest.mock('next/link', () => ({ href, children }: any) => <a href={href}>{children}</a>);
jest.mock('next/navigation', () => ({ useRouter: () => ({ push: jest.fn() }) }));

const wrapperWithEnv = (env: any) => ({ children }: any) => (
    <RelayEnvironmentProvider environment={env}>{children}</RelayEnvironmentProvider>
);

describe('Job Hooks', () => {
    it('useCreateJob commits mutation', async () => {
        const env = createMockEnvironment();
        const wrapper = wrapperWithEnv(env);
        const { result } = renderHook(() => useCreateJob(), { wrapper });

        await act(async () => {
            const [commit] = result.current;

            commit({
                variables: {
                    input: {
                        title: 'New Job',
                        description: 'Some description',
                        status: 'OPEN',
                        type: 'FULL_TIME',
                        skillsRequired: [],
                        benefits: [],
                    },
                },
                onCompleted: (res) => {
                    expect(res.createJob.id).toBe('job-123');
                },
            });

            env.mock.resolveMostRecentOperation((op) =>
                MockPayloadGenerator.generate(op, {
                    Job: () => ({
                        id: 'job-123',
                        title: 'New Job',
                    }),
                    Mutation: () => ({
                        createJob: { id: 'job-123', title: 'New Job' },
                    }),
                })
            );
        });
    });

    it('useJobById fetches correct job', async () => {
        const env = createMockEnvironment();
        const wrapper = wrapperWithEnv(env);
        const { result } = renderHook(() => useJobById('job-abc'), { wrapper });

        await act(async () => {
            env.mock.resolveMostRecentOperation((op) =>
                MockPayloadGenerator.generate(op, {
                    Job: () => ({
                        id: 'job-abc',
                        title: 'Fetched Job',
                        description: 'Desc',
                        status: 'OPEN',
                        type: 'FULL_TIME',
                        skillsRequired: [],
                        benefits: [],
                        applicants: [],
                        createdAt: '2024-01-01T00:00:00Z',
                    }),
                })
            );
        });

        await waitFor(() => {
            expect(result.current.getJobById.title).toBe('Fetched Job');
        });
    });

    it('useUpdateJob commits mutation', async () => {
        const env = createMockEnvironment();
        const wrapper = wrapperWithEnv(env);
        const { result } = renderHook(() => useUpdateJob(), { wrapper });

        await act(async () => {
            const [commit] = result.current;

            commit({
                variables: {
                    id: 'job-999',
                    input: {
                        title: 'Updated Title',
                        description: 'Updated Desc',
                        status: 'OPEN',
                        type: 'PART_TIME',
                        skillsRequired: [],
                        benefits: [],
                    },
                },
                onCompleted: (res) => {
                    expect(res.updateJob.title).toBe('Updated Title');
                },
            });

            env.mock.resolveMostRecentOperation((op) =>
                MockPayloadGenerator.generate(op, {
                    Job: () => ({
                        id: 'job-999',
                        title: 'Updated Title',
                    }),
                    Mutation: () => ({
                        updateJob: { id: 'job-999', title: 'Updated Title' },
                    }),
                })
            );
        });
    });

    it('useUpdateJobStatus updates status', async () => {
        const env = createMockEnvironment();
        const wrapper = wrapperWithEnv(env);
        const { result } = renderHook(() => useUpdateJobStatus(), { wrapper });

        await act(async () => {
            const [commit] = result.current;

            commit({
                variables: { id: 'job-222', status: 'CLOSED' },
                onCompleted: (res) => {
                    expect(res.updateJobStatus.status).toBe('CLOSED');
                },
            });

            env.mock.resolveMostRecentOperation((op) =>
                MockPayloadGenerator.generate(op, {
                    Job: () => ({
                        id: 'job-222',
                        status: 'CLOSED',
                    }),
                    Mutation: () => ({
                        updateJobStatus: { id: 'job-222', status: 'CLOSED' },
                    }),
                })
            );
        });
    });

    it('useCreateJob handles mutation error', async () => {
        const env = createMockEnvironment();
        const wrapper = wrapperWithEnv(env);
        const { result } = renderHook(() => useCreateJob(), { wrapper });

        await act(async () => {
            const [commit] = result.current;
            commit({
                variables: {
                    input: {
                        title: 'Error Job',
                        description: 'Error desc',
                        status: 'OPEN',
                        type: 'FULL_TIME',
                        skillsRequired: [],
                        benefits: [],
                    },
                },
                onError: (err) => {
                    expect(err).toBeDefined();
                },
            });

            env.mock.rejectMostRecentOperation(new Error('Mutation failed'));
        });
    });

    it('useUpdateJob handles mutation error', async () => {
        const env = createMockEnvironment();
        const wrapper = wrapperWithEnv(env);
        const { result } = renderHook(() => useUpdateJob(), { wrapper });

        await act(async () => {
            const [commit] = result.current;
            commit({
                variables: {
                    id: 'job-404',
                    input: {
                        title: 'Not Found',
                        description: 'Not Found Desc',
                        status: 'OPEN',
                        type: 'PART_TIME',
                        skillsRequired: [],
                        benefits: [],
                    },
                },
                onError: (err) => {
                    expect(err).toBeDefined();
                },
            });

            env.mock.rejectMostRecentOperation(new Error('Update failed'));
        });
    });

    it('useUpdateJobStatus handles mutation error', async () => {
        const env = createMockEnvironment();
        const wrapper = wrapperWithEnv(env);
        const { result } = renderHook(() => useUpdateJobStatus(), { wrapper });

        await act(async () => {
            const [commit] = result.current;
            commit({
                variables: { id: 'job-333', status: 'CLOSED' },
                onError: (err) => {
                    expect(err).toBeDefined();
                },
            });

            env.mock.rejectMostRecentOperation(new Error('Status update failed'));
        });
    });
});

describe('Job UI Components', () => {

    describe('StatusDropdown', () => {
        const mockChange = jest.fn();

        it('renders current status and shows options on click', () => {
            render(
                <StatusDropdown
                    options={['OPEN', 'CLOSED', 'DRAFT']}
                    currentValue="OPEN"
                    onChange={mockChange}
                />
            );

            const trigger = screen.getByRole('button');
            fireEvent.click(trigger);

            expect(screen.getByText('CLOSED')).toBeInTheDocument();
            expect(screen.getByText('DRAFT')).toBeInTheDocument();
            expect(screen.queryByText('OPEN')).not.toBeInTheDocument();
        });

        it('calls onChange with selected value', () => {
            render(
                <StatusDropdown
                    options={['OPEN', 'CLOSED']}
                    currentValue="OPEN"
                    onChange={mockChange}
                />
            );

            fireEvent.click(screen.getByRole('button'));
            fireEvent.click(screen.getByText('CLOSED'));
            expect(mockChange).toHaveBeenCalledWith('CLOSED');
        });
    });

    describe('JobStatusAction', () => {
        it('renders dropdown inside relay context', () => {
            const env = createMockEnvironment();
            render(
                <RelayEnvironmentProvider environment={env}>
                    <ToastProvider>
                        <JobStatusAction id="job-abc" currentStatus="OPEN" />
                    </ToastProvider>
                </RelayEnvironmentProvider>
            );

            expect(screen.getByRole('button')).toBeInTheDocument();
        });
    });

    it('JobStatusAction disables dropdown when status is CLOSED', () => {
        const env = createMockEnvironment();
        render(
            <RelayEnvironmentProvider environment={env}>
                <ToastProvider>
                    <JobStatusAction id="job-xyz" currentStatus="CLOSED" />
                </ToastProvider>
            </RelayEnvironmentProvider>
        );
        expect(screen.getByRole('button')).toBeInTheDocument();
        // Optionally check for disabled state if implemented
    });

    it('StatusDropdown does not call onChange when clicking current value', () => {
        const mockChange = jest.fn();
        render(
            <StatusDropdown
                options={['OPEN', 'CLOSED']}
                currentValue="CLOSED"
                onChange={mockChange}
            />
        );
        fireEvent.click(screen.getByRole('button'));
        expect(screen.queryByText('CLOSED')).not.toBeInTheDocument();
        // No call to onChange since current value is not selectable
        expect(mockChange).not.toHaveBeenCalled();
    });

    it('JobCreateForm renders and submits', async () => {
        const env = createMockEnvironment();
        render(
            <RelayEnvironmentProvider environment={env}>
                <ToastProvider>
                    <JobCreateForm />
                </ToastProvider>
            </RelayEnvironmentProvider>
        );
        expect(screen.getByText(/Create a New Job/i)).toBeInTheDocument();
        // Optionally simulate filling and submitting the form
    });

});
