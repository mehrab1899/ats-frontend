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
    loading: boolean;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true); // ✅ new

    useEffect(() => {
        const token = Cookies.get('token');
        setIsAuthenticated(!!token);
        setLoading(false); // ✅ mark that auth check is complete
    }, []);

    const login = (token: string) => {
        Cookies.set('token', token, { expires: 7 });
        setIsAuthenticated(true);
    };

    const logout = () => {
        Cookies.remove('token');
        setIsAuthenticated(false);
    };

    const value: AuthContextType = {
        isAuthenticated,
        loading, // ✅ expose loading
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
