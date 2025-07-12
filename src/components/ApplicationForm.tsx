'use client';
import React, { useState } from 'react';
import { submitApplication } from '@/modules/applicants/graphql/SubmitApplicationMutation';
import FileUploader from '@/components/FileUploader';
import { useToast } from '@/context/ToastContext';
import { useRouter } from 'next/navigation';
import Button from './Button';

interface ApplicationFormProps {
  jobId: string;
}

const ApplicationForm = ({ jobId }: ApplicationFormProps) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
  const [cv, setCv] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setFieldErrors((prev) => ({
        ...prev,
        email: value ? (emailRegex.test(value) ? '' : 'Invalid email format.') : 'Email is required.',
      }));
    } else {
      setFieldErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!form.firstName) errors.firstName = 'First name is required.';
    if (!form.lastName) errors.lastName = 'Last name is required.';
    if (!form.phone) errors.phone = 'Phone number is required.';
    if (!form.email) errors.email = 'Email is required.';
    if (!cv) errors.cv = 'Please attach your CV.';
    if (!coverLetter) errors.coverLetter = 'Please attach your cover letter.';
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFieldErrors({});

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setLoading(false);
      return;
    }

    submitApplication(
      {
        input: { ...form, jobId },
        cv,
        coverLetter
      },
      () => {
        setLoading(false);
        addToast('Application submitted successfully!', 'success');
        setForm({ firstName: '', lastName: '', phone: '', email: '', message: '' });
        setCv(null);
        setCoverLetter(null);
        router.push('/');
      },
      (err) => {
        setLoading(false);
        addToast(err.message || 'Something went wrong', 'error');
        setFieldErrors({ general: err.message || 'Submission failed' });
      }
    );
  };

  return (
    <form className="space-y-6 mt-6 w-full max-w-2xl" onSubmit={handleSubmit}>
      {['firstName', 'lastName', 'phone', 'email'].map((field) => (
        <div key={field}>
          <label className="block text-sm font-medium capitalize">{field}</label>
          <input
            type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
            name={field}
            value={(form as any)[field]}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
          {fieldErrors[field] && (
            <p className="text-red-600 text-sm mt-1">{fieldErrors[field]}</p>
          )}
        </div>
      ))}

      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="mt-1 p-2 w-full border border-gray-300 rounded"
        />
      </div>

      <div className="w-3/4 lg:w-1/2">
        <FileUploader label="CV Upload" onChange={setCv} />
        {fieldErrors.cv && <p className="text-red-600 text-sm mt-1">{fieldErrors.cv}</p>}

        <div className="mt-6">
          <FileUploader label="Cover Letter Upload" onChange={setCoverLetter} />
          {fieldErrors.coverLetter && (
            <p className="text-red-600 text-sm mt-1">{fieldErrors.coverLetter}</p>
          )}
        </div>
      </div>

      {fieldErrors.general && (
        <p className="text-red-600 text-sm">{fieldErrors.general}</p>
      )}

      <Button
        label={loading ? 'Submitting...' : 'Submit Application'}
        onClick={(e) => {
          e.preventDefault();
          if (!loading && Object.keys(validateForm()).length === 0) {
            handleSubmit(e);
          }
        }}
        className={`bg-[var(--primary-color)] ${loading || Object.keys(validateForm()).length > 0
          ? 'opacity-50 cursor-not-allowed'
          : ''}`}
      />
    </form>
  );
};

export default ApplicationForm;
