import { useLazyLoadQuery } from 'react-relay';
import { MonthlyTrendsQuery } from '../graphql/analyticsQueries';
import { analyticsQueries_MonthlyTrendsQuery } from '@/__generated__/analyticsQueries_MonthlyTrendsQuery.graphql';

export const useMonthlyTrends = () => {
    const data = useLazyLoadQuery<analyticsQueries_MonthlyTrendsQuery>(
        MonthlyTrendsQuery,
        {},
        { fetchPolicy: 'store-and-network' }
    );
    return data.monthlyTrends;
};
