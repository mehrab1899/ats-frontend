import { ApplicantRow_applicant$key } from "@/__generated__/ApplicantRow_applicant.graphql";
import ApplicantStageAction from "@/app/(admin)/applicant/ApplicantStageAction";
import { Column } from "@/components/DataTable";
import Link from "next/link";
import { useFragment } from "react-relay/hooks";
import { ApplicantRowFragment } from "@/modules/applicants/fragments/ApplicantRow.fragment"; // ✅ imported

export const applicantColumns: Column<ApplicantRow_applicant$key>[] = [
    {
        key: 'name',
        label: 'Name',
        render: (_val, row) => {
            const data = useFragment(ApplicantRowFragment, row);
            return (
                <Link href={`/applicant/${data.id}`} passHref>
                    <span className="text-blue-600 hover:underline">
                        {data.firstName} {data.lastName}
                    </span>
                </Link>
            );
        },
    },
    {
        key: 'email',
        label: 'Email',
        render: (_val, row) => {
            const data = useFragment(ApplicantRowFragment, row);
            return data.email;
        },
    },
    {
        key: 'stage',
        label: 'Stage',
        render: (_val, row) => {
            const data = useFragment(ApplicantRowFragment, row);
            return data.stage;
        },
    },
    {
        key: 'position',
        label: 'Position',
        render: (_val, row) => {
            const data = useFragment(ApplicantRowFragment, row);
            return data.job.title;
        },
    },
    {
        key: 'appliedAt',
        label: 'Applied At',
        render: (_val, row) => {
            const data = useFragment(ApplicantRowFragment, row);
            return new Date(data.appliedAt).toLocaleDateString();
        },
    },
    {
        key: 'id',
        label: 'Actions',
        render: (_val, row) => {
            const data = useFragment(ApplicantRowFragment, row);
            return <ApplicantStageAction id={data.id} currentStage={data.stage} />;
        },
    },
];
