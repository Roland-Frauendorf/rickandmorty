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

export type CharacterInfo = {
    id: string;
    name: string;
    image: string;
    status: string;
    episode: {
        name: string;
        id: string;
    }[];
};

export type CharactersData = {
    results: CharacterInfo[];
};

export type QueryCharactersData = {
    characters: CharactersData;
};

export type QueryCharactersResult = {
    data?: QueryCharactersData | undefined;
    loading?: boolean;
    error?: ApolloError | boolean | undefined;
};
