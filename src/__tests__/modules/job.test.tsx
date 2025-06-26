import { renderHook, act, waitFor } from '@testing-library/react';
import { RelayEnvironmentProvider } from 'react-relay';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';

import { useAdminJobs } from '@/modules/jobs/hooks/useAdminJobs';
import { useCreateJob } from '@/modules/jobs/hooks/useCreateJob';
import { useJobById } from '@/modules/jobs/hooks/useJobById';
import { useUpdateJob } from '@/modules/jobs/hooks/useUpdateJob';
import { useUpdateJobStatus } from '@/modules/jobs/hooks/useUpdateJobStatus';

const wrapperWithEnv = (env: any) => ({ children }: any) => (
    <RelayEnvironmentProvider environment={env}>{children}</RelayEnvironmentProvider>
);

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
