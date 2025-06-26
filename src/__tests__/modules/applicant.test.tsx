import { renderHook, act, waitFor } from '@testing-library/react';
import { RelayEnvironmentProvider } from 'react-relay';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';

import { useApplicants } from '@/modules/applicants/hooks/useApplicants';
import { useApplicantById } from '@/modules/applicants/hooks/useApplicantById';
import { useUpdateApplicantStage } from '@/modules/applicants/hooks/useUpdateApplicantStage';

const wrapperWithEnv = (env: any) => ({ children }: any) => (
    <RelayEnvironmentProvider environment={env}>{children}</RelayEnvironmentProvider>
);

describe('Applicant Hooks', () => {
    it('useApplicants fetches paginated applicants', async () => {
        const env = createMockEnvironment();
        const wrapper = wrapperWithEnv(env);

        const { result } = renderHook(() => useApplicants('ali', 'APPLIED', 0, 5), { wrapper });

        env.mock.resolveMostRecentOperation(op =>
            MockPayloadGenerator.generate(op, {
                Query: () => ({
                    applicants: {
                        applicants: [
                            {
                                id: 'app-1',
                                name: 'Ali Raza',
                                email: 'ali@example.com',
                                stage: 'APPLIED',
                                position: 'Engineer',
                                appliedAt: '2024-01-01T00:00:00Z',
                            },
                        ],
                        totalApplicantsCount: 1,
                    },
                }),
            })
        );

        await waitFor(() => {
            expect(result.current.applicants.applicants[0].name).toBe('Ali Raza');
        });
    });

    it('useApplicantById fetches applicant details', async () => {
        const env = createMockEnvironment();
        const wrapper = wrapperWithEnv(env);

        const { result } = renderHook(() => useApplicantById('app-123'), { wrapper });

        env.mock.resolveMostRecentOperation(op =>
            MockPayloadGenerator.generate(op, {
                Query: () => ({
                    getApplicantById: {
                        id: 'app-123',
                        firstName: 'John',
                        lastName: 'Doe',
                        email: 'john.doe@example.com',
                        phone: '1234567890',
                        stage: 'SHORTLISTED',
                        job: { id: 'job-abc', title: 'Software Engineer' },
                        cv: 'cv-link',
                        coverLetter: 'cover-letter-link',
                        message: 'Interested in the position',
                        appliedAt: '2024-05-10T00:00:00Z',
                    },
                }),
            })
        );

        await waitFor(() => {
            expect(result.current.email).toBe('john.doe@example.com');
            expect(result.current.job.title).toBe('Software Engineer');
        });
    });

    it('useUpdateApplicantStage commits mutation', async () => {
        const env = createMockEnvironment();
        const wrapper = wrapperWithEnv(env);

        const { result } = renderHook(() => useUpdateApplicantStage(), { wrapper });

        await act(async () => {
            const [commit] = result.current;

            commit({
                variables: {
                    id: 'app-789',
                    stage: 'HIRED',
                },
                onCompleted: (res) => {
                    expect(res.updateApplicantStage.stage).toBe('HIRED');
                },
            });

            env.mock.resolveMostRecentOperation(op =>
                MockPayloadGenerator.generate(op, {
                    Applicant: () => ({ id: 'app-789', stage: 'HIRED' }),
                    Mutation: () => ({
                        updateApplicantStage: { id: 'app-789', stage: 'HIRED' },
                    }),
                })
            );
        });
    });
});
