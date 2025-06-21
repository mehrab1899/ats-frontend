import { graphql, useLazyLoadQuery } from 'react-relay';
import type { jobQueries_GetJobByIdQuery } from '@/__generated__/jobQueries_GetJobByIdQuery.graphql';

export function useJobById(id: string) {
    return useLazyLoadQuery<jobQueries_GetJobByIdQuery>(
        graphql`
      query jobQueries_GetJobByIdQuery($id: String!) {
        getJobById(id: $id) {
          id
          title
          description
          status
          type
          skillsRequired
          benefits
          createdAt
          applicants
        }
      }
    `,
        { id }
    );
}
