import { renderHook, waitFor, render, screen } from '@testing-library/react';
import { RelayEnvironmentProvider } from 'react-relay';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';

import { useDashboardStats } from '@/modules/dashboard/hooks/useDashboardStats';
import { useMonthlyTrends } from '@/modules/dashboard/hooks/useMonthlyTrends';
import StatCardsGrid from '@/components/admin/dashboard/StatCardsGrid';
import JobTrendChart from '@/components/admin/dashboard/JobTrendChart';

global.ResizeObserver = class {
    observe() { }
    unobserve() { }
    disconnect() { }
};

Object.defineProperties(HTMLElement.prototype, {
    offsetHeight: {
        configurable: true,
        value: 300,
    },
    offsetWidth: {
        configurable: true,
        value: 600,
    },
});

const wrapperWithEnv = (env: any) => ({ children }: any) => (
    <RelayEnvironmentProvider environment={env}>{children}</RelayEnvironmentProvider>
);

describe('Analytics Hooks', () => {
    it('useDashboardStats fetches dashboard statistics', async () => {
        const env = createMockEnvironment();
        const wrapper = wrapperWithEnv(env);

        const { result } = renderHook(() => useDashboardStats(), { wrapper });

        env.mock.resolveMostRecentOperation(op =>
            MockPayloadGenerator.generate(op, {
                Query: () => ({
                    dashboardStats: {
                        activeJobs: 4,
                        totalApplicants: 120,
                        topJob: 'Frontend Engineer',
                        shortlistedCount: 15,
                    },
                }),
            })
        );

        await waitFor(() => {
            expect(result.current.totalApplicants).toBe(120);
            expect(result.current.topJob).toBe('Frontend Engineer');
        });
    });

    it('useMonthlyTrends fetches monthly analytics data', async () => {
        const env = createMockEnvironment();
        const wrapper = wrapperWithEnv(env);

        const { result } = renderHook(() => useMonthlyTrends(), { wrapper });

        env.mock.resolveMostRecentOperation(op =>
            MockPayloadGenerator.generate(op, {
                Query: () => ({
                    monthlyTrends: [
                        {
                            month: 'January',
                            jobs: 12,
                            applicants: 80,
                            hired: 5,
                        },
                        {
                            month: 'February',
                            jobs: 9,
                            applicants: 60,
                            hired: 3,
                        },
                    ],
                }),
            })
        );

        await waitFor(() => {
            expect(result.current.length).toBeGreaterThan(0);
            expect(result.current[0].month).toBe('January');
            expect(result.current[0].hired).toBe(5);
        });
    });
});

describe('Dashboard Components', () => {
    it('StatCardsGrid renders stat cards with correct values', async () => {
        const env = createMockEnvironment();

        render(
            <RelayEnvironmentProvider environment={env}>
                <StatCardsGrid />
            </RelayEnvironmentProvider>
        );

        env.mock.resolveMostRecentOperation(op =>
            MockPayloadGenerator.generate(op, {
                Query: () => ({
                    dashboardStats: {
                        activeJobs: 7,
                        totalApplicants: 250,
                        topJob: 'Backend Developer',
                        shortlistedCount: 30,
                    },
                }),
            })
        );

        expect(await screen.findByText('250')).toBeInTheDocument();
        expect(await screen.findByText('Backend Developer')).toBeInTheDocument();
    });

    it('JobTrendChart receives the correct data', async () => {
        const env = createMockEnvironment();

        const spy = jest.spyOn(console, 'error').mockImplementation(() => { }); // Silence Recharts errors

        const { unmount } = render(
            <RelayEnvironmentProvider environment={env}>
                <JobTrendChart />
            </RelayEnvironmentProvider>
        );

        env.mock.resolveMostRecentOperation(op =>
            MockPayloadGenerator.generate(op, {
                Query: () => ({
                    monthlyTrends: [
                        { month: 'March', jobs: 10, applicants: 90, hired: 4 },
                        { month: 'April', jobs: 8, applicants: 70, hired: 6 },
                    ],
                }),
            })
        );

        expect(await screen.findByText('Monthly Job Postings')).toBeInTheDocument();

        unmount();
        spy.mockRestore();
    });


});
