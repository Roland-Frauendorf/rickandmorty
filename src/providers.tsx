import React, { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { ColorPropsProvider, PageNumberProvider } from './context';
import apolloClient from './GraphQL/client';

const providers: React.FC = ({ children }: { children?: ReactNode }) => {
    return (
        <ApolloProvider client={apolloClient}>
            <ColorPropsProvider>
                <PageNumberProvider>{children}</PageNumberProvider>
            </ColorPropsProvider>
        </ApolloProvider>
    );
};

export default providers;
