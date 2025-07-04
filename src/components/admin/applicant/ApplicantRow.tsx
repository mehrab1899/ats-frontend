import { useFragment } from 'react-relay/hooks';
import { ApplicantRow_applicant$key } from '@/__generated__/ApplicantRow_applicant.graphql';
import { ApplicantRowFragment } from '@/modules/applicants/fragments/ApplicantRow.fragment';

type Props = {
  applicantRef: ApplicantRow_applicant$key;
};

export const ApplicantRow: React.FC<Props> = ({ applicantRef }) => {
  const data = useFragment(ApplicantRowFragment, applicantRef);

  return (
    <tr>
      <td>{data.firstName} {data.lastName}</td>
      <td>{data.email}</td>
      <td>{data.job.title}</td>
      <td>{data.stage}</td>
      <td>{new Date(data.appliedAt).toLocaleDateString()}</td>
    </tr>
  );
};
