import {
    renderHook,
    act,
    waitFor,
    render,
    screen,
    fireEvent,
} from '@testing-library/react';
import { RelayEnvironmentProvider } from 'react-relay';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';

import { useApplicants } from '@/modules/applicants/hooks/useApplicants';
import { useApplicantById } from '@/modules/applicants/hooks/useApplicantById';
import { useUpdateApplicantStage } from '@/modules/applicants/hooks/useUpdateApplicantStage';
import ApplicantDetail from '@/app/(admin)/applicant/[id]/page';
import ApplicantStageAction from '@/app/(admin)/applicant/ApplicantStageAction';
import { ToastProvider } from '@/context/ToastContext';
import { useParams } from 'next/navigation';

const wrapperWithEnv = (env: any) => ({ children }: any) => (
    <RelayEnvironmentProvider environment={env}>{children}</RelayEnvironmentProvider>
);

jest.mock('next/navigation', () => ({
    ...jest.requireActual('next/navigation'),
    useParams: jest.fn(),
}));

describe('Applicant Hooks', () => {

    it('useApplicantById fetches applicant details', async () => {
        const env = createMockEnvironment();
        const wrapper = wrapperWithEnv(env);

        const { result } = renderHook(() => useApplicantById('app-123'), { wrapper });

        env.mock.resolveMostRecentOperation((op: any) =>
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

            env.mock.resolveMostRecentOperation((op: any) =>
                MockPayloadGenerator.generate(op, {
                    Applicant: () => ({ id: 'app-789', stage: 'HIRED' }),
                    Mutation: () => ({
                        updateApplicantStage: { id: 'app-789', stage: 'HIRED' },
                    }),
                })
            );
        });
    });

    it('useUpdateApplicantStage handles mutation error', async () => {
        const env = createMockEnvironment();
        const wrapper = wrapperWithEnv(env);

        const { result } = renderHook(() => useUpdateApplicantStage(), { wrapper });

        await act(async () => {
            const [commit] = result.current;
            commit({
                variables: { id: 'app-404', stage: 'REJECTED' },
                onError: (err) => {
                    expect(err).toBeDefined();
                },
            });

            env.mock.rejectMostRecentOperation(new Error('Stage update failed'));
        });
    });

    it('useApplicantById returns null for missing applicant', async () => {
        const env = createMockEnvironment();
        const wrapper = wrapperWithEnv(env);

        const { result } = renderHook(() => useApplicantById('missing-id'), { wrapper });

        env.mock.resolveMostRecentOperation((op: any) =>
            MockPayloadGenerator.generate(op, {
                Query: () => ({
                    getApplicantById: null,
                }),
            })
        );

        await waitFor(() => {
            expect(result.current).toBeNull();
        });
    });

    it('useApplicants fetches applicants list', async () => {
        const env = createMockEnvironment();
        const wrapper = wrapperWithEnv(env);

        const { result } = renderHook(() => useApplicants('', undefined, 0, 2), { wrapper });

        env.mock.resolveMostRecentOperation((op: any) =>
            MockPayloadGenerator.generate(op, {
                Query: () => ({
                    applicants: {
                        applicants: [
                            { id: 'app-1', $fragmentSpreads: { ApplicantRow_applicant: true } },
                            { id: 'app-2', $fragmentSpreads: { ApplicantRow_applicant: true } },
                        ],
                        totalApplicantsCount: 2,
                    },
                }),
            })
        );

        await waitFor(() => {
            expect(result.current.applicants.applicants.length).toBe(2);
            expect(result.current.applicants.applicants[0].id).toBe('app-1');
        });
    });
});

