'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { submitApplication } from '@/modules/applicants/graphql/SubmitApplicationMutation'; // Ensure this path is correct
import FileUploader from '@/components/FileUploader'; // Adjust import path
import { useToast } from '@/context/ToastContext';

interface ApplicantFormProps {
    applicantId: string; // The applicant ID for fetching details
}

const ApplicantForm = ({ applicantId }: ApplicantFormProps) => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        position: '',
        stage: '',
        appliedAt: '',
    });
    const [cv, setCv] = useState<File | null>(null);
    const [coverLetter, setCoverLetter] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const { addToast } = useToast();
    const router = useRouter();

    // Dummy position and stage options
    const positions = ['UX/UI Designer', 'Frontend Developer', 'Backend Developer'];
    const stages = ['APPLIED', 'SHORTLISTED', 'INTERVIEWED', 'HIRED', 'REJECTED'];

    useEffect(() => {
        // Fetch applicant data by applicantId (dummy data or fetch from API)
        const fetchApplicant = async () => {
            const applicant = {
                id: '3b6ad3fa-1692-4cb3-9436-0f482b3e6fb9',
                name: 'Sam Clark',
                email: 'sam.clark149@example.com',
                stage: 'APPLIED',
                position: 'UX/UI Designer',
                appliedAt: '2025-06-20T12:24:24.308Z',
            };
            setForm({
                firstName: applicant.name.split(' ')[0],
                lastName: applicant.name.split(' ')[1],
                email: applicant.email,
                position: applicant.position,
                stage: applicant.stage,
                appliedAt: applicant.appliedAt,
            });
        };

        fetchApplicant();
    }, [applicantId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMsg('');
        setErrorMsg('');

        if (!cv || !coverLetter) {
            setErrorMsg('Please attach both CV and cover letter');
            setLoading(false);
            return;
        }

        submitApplication(
            {
                input: { ...form, applicantId },
                cv,
                coverLetter,
            },
            () => {
                setLoading(false);
                addToast('Application submitted successfully!', 'success');
                setForm({ firstName: '', lastName: '', phone: '', email: '', message: '' });
                setCv(null);
                setCoverLetter(null);
                router.push('/'); // Redirect after successful submission
            },
            (err) => {
                setLoading(false);
                addToast(err.message || 'Something went wrong', 'error');
                setErrorMsg(err.message || 'Submission failed');
            }
        );
    };

    return (
        <div className='className="w-full h-full flex items-center justify-center px-12"'>

            <form className="space-y-6 mt-6 w-full max-w-2xl" onSubmit={handleSubmit}>
                {/* Name fields */}
                {['firstName', 'lastName'].map((field) => (
                    <div key={field}>
                        <label className="block text-sm font-medium capitalize">{field}</label>
                        <input
                            type="text"
                            name={field}
                            value={(form as any)[field]}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded"
                            required
                        />
                    </div>
                ))}

                {/* Email field */}
                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded"
                        required
                    />
                </div>

                {/* Dropdown for position */}
                <div>
                    <label className="block text-sm font-medium">Position</label>
                    <select
                        name="position"
                        value={form.position}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded"
                        required
                    >
                        {positions.map((position) => (
                            <option key={position} value={position}>
                                {position}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Dropdown for stage */}
                <div>
                    <label className="block text-sm font-medium">Stage</label>
                    <select
                        name="stage"
                        value={form.stage}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded"
                        required
                    >
                        {stages.map((stage) => (
                            <option key={stage} value={stage}>
                                {stage}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Applied At */}
                <div>
                    <label className="block text-sm font-medium">Applied At</label>
                    <input
                        type="text"
                        name="appliedAt"
                        value={new Date(form.appliedAt).toLocaleDateString()}
                        disabled
                        className="mt-1 p-2 w-full border border-gray-300 rounded"
                    />
                </div>

                {/* CV and Cover Letter Upload */}
                <div className="w-3/4 lg:w-1/2">
                    <FileUploader label="CV Upload" onChange={setCv} />
                    <div className="mt-6">
                        <FileUploader label="Cover Letter Upload" onChange={setCoverLetter} />
                    </div>
                </div>

                {errorMsg && <p className="text-red-600">{errorMsg}</p>}
                {successMsg && <p className="text-green-600">{successMsg}</p>}

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    {loading ? 'Submitting...' : 'Submit Application'}
                </button>
            </form>
        </div>
    );
};

export default ApplicantForm;
