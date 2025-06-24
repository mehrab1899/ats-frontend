'use client';
import React, { useState } from 'react';
import { submitApplication } from '@/modules/applicants/graphql/SubmitApplicationMutation';
import FileUploader from '@/components/FileUploader'; // adjust import path
import { useToast } from '@/context/ToastContext';
import { useRouter } from 'next/navigation';

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
  const [cv, setCv] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const { addToast } = useToast();
  const router = useRouter();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    console.log('inputs', form)

    submitApplication(
      {
        input: { ...form, jobId }, // Replace with dynamic jobId later
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
        setErrorMsg(err.message || 'Submission failed');
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
            required
          />
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
        <div className="mt-6">
          <FileUploader label="Cover Letter Upload" onChange={setCoverLetter} />
        </div>
      </div>

      {errorMsg && <p className="text-red-600">{errorMsg}</p>}
      {successMsg && <p className="text-green-600">{successMsg}</p>}

      <button
        type="submit"
        disabled={loading}
        className="bg-[#012C56] text-white px-4 py-2 rounded hover:bg-gray-200 hover:text-[#012C56]"
      >
        {loading ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  );
};

export default ApplicationForm;
