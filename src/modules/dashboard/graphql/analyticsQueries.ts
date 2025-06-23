import { graphql } from 'react-relay';

export const DashboardStatsQuery = graphql`
  query analyticsQueries_DashboardStatsQuery {
    dashboardStats {
      activeJobs
      totalApplicants
      topJob
      shortlistedCount
    }
  }
`;

export const MonthlyTrendsQuery = graphql`
  query analyticsQueries_MonthlyTrendsQuery {
    monthlyTrends {
      month
      jobs
      applicants
      hired
    }
  }
`;
