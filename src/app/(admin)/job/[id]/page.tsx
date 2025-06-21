// src/app/(admin)/job/[id]/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // ✅ Correct import for App Router
import { useJobById } from '@/modules/jobs/hooks/useJobById';
import TextInput from '@/components/TextInput';
import SelectInput from '@/components/SelectInput';
import Button from '@/components/Button';

const JobDetailForm = () => {
    const params = useParams();
    const id = params?.id as string;
    console.log('id', id)

    // Fetch job data
    const data = useJobById(id);
    console.log('data', data)

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

    // When data loads, populate form state
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
            <TextInput label="Title" type="text" value={form.title} onChange={() => { }} />
            <TextInput label="Description" type="text" value={form.description} onChange={() => { }} />
            <SelectInput
                label="Status"
                value={form.status}
                onChange={() => { }}
                options={[
                    { label: 'Open', value: 'OPEN' },
                    { label: 'Closed', value: 'CLOSED' },
                    { label: 'Draft', value: 'DRAFT' }
                ]}
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
            />
            <TextInput label="Applicants" type="number" value={form.applicants.toString()} onChange={() => { }} disabled={true} />
            <TextInput label="Created At" type="text" value={new Date(form.createdAt).toLocaleDateString()} disabled={true} />
            <TextInput label="Skills Required" type="text" value={form.skillsRequired} onChange={() => { }} />
            <TextInput label="Benefits" type="text" value={form.benefits} onChange={() => { }} />
            <Button label="Update Job" onClick={() => { }} />
        </form>
    );
};

export default JobDetailForm;