describe('Applicant UI Components', () => {
    const env = createMockEnvironment();

    beforeEach(() => {
        (useParams as jest.Mock).mockReturnValue({ id: 'app-123' });
    });

    describe('ApplicantDetail', () => {
        beforeEach(() => {
            (useParams as jest.Mock).mockReturnValue({ id: 'app-123' });
        });

        it('renders applicant full name and info blocks', async () => {
            env.mock.queueOperationResolver((op: any) =>
                MockPayloadGenerator.generate(op, {
                    Query: () => ({
                        getApplicantById: {
                            id: 'app-123',
                            firstName: 'John',
                            lastName: 'Doe',
                            email: 'john.doe@example.com',
                            phone: '1234567890',
                            stage: 'HIRED',
                            job: { title: 'Software Engineer' },
                            cv: 'http://cv-link',
                            coverLetter: 'http://cover-letter-link',
                            message: 'Thanks for considering.',
                            appliedAt: '2024-01-01T00:00:00Z',
                        },
                    }),
                })
            );

            render(
                <RelayEnvironmentProvider environment={env}>
                    <ApplicantDetail />
                </RelayEnvironmentProvider>
            );

            expect(await screen.findByText('John Doe')).toBeInTheDocument();
            expect(await screen.findByText('john.doe@example.com')).toBeInTheDocument();
        });

        it('shows correct badge color for HIRED', async () => {
            env.mock.queueOperationResolver((op: any) =>
                MockPayloadGenerator.generate(op, {
                    Query: () => ({
                        getApplicantById: {
                            id: 'app-123',
                            firstName: 'John',
                            lastName: 'Doe',
                            email: '',
                            phone: '',
                            stage: 'HIRED',
                            job: { title: '' },
                            cv: '',
                            coverLetter: '',
                            message: '',
                            appliedAt: '2024-01-01T00:00:00Z',
                        },
                    }),
                })
            );

            render(
                <RelayEnvironmentProvider environment={env}>
                    <ApplicantDetail />
                </RelayEnvironmentProvider>
            );

            const badge = await screen.findByText('HIRED');
            expect(badge).toHaveClass('bg-green-100', 'text-green-800');
        });

        it('renders CV and Cover Letter links correctly', async () => {
            env.mock.queueOperationResolver((op: any) =>
                MockPayloadGenerator.generate(op, {
                    Query: () => ({
                        getApplicantById: {
                            id: 'app-123',
                            firstName: '',
                            lastName: '',
                            email: '',
                            phone: '',
                            stage: 'APPLIED',
                            job: { title: '' },
                            cv: 'http://cv-link',
                            coverLetter: 'http://cover-letter-link',
                            message: '',
                            appliedAt: '2024-01-01T00:00:00Z',
                        },
                    }),
                })
            );

            render(
                <RelayEnvironmentProvider environment={env}>
                    <ApplicantDetail />
                </RelayEnvironmentProvider>
            );

            expect(await screen.findByText('View CV')).toHaveAttribute('href', 'http://cv-link');
            expect(await screen.findByText('View Cover Letter')).toHaveAttribute('href', 'http://cover-letter-link');
        });
    });

    it('shows correct badge color for SHORTLISTED', async () => {
        env.mock.queueOperationResolver((op: any) =>
            MockPayloadGenerator.generate(op, {
                Query: () => ({
                    getApplicantById: {
                        id: 'app-123',
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        stage: 'SHORTLISTED',
                        job: { title: '' },
                        cv: '',
                        coverLetter: '',
                        message: '',
                        appliedAt: '2024-01-01T00:00:00Z',
                    },
                }),
            })
        );

        render(
            <RelayEnvironmentProvider environment={env}>
                <ApplicantDetail />
            </RelayEnvironmentProvider>
        );

        const badge = await screen.findByText('SHORTLISTED');
        expect(badge).toHaveClass('bg-yellow-100', 'text-yellow-800');
    });

    it('renders message if present', async () => {
        env.mock.queueOperationResolver((op: any) =>
            MockPayloadGenerator.generate(op, {
                Query: () => ({
                    getApplicantById: {
                        id: 'app-123',
                        firstName: 'Jane',
                        lastName: 'Doe',
                        email: 'jane@example.com',
                        phone: '555-1234',
                        stage: 'APPLIED',
                        job: { title: 'Designer' },
                        cv: '',
                        coverLetter: '',
                        message: 'Looking forward to joining!',
                        appliedAt: '2024-01-01T00:00:00Z',
                    },
                }),
            })
        );

        render(
            <RelayEnvironmentProvider environment={env}>
                <ApplicantDetail />
            </RelayEnvironmentProvider>
        );

        expect(await screen.findByText('Looking forward to joining!')).toBeInTheDocument();
    });
});

describe('ApplicantStageAction', () => {
    it('changes stage when selecting a new stage', () => {
        const env = createMockEnvironment();
        render(
            <RelayEnvironmentProvider environment={env}>
                <ToastProvider>
                    <ApplicantStageAction id="app-123" currentStage="APPLIED" />
                </ToastProvider>
            </RelayEnvironmentProvider>
        );
        fireEvent.click(screen.getByRole('button'));
        fireEvent.click(screen.getByText('HIRED'));
        // After selection, dropdown should close (no 'HIRED' button visible)
        expect(screen.queryByText('HIRED')).not.toBeInTheDocument();
    });

});


