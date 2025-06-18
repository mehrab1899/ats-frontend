// src/context/ToastContext.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

// Type definitions

type ToastType = 'success' | 'error';

interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

interface ToastContextType {
    addToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = (message: string, type: ToastType = 'success') => {
        const id = Date.now().toString();
        setToasts((prev) => [...prev, { id, message, type }]);

        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 4000);
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <div className="fixed top-4 right-4 z-50 space-y-4 max-w-sm w-full">
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={`relative shadow-lg border-l-4 p-4 pt-3 pr-4 pb-3 pl-4 rounded-tr-2xl rounded-br-2xl rounded-tl-2xl text-sm text-gray-900 bg-white flex gap-3 items-start ${toast.type === 'success' ? 'border-green-500' : 'border-red-500'
                            }`}
                    >
                        <div className="pt-1">
                            {toast.type === 'success' ? (
                                <CheckCircle className="text-green-500 w-5 h-5" />
                            ) : (
                                <XCircle className="text-red-500 w-5 h-5" />
                            )}
                        </div>
                        <div className="flex-1">
                            <p className="font-bold mb-1">
                                {toast.type === 'success' ? 'Success' : 'Error'}
                            </p>
                            <p className="text-gray-700">
                                {toast.message.length > 50
                                    ? toast.message.slice(0, 50) + '...'
                                    : toast.message}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};

export const useToast = (): ToastContextType => {
    const context = useContext(ToastContext);
    if (!context) throw new Error('useToast must be used within a ToastProvider');
    return context;
};
