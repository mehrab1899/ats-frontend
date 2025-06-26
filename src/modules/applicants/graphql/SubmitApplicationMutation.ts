import { graphql } from 'react-relay';
import { commitMutation } from 'react-relay';
import relayEnvironment from '@/lib/relayEnvironment';

const mutation = graphql`
  mutation SubmitApplicationMutation(
    $input: ApplicantTextInput!
    $cv: Upload!
    $coverLetter: Upload!
  ) {
    submitApplicationText(input: $input, cv: $cv, coverLetter: $coverLetter) {
      id
      email
      cv
      coverLetter
    }
  }
`;

export const submitApplication = (
    variables: {
        input: {
            firstName: string;
            lastName: string;
            phone: string;
            email: string;
            jobId: string;
            message?: string;
        };
        cv: File;
        coverLetter: File;
    },
    onCompleted: (data: any) => void,
    onError: (err: any) => void
) =>
    commitMutation(relayEnvironment, {
        mutation,
        variables,
        onCompleted,
        onError,
    });