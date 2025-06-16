'use client';

import { ReactNode } from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import relayEnvironment from './relayEnvironment';

const RelayProvider = ({ children }: { children: ReactNode }) => {
    return (
        <RelayEnvironmentProvider environment={relayEnvironment}>
            {children}
        </RelayEnvironmentProvider>
    );
};

export default RelayProvider;
