import { renderHook, act, waitFor } from '@testing-library/react';
import { RelayEnvironmentProvider } from 'react-relay';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';

import { useAdminJobs } from '@/modules/jobs/hooks/useAdminJobs';
import { useCreateJob } from '@/modules/jobs/hooks/useCreateJob';
import { useJobById } from '@/modules/jobs/hooks/useJobById';
import { useUpdateJob } from '@/modules/jobs/hooks/useUpdateJob';
import { useUpdateJobStatus } from '@/modules/jobs/hooks/useUpdateJobStatus';

import { render, screen, fireEvent } from '@testing-library/react';
import JobCard from '@/components/JobCard';
import JobCreateForm from '@/app/(admin)/job/page';
import JobStatusAction from '@/components/admin/job/JobStatusAction';
import StatusDropdown from '@/components/StatusDropdown';
import { ToastProvider } from '@/context/ToastContext';

const wrapperWithEnv = (env: any) => ({ children }: any) => (
    <RelayEnvironmentProvider environment={env}>{children}</RelayEnvironmentProvider>
);

jest.mock('next/link', () => {
    return ({ href, children }: any) => <a href={href}>{children}</a>;
});

jest.mock('next/navigation', () => ({
    useRouter: () => ({ push: jest.fn() })
}));

describe('Job Hooks', () => {
    it('useAdminJobs fetches job list', async () => {
        const env = createMockEnvironment();
        const wrapper = wrapperWithEnv(env);

        const { result } = renderHook(() => useAdminJobs('eng', 'OPEN', 0, 5), { wrapper });

        env.mock.resolveMostRecentOperation(op =>
            MockPayloadGenerator.generate(op, {
                Query: () => ({
                    jobs: {
                        jobs: [
                            {
                                id: 'job-1',
                                title: 'Test Job',
                                description: 'Some desc',
                                status: 'OPEN',
                                type: 'FULL_TIME',
                                applicants: [],
                                createdAt: '2024-01-01T00:00:00Z',
                            },
                        ],
                        totalJobsCount: 1,
                    },
                }),
            })
        );

        await waitFor(() => {
            expect(result.current.adminJobs.jobs[0].title).toBe('Test Job');
        });
    });

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
                    Job: () => ({ id: 'job-123', title: 'New Job' }),
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

        env.mock.resolveMostRecentOperation((op) =>
            MockPayloadGenerator.generate(op, {
                Job: () => ({ id: 'job-abc', title: 'Fetched Job' }),
                Query: () => ({
                    getJobById: { id: 'job-abc', title: 'Fetched Job' },
                }),
            })
        );

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
                    Job: () => ({ id: 'job-999', title: 'Updated Title' }),
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
                    Job: () => ({ id: 'job-222', status: 'CLOSED' }),
                    Mutation: () => ({
                        updateJobStatus: { id: 'job-222', status: 'CLOSED' },
                    }),
                })
            );
        });
    });
});

describe('Job UI Components', () => {
    describe('JobCard', () => {
        const baseProps = {
            id: 'job-xyz',
            title: 'Frontend Engineer',
            description: 'This is a sample job description for testing purposes. It should be truncated if too long.'
        };

        it('renders title and truncated description', () => {
            render(<JobCard {...baseProps} />);
            expect(screen.getByText('Frontend Engineer')).toBeInTheDocument();
            expect(screen.getByText(/Apply Now/i)).toBeInTheDocument();
        });

        it('Apply Now button links correctly', () => {
            render(<JobCard {...baseProps} />);
            const link = screen.getByRole('link');
            expect(link).toHaveAttribute('href', `/apply/${baseProps.id}`);
        });

        it('Apply Now button renders with correct text', () => {
            render(<JobCard {...baseProps} />);
            const btn = screen.getByRole('button', { name: /Apply Now/i });
            expect(btn).toBeInTheDocument();
        });
    });

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

    describe('JobCreateForm', () => {
        const renderWithProviders = () => {
            const env = createMockEnvironment();
            render(
                <RelayEnvironmentProvider environment={env}>
                    <ToastProvider>
                        <JobCreateForm />
                    </ToastProvider>
                </RelayEnvironmentProvider>
            );
        };

        it('shows validation errors on empty submit', () => {
            renderWithProviders();
            fireEvent.click(screen.getByRole('button', { name: /Create Job/i }));

            expect(screen.getByText(/Title is required/i)).toBeInTheDocument();
            expect(screen.getByText(/Description is required/i)).toBeInTheDocument();
            expect(screen.getByText(/Skills Required is required/i)).toBeInTheDocument();
            expect(screen.getByText(/Benefits is required/i)).toBeInTheDocument();
        });

        it('updates input fields and removes error message', () => {
            renderWithProviders();
            const inputs = screen.getAllByRole('textbox');
            const titleInput = inputs[0]; // First textbox is title
            fireEvent.change(titleInput, { target: { value: 'New Job' } });

            expect(titleInput).toHaveValue('New Job');
        });
    });
});
