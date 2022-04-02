import React, { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import {
    ColorPropsProvider,
    ErrorProvider,
    PageNumberProvider,
    PaginationLoadProvider,
    CharactersProvider,
    CharactersLoadingProvider,
    DimensionsPropsProvider,
} from './context';
import apolloClient from './GraphQL/client';

const providers: React.FC = ({ children }: { children?: ReactNode }) => {
    return (
        <ApolloProvider client={apolloClient}>
            <ErrorProvider>
                <ColorPropsProvider>
                    <DimensionsPropsProvider>
                        <PaginationLoadProvider>
                            <PageNumberProvider>
                                <CharactersLoadingProvider>
                                    <CharactersProvider>{children}</CharactersProvider>
                                </CharactersLoadingProvider>
                            </PageNumberProvider>
                        </PaginationLoadProvider>
                    </DimensionsPropsProvider>
                </ColorPropsProvider>
            </ErrorProvider>
        </ApolloProvider>
    );
};

export default providers;
