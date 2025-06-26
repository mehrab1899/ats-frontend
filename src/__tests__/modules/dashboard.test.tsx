// src/__tests__/modules/analytics.test.tsx
import { renderHook, waitFor } from '@testing-library/react';
import { RelayEnvironmentProvider } from 'react-relay';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';

import { useDashboardStats } from '@/modules/dashboard/hooks/useDashboardStats';
import { useMonthlyTrends } from '@/modules/dashboard/hooks/useMonthlyTrends';

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
