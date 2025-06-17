
// src/context/AuthContext.tsx
'use client';

import React, {
    createContext,
    useState,
    useEffect,
    FC,
    ReactNode,
    useContext,
} from 'react';
import Cookies from 'js-cookie';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const token = Cookies.get('token');
        setIsAuthenticated(!!token);
    }, []);

    const login = (token: string) => {
        Cookies.set('token', token, { expires: 7 }); // store for 7 days
        setIsAuthenticated(true);
    };

    const logout = () => {
        Cookies.remove('token');
        setIsAuthenticated(false);
    };

    const value: AuthContextType = {
        isAuthenticated,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    );
};

// 4. Export a hook for ease of use
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
