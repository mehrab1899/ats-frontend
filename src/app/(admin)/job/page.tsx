'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import TextInput from '@/components/TextInput';
import SelectInput from '@/components/SelectInput';
import Button from '@/components/Button';
import { useToast } from '@/context/ToastContext';
import { JobTypeEnumMap } from '@/utils/jobEnums';
import { useCreateJob } from '@/modules/jobs/hooks/useCreateJob';
import { BenefitsOptions, SkillsOptions } from '@/utils/jobOptions';
import MultiSelectInput from '@/components/MultiSelectInput';
import { JobStatus } from '@/__generated__/jobMutations_UpdateJobMutation.graphql';

const JobCreateForm = () => {
    const router = useRouter();
    const { addToast } = useToast();
    const [commit, isInFlight] = useCreateJob();

    const [form, setForm] = useState<{
        title: string;
        description: string;
        status: JobStatus;
        type: string;
        skillsRequired: string[];
        benefits: string[];
      }>({
        title: '',
        description: '',
        status: 'OPEN',
        type: 'Full-time',
        skillsRequired: [],
        benefits: [],
      });      

    const [errors, setErrors] = useState<{ [K in keyof typeof form]?: string }>({});

    const validate = () => {
        const errs: typeof errors = {};
        if (!form.title.trim()) errs.title = 'Title is required';
        if (!form.description.trim()) errs.description = 'Description is required';
        if (!form.skillsRequired.length) errs.skillsRequired = 'Skills Required is required';
        if (!form.benefits.length) errs.benefits = 'Benefits is required';
        return errs;
    };

    const isFormValid = useMemo(() => {
        const v = validate();
        return Object.keys(v).length === 0;
    }, [form]);

    const handleChange = (field: keyof typeof form) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm(prev => ({ ...prev, [field]: e.target.value }));
        setErrors(prev => ({ ...prev, [field]: undefined }));
    };

    const handleMultiSelectChange = (field: 'skillsRequired' | 'benefits') => (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const selectedOptions = Array.from(e.target.selectedOptions).map((o) => o.value);
        setForm((prev) => ({ ...prev, [field]: selectedOptions }));
        setErrors(prev => ({ ...prev, [field]: undefined }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            addToast('Please fix validation errors before submitting.', 'error');
            return;
        }

        commit({
            variables: {
                input: {
                    title: form.title.trim(),
                    description: form.description.trim(),
                    status: form.status,
                    type: JobTypeEnumMap[form.type as keyof typeof JobTypeEnumMap],
                    skillsRequired: form.skillsRequired,
                    benefits: form.benefits
                }
            },
            onCompleted: (res: any) => {
                if (res?.createJob?.id) {
                    addToast('Job created successfully.', 'success');
                    router.push(`/job/${res.createJob.id}?mode=view`);
                } else {
                    addToast('Job creation failed. Try again later.', 'error');
                }
            },
            onError: (err: any) => {
                addToast(err.message || 'Job creation failed.', 'error');
            }
        });
    };

    return (
        <div className="w-full max-w-4xl mx-auto mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Create a New Job</h2>

            <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <TextInput label="Title" type="text" value={form.title} onChange={handleChange('title')} />
                    {errors.title && <p className="text-red-600 text-sm">{errors.title}</p>}

                    <TextInput label="Description" type="text" value={form.description} onChange={handleChange('description')} />
                    {errors.description && <p className="text-red-600 text-sm">{errors.description}</p>}

                    <SelectInput
                        label="Job Type"
                        value={form.type}
                        onChange={handleChange('type') as any}
                        options={[
                            { label: 'Full-time', value: 'Full-time' },
                            { label: 'Part-time', value: 'Part-time' },
                            { label: 'Contract', value: 'Contract' }
                        ]}
                    />

                    <SelectInput
                        label="Status"
                        value={form.status}
                        onChange={handleChange('status') as any}
                        options={[
                            { label: 'Open', value: 'OPEN' },
                            { label: 'Closed', value: 'CLOSED' },
                            { label: 'Draft', value: 'DRAFT' }
                        ]}
                    />

                    <MultiSelectInput
                        label="Skills Required"
                        values={form.skillsRequired}
                        options={SkillsOptions}
                        onChange={(vals) => setForm(prev => ({ ...prev, skillsRequired: vals as string[] }))}
                    />
                    {errors.skillsRequired && <p className="text-red-600 text-sm">{errors.skillsRequired}</p>}

                    <MultiSelectInput
                        label="Benefits"
                        values={form.benefits}
                        options={BenefitsOptions}
                        onChange={(vals) => setForm(prev => ({ ...prev, benefits: vals as string[] }))}
                    />
                    {errors.benefits && <p className="text-red-600 text-sm">{errors.benefits}</p>}
                </div>

                <div className="flex justify-start">
                    <Button
                        label={isInFlight ? 'Creating...' : 'Create Job'}
                        onClick={handleSubmit}
                        className={`${(!isFormValid || isInFlight) ? 'opacity-50 cursor-not-allowed' : ''}`}
                    />
                </div>
            </form>
        </div>
    );
};

export default JobCreateForm;
