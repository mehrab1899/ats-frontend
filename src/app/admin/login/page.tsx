'use client';

import React, { useState } from 'react';
import { useMutation } from 'react-relay';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { LoginMutation } from '@/graphql/mutations/LoginMutation';
import type { LoginMutation as LoginMutationType } from '../../../__generated__/LoginMutation.graphql';

const AdminLoginPage: React.FC = () => {
    const router = useRouter();
    const { login } = useAuth(); // ✅ use the custom hook
    const [commit, isInFlight] = useMutation<LoginMutationType>(LoginMutation);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        commit({
            variables: { email, password },
            onCompleted(data) {
                if (data?.login?.token) {
                    login(data.login.token);            // ✅ Save to cookie and update context
                    router.push('/admin/dashboard');    // ✅ Redirect
                } else {
                    setError('Invalid credentials');
                }
            },
            onError(err) {
                console.error(err);
                setError('Login failed');
            },
        });
    };

    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>
                {error && <p className="text-red-600 text-sm">{error}</p>}
                <button
                    type="submit"
                    disabled={isInFlight}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    {isInFlight ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default AdminLoginPage;
