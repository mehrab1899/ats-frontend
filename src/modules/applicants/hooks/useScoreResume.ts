import { useLazyLoadQuery } from 'react-relay';
import { ScoreResumeQuery } from '../graphql/applicantsQuery';  // Adjust path as necessary
import { applicantsQuery_ScoreResumeQuery } from '@/__generated__/applicantsQuery_ScoreResumeQuery.graphql'; // Generated types

export const useScoreResume = (resumeUrl: string, jobDescription: string) => {
  const data = useLazyLoadQuery<applicantsQuery_ScoreResumeQuery>(
    ScoreResumeQuery,
    {
      resumeUrl,
      jobDescription,
    },
    { fetchPolicy: 'store-and-network' }
  );

  return data.scoreResume; // Returns { category, confidence, relevance_score, explanation }
};
