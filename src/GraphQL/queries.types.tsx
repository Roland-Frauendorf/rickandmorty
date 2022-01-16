import { ApolloError } from '@apollo/client';

export type QueryQuantitiesData = {
    characters: {
        info: {
            count: number;
            pages: number;
        };
    };
};

export type QuantitiesQueryResult = {
    data: QueryQuantitiesData | undefined;
    loading: boolean;
    error?: ApolloError | undefined;
};
