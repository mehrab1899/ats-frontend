'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { useJobById } from '@/modules/jobs/hooks/useJobById';
import { useUpdateJob } from '@/modules/jobs/hooks/useUpdateJob';
import TextInput from '@/components/TextInput';
import SelectInput from '@/components/SelectInput';
import Button from '@/components/Button';
import { useToast } from '@/context/ToastContext';
import { JobTypeDisplayMap, JobTypeEnumMap } from '@/utils/jobEnums';
import MultiSelectInput from '@/components/MultiSelectInput';
import { SkillsOptions, BenefitsOptions } from '@/utils/jobOptions';

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
        skillsRequired: [] as string[],
        benefits: [] as string[]
    });

    const [errors, setErrors] = useState<{ [K in keyof typeof form]?: string }>({});

    useEffect(() => {
        if (initial) {
            setForm({
                title: initial.title || '',
                description: initial.description || '',
                status: initial.status || 'OPEN',
                type: JobTypeDisplayMap[initial.type as keyof typeof JobTypeDisplayMap],
                skillsRequired: parseArray(initial.skillsRequired),
                benefits: parseArray(initial.benefits)
            });
        }
    }, [initial]);

    const parseArray = (val: unknown): string[] => {
        if (Array.isArray(val)) return val;
        if (typeof val === 'string') {
            try {
                const parsed = JSON.parse(val);
                return Array.isArray(parsed) ? parsed : [];
            } catch {
                return [];
            }
        }
        return [];
    };

    const validate = () => {
        const errs: typeof errors = {};
        if (!form.title.trim()) errs.title = 'Title is required';
        if (!form.description.trim()) errs.description = 'Description is required';
        if (!form.skillsRequired.length) errs.skillsRequired = 'Skills Required is required';
        if (!form.benefits.length) errs.benefits = 'Benefits is required';
        return errs;
    };

    const isFormChanged = useMemo(() => {
        if (!initial) return false;

        const normalize = (arr: unknown) =>
            Array.isArray(arr) ? arr.slice().sort().join(',') : '';
        return (
            form.title !== initial.title ||
            form.description !== initial.description ||
            form.type !== JobTypeDisplayMap[initial.type as keyof typeof JobTypeDisplayMap] ||
            normalize(form.skillsRequired) !== normalize(initial.skillsRequired) ||
            normalize(form.benefits) !== normalize(initial.benefits)
        );
    }, [form, initial]);

    const isFormValid = useMemo(() => {
        const v = validate();
        return Object.keys(v).length === 0;
    }, [form]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            addToast('Please fix validation errors before submitting.', 'error');
            return;
        }

        if (!isFormChanged) {
            addToast('No changes detected.', 'error');
            return;
        }

        commit({
            variables: {
                id,
                input: {
                    title: form.title.trim(),
                    description: form.description.trim(),
                    type: JobTypeEnumMap[form.type as keyof typeof JobTypeEnumMap],
                    skillsRequired: form.skillsRequired,
                    benefits: form.benefits
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
    };

    const handleChange = (field: keyof typeof form) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
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
                    <TextInput
                        label="Title"
                        type="text"
                        value={form.title}
                        onChange={handleChange('title')}
                        disabled={isViewMode}
                    />
                    {errors.title && <p className="text-red-600 text-sm">{errors.title}</p>}

                    <TextInput
                        label="Description"
                        type="text"
                        value={form.description}
                        onChange={handleChange('description')}
                        disabled={isViewMode}
                    />
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

                    <MultiSelectInput
                        label="Skills Required"
                        values={form.skillsRequired}
                        options={SkillsOptions}
                        multiple={true}
                        disabled={isViewMode}
                        onChange={(vals) => setForm(prev => ({ ...prev, skillsRequired: vals as string[] }))}
                    />
                    {errors.skillsRequired && <p className="text-red-600 text-sm">{errors.skillsRequired}</p>}

                    <MultiSelectInput
                        label="Benefits"
                        values={form.benefits}
                        options={BenefitsOptions}
                        multiple={true}
                        disabled={isViewMode}
                        onChange={(vals) => setForm(prev => ({ ...prev, benefits: vals as string[] }))}
                    />
                    {errors.benefits && <p className="text-red-600 text-sm">{errors.benefits}</p>}
                </div>

                {!isViewMode && (
                    <div className="flex justify-start">
                        <Button
                            label={isInFlight ? 'Updating...' : 'Update Job'}
                            onClick={handleSubmit}
                            className={`${(!isFormChanged || !isFormValid || isInFlight)
                                ? 'opacity-50 cursor-not-allowed'
                                : ''
                                }`}
                        />
                    </div>
                )}
            </form>
        </div>
    );
};

export default JobDetailForm;
