import { useLazyLoadQuery } from 'react-relay';
import { DashboardStatsQuery } from '../graphql/analyticsQueries';
import { analyticsQueries_DashboardStatsQuery } from '@/__generated__/analyticsQueries_DashboardStatsQuery.graphql';

export const useDashboardStats = () => {
    const data = useLazyLoadQuery<analyticsQueries_DashboardStatsQuery>(
        DashboardStatsQuery,
        {},
        { fetchPolicy: 'store-and-network' }
    );
    return data.dashboardStats;
};
