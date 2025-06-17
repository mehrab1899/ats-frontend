'use client';

import React, { useState } from 'react';
import { useMutation } from 'react-relay';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { LoginMutation } from '@/graphql/mutations/LoginMutation';
import type { LoginMutation as LoginMutationType } from '../../../__generated__/LoginMutation.graphql';
import { AiOutlineLoading } from 'react-icons/ai';
import Button from '@/components/Button';

const AdminLoginPage: React.FC = () => {
    const router = useRouter();
    const { login } = useAuth();
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
                    login(data.login.token);
                    router.push('/dashboard');
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
        <div className="w-full h-full flex items-center justify-center px-12">
            <div className="w-full max-w-md sm:max-w-lg">
                <h2 className="text-4xl font-bold text-blue-900 mb-2 text-center">Sign In</h2>
                <p className="text-gray-600 text-md text-center mb-8">Access your admin dashboard</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    {error && <p className="text-red-600 text-sm text-center">{error}</p>}

                    <Button
                        onClick={handleSubmit}
                        label={
                            isInFlight ? (
                                <span className="flex items-center justify-center">
                                    <AiOutlineLoading className="animate-spin mr-2" size={20} />
                                    Logging in...
                                </span>
                            ) : (
                                'Login'
                            )
                        }
                        className="w-full"
                    />
                </form>
            </div>
        </div>
    );
};

export default AdminLoginPage;
