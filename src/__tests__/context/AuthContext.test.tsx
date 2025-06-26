import { render, screen, waitFor } from '@testing-library/react';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import Cookies from 'js-cookie';
import userEvent from '@testing-library/user-event';

const TestComponent = () => {
    const { isAuthenticated, login, logout, loading } = useAuth();

    return (
        <div>
            <div data-testid="auth-status">{String(isAuthenticated)}</div>
            <div data-testid="loading">{String(loading)}</div>
            <button onClick={() => login('token-123')}>Login</button>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

describe('AuthContext', () => {
    beforeEach(() => {
        Cookies.remove('token');
    });

    it('initializes with unauthenticated user', async () => {
        render(
            <AuthProvider>
                <TestComponent />
            </AuthProvider>
        );

        await waitFor(() =>
            expect(screen.getByTestId('auth-status')).toHaveTextContent('false')
        );
    });

    it('login sets authenticated and token', async () => {
        render(
            <AuthProvider>
                <TestComponent />
            </AuthProvider>
        );

        await userEvent.click(screen.getByText('Login'));

        await waitFor(() =>
            expect(screen.getByTestId('auth-status')).toHaveTextContent('true')
        );

        expect(Cookies.get('token')).toBe('token-123');
    });

    it('logout clears authentication and token', async () => {
        Cookies.set('token', 'token-123');
        render(
            <AuthProvider>
                <TestComponent />
            </AuthProvider>
        );

        await userEvent.click(screen.getByText('Logout'));

        await waitFor(() =>
            expect(screen.getByTestId('auth-status')).toHaveTextContent('false')
        );

        expect(Cookies.get('token')).toBeUndefined();
    });
});
