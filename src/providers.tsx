import React, { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import {
    ColorPropsProvider,
    ErrorProvider,
    PageNumberProvider,
    PaginationLoadProvider,
} from './context';
import apolloClient from './GraphQL/client';

const providers: React.FC = ({ children }: { children?: ReactNode }) => {
    return (
        <ApolloProvider client={apolloClient}>
            <ErrorProvider>
                <ColorPropsProvider>
                    <PaginationLoadProvider>
                        <PageNumberProvider>{children}</PageNumberProvider>
                    </PaginationLoadProvider>
                </ColorPropsProvider>
            </ErrorProvider>
        </ApolloProvider>
    );
};

export default providers;
