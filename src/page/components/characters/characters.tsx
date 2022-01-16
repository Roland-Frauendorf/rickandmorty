import React, { useCallback, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import {
    useCharacters,
    useCharactersLoad,
    useErrorState,
    usePageNumber,
    usePaginationLoad,
} from '../../../context';
import { charactersInfoQuery } from '../../../GraphQL/queries';
import Style from './characters.style';
import { QueryCharactersResult, CharactersData } from '../../../GraphQL/queries.types';
import CharacterCard from './card/characters.card';

function Characters() {
    const { charactersLoading, setCharactersLoading } = useCharactersLoad();
    const { paginationLoading } = usePaginationLoad();
    const { loadError, setLoadError } = useErrorState();
    const { pageNumber } = usePageNumber();
    const { characters, setCharacters } = useCharacters();
    const { fetchMore } = useQuery(charactersInfoQuery, {
        variables: { page: 0 },
    });

    const loadCharacters = useCallback(async () => {
        setCharactersLoading(true);
        const { data, error }: QueryCharactersResult = await fetchMore({
            variables: { page: pageNumber },
        }).catch(() => ({ error: true }));

        if (error) {
            setLoadError(true);
            return;
        }

        if (data) setCharacters(data?.characters);
    }, [setCharactersLoading, fetchMore, pageNumber, setCharacters, setLoadError]);

    useEffect(() => {
        loadCharacters();
    }, [pageNumber, loadCharacters]);

    useEffect(() => {
        if (characters) setCharactersLoading(false);
    }, [characters, setCharactersLoading]);

    return (
        <Style.Container>
            {!charactersLoading && !paginationLoading && !loadError ? (
                <Style.Composer>
                    {(characters as CharactersData).results.map((character) => (
                        <CharacterCard key={character.id} character={character} />
                    ))}
                </Style.Composer>
            ) : null}
        </Style.Container>
    );
}

export default Characters;
