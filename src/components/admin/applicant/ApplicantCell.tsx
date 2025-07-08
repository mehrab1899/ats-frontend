// src/components/admin/applicant/ApplicantCell.tsx
'use client';

import { useFragment } from 'react-relay/hooks';
import { graphql } from 'react-relay';
import { ApplicantRow_applicant$key } from '@/__generated__/ApplicantRow_applicant.graphql';
import { ApplicantRowFragment } from '@/modules/applicants/fragments/ApplicantRow.fragment';
import Link from 'next/link';

type Props = {
    applicantRef: ApplicantRow_applicant$key;
    field: 'name' | 'email' | 'stage' | 'position' | 'appliedAt';
};

export const ApplicantCell = ({ applicantRef, field }: Props) => {
    const applicant = useFragment(ApplicantRowFragment, applicantRef);

    switch (field) {
        case 'name':
            return (
                <Link href={`/applicant/${applicant.id}`} passHref>
                    <span className="text-blue-600 hover:underline">{applicant.name}</span>
                </Link>
            );
        case 'email':
        case 'stage':
        case 'position':
            return <>{(applicant as any)[field]}</>;
        case 'appliedAt':
            return <>{new Date(applicant.appliedAt).toLocaleDateString()}</>;
        default:
            return null;
    }
};
