// src/app/(admin)/job/[id]/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation'; // ✅ Correct import for App Router
import { useJobById } from '@/modules/jobs/hooks/useJobById';
import TextInput from '@/components/TextInput';
import SelectInput from '@/components/SelectInput';
import Button from '@/components/Button';

const JobDetailForm = () => {
    const params = useParams();
    const searchParams = useSearchParams();
    const id = params?.id as string;
    const mode = searchParams.get('mode'); // 'view' or 'edit'

    const isViewMode = mode === 'view';

    const [form, setForm] = useState({
        title: '',
        description: '',
        status: 'OPEN',
        type: 'Full-time',
        applicants: 0,
        createdAt: '',
        skillsRequired: '',
        benefits: ''
    });

    const data = useJobById(id);

    useEffect(() => {
        if (data?.getJobById) {
            const job = data.getJobById;
            setForm({
                title: job.title,
                description: job.description,
                status: job.status,
                type: job.type,
                applicants: job.applicants,
                createdAt: job.createdAt,
                skillsRequired: job.skillsRequired,
                benefits: job.benefits,
            });
        }
    }, [data]);

    return (
        <form className="space-y-6 mt-6 w-full max-w-2xl" onSubmit={() => { }}>
            <TextInput label="Title" type="text" value={form.title} onChange={() => { }} disabled={isViewMode} />
            <TextInput label="Description" type="text" value={form.description} onChange={() => { }} disabled={isViewMode} />
            <SelectInput
                label="Status"
                value={form.status}
                onChange={() => { }}
                options={[
                    { label: 'Open', value: 'OPEN' },
                    { label: 'Closed', value: 'CLOSED' },
                    { label: 'Draft', value: 'DRAFT' }
                ]}
                disabled={isViewMode}
            />
            <SelectInput
                label="Job Type"
                value={form.type}
                onChange={() => { }}
                options={[
                    { label: 'Full-time', value: 'Full-time' },
                    { label: 'Part-time', value: 'Part-time' },
                    { label: 'Contract', value: 'Contract' }
                ]}
                disabled={isViewMode}
            />
            <TextInput label="Applicants" type="number" value={form.applicants.toString()} disabled />
            <TextInput label="Created At" type="text" value={new Date(form.createdAt).toLocaleDateString()} disabled />
            <TextInput label="Skills Required" type="text" value={form.skillsRequired} onChange={() => { }} disabled={isViewMode} />
            <TextInput label="Benefits" type="text" value={form.benefits} onChange={() => { }} disabled={isViewMode} />

            {!isViewMode && (
                <Button label="Update Job" onClick={() => { }} />
            )}
        </form>
    );
};

export default JobDetailForm;
