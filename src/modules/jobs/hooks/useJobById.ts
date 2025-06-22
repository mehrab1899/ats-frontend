import { useLazyLoadQuery } from 'react-relay';
import type { jobQueries_GetJobByIdQuery } from '@/__generated__/jobQueries_GetJobByIdQuery.graphql';
import { GetJobByIdQuery } from '@/modules/jobs/graphql/jobQueries';

export function useJobById(id: string) {
  return useLazyLoadQuery<jobQueries_GetJobByIdQuery>(
    GetJobByIdQuery,
    { id }
  );
}
