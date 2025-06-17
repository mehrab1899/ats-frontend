// src/app/components/ApplicationForm.tsx
import React, { useState } from 'react';
import TextInput from './TextInput';
import FileUploader from './FileUploader';
import Button from './Button';

const ApplicationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cv, setCv] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState<File | null>(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFile: React.Dispatch<React.SetStateAction<any>>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Application Submitted!');
  };

  return (
    <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
      <TextInput
        label="First Name"
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Enter your first name"
      />
      <TextInput
        label="Last Name"
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Enter your last name"
      />
      <TextInput
        label="Phone"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter your phone number"
      />
      <TextInput
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <div className="w-3/4 lg:w-1/2">
        <FileUploader label="CV Upload" onChange={setCv} />
        <div className='mt-6'>

          <FileUploader label="Cover Letter Upload" onChange={setCoverLetter} />
        </div>
      </div>
      <div className="w-full">
        <label className="block text-gray-600">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md"
          rows={4}
          placeholder="Write a brief message"
        />
      </div>
      <Button label="Submit Application" onClick={handleSubmit} className="mt-4" />
    </form>
  );
};

export default ApplicationForm;
