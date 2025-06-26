// components/ErrorBoundary.tsx
'use client';
import React, { Component, ReactNode } from 'react';

type Props = {
    children: ReactNode;
    fallback?: ReactNode;
};

type State = {
    hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
    state: State = { hasError: false };

    static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <div className="flex items-center justify-center h-screen bg-gray-100">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold mb-4">Something went wrong.</h1>
                        <p className="mb-4">Please try again or return to home.</p>
                        <button
                            onClick={() => location.reload()}
                            className="px-4 py-2 bg-[var(--primary-color)] text-white rounded"
                        >
                            Retry
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
