import React, { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import ColorPropsProvider from './context/props/context.props.colors';
import apolloClient from './GraphQL/client';

const providers: React.FC = ({ children }: { children?: ReactNode }) => {
    return (
        <ApolloProvider client={apolloClient}>
            <ColorPropsProvider>{children}</ColorPropsProvider>
        </ApolloProvider>
    );
};

export default providers;
