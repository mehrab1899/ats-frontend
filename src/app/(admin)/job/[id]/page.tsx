'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { useJobById } from '@/modules/jobs/hooks/useJobById';
import { useUpdateJob } from '@/modules/jobs/hooks/useUpdateJob';
import TextInput from '@/components/TextInput';
import SelectInput from '@/components/SelectInput';
import Button from '@/components/Button';
import { useToast } from '@/context/ToastContext';
import { JobTypeDisplayMap, JobTypeEnumMap } from '@/utils/jobEnums';

const JobDetailForm = () => {
    const params = useParams();
    const searchParams = useSearchParams();
    const router = useRouter();
    const { addToast } = useToast();

    const id = params?.id as string;
    const mode = searchParams.get('mode');
    const isViewMode = mode === 'view';

    const data = useJobById(id);
    const [commit, isInFlight] = useUpdateJob();

    const initial = data?.getJobById;
    const [form, setForm] = useState({
        title: '',
        description: '',
        status: 'OPEN',
        type: 'Full-time',
        skillsRequired: '',
        benefits: ''
    });

    const [errors, setErrors] = useState<{ [K in keyof typeof form]?: string }>({});

    useEffect(() => {
        if (initial) {
            setForm({
                title: initial.title || '',
                description: initial.description || '',
                status: initial.status || 'OPEN',
                type: JobTypeDisplayMap[initial.type as keyof typeof JobTypeDisplayMap],
                skillsRequired: JSON.stringify(initial.skillsRequired ?? '', null, 2),
                benefits: JSON.stringify(initial.benefits ?? '', null, 2),
            });
        }
    }, [initial]);

    const validate = () => {
        const errs: typeof errors = {};
        if (!form.title.trim()) errs.title = 'Title is required';
        if (!form.description.trim()) errs.description = 'Description is required';
        if (!form.skillsRequired.trim()) errs.skillsRequired = 'Skills Required is required';
        if (!form.benefits.trim()) errs.benefits = 'Benefits is required';
        return errs;
    };

    const isFormChanged = () => {
        if (!initial) return false;
        return (
            form.title !== initial.title ||
            form.description !== initial.description ||
            form.type !== initial.type ||
            form.skillsRequired !== JSON.stringify(initial.skillsRequired, null, 2) ||
            form.benefits !== JSON.stringify(initial.benefits, null, 2)
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            addToast('Please fix validation errors before submitting.', 'error');
            return;
        }

        if (!isFormChanged()) {
            addToast('No changes detected.', 'error');
            return;
        }

        try {
            commit({
                variables: {
                    id,
                    input: {
                        title: form.title.trim(),
                        description: form.description.trim(),
                        type: JobTypeEnumMap[form.type as keyof typeof JobTypeEnumMap],
                        skillsRequired: JSON.parse(form.skillsRequired),
                        benefits: JSON.parse(form.benefits)
                    }
                },
                onCompleted: () => {
                    addToast('Job updated successfully.', 'success');
                    router.push('/dashboard');
                },
                onError: (err: any) => {
                    addToast(err.message || 'Update failed.', 'error');
                }
            });
        } catch (err: any) {
            addToast('Invalid JSON in Skills or Benefits field.', 'error');
        }
    };

    const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, [field]: e.target.value }));
        setErrors(prev => ({ ...prev, [field]: undefined }));
    };

    return (
        <div className="w-full max-w-4xl mx-auto mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {isViewMode ? 'Job Details' : 'Edit Job'}
            </h2>

            <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <TextInput label="Title" type="text" value={form.title} onChange={handleChange('title')} disabled={isViewMode} />
                    {errors.title && <p className="text-red-600 text-sm">{errors.title}</p>}

                    <TextInput label="Description" type="text" value={form.description} onChange={handleChange('description')} disabled={isViewMode} />
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
                        disabled={isViewMode}
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
                        disabled // always disabled
                    />

                    <TextInput label="Skills Required (JSON)" type="text" value={form.skillsRequired} onChange={handleChange('skillsRequired')} disabled={isViewMode} />
                    {errors.skillsRequired && <p className="text-red-600 text-sm">{errors.skillsRequired}</p>}

                    <TextInput label="Benefits (JSON)" type="text" value={form.benefits} onChange={handleChange('benefits')} disabled={isViewMode} />
                    {errors.benefits && <p className="text-red-600 text-sm">{errors.benefits}</p>}
                </div>

                {!isViewMode && (
                    <div className="flex justify-start">
                        <Button label={isInFlight ? 'Updating...' : 'Update Job'} onClick={handleSubmit} />
                    </div>
                )}
            </form>
        </div>
    );
};

export default JobDetailForm;
