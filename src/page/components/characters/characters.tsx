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

    /**
     * Busca os dados dos personagens de acordo com a página selecionada.
     */
    const loadCharacters = useCallback(async () => {
        setCharactersLoading(true); // Altera a flag de carregamento para true, de modo com que a página antiga deixe de ser renderizada.
        const { data, error }: QueryCharactersResult = await fetchMore({
            variables: { page: pageNumber },
        }).catch(() => ({ error: true }));

        if (error) {
            setLoadError(true); // Em caso de erro, altera-se a flag de erro de carregamento para true.
            return;
        }

        if (data) setCharacters(data?.characters);
    }, [setCharactersLoading, fetchMore, pageNumber, setCharacters, setLoadError]);

    /**
     * Quando uma página é alterada com o paginator, carrega os personagens da nova página.
     */
    useEffect(() => {
        loadCharacters();
    }, [pageNumber, loadCharacters]);

    /**
     * Quando os personagens terminarem de ser carregados, altera-se a flag de carregamento para false.
     */
    useEffect(() => {
        if (characters) setCharactersLoading(false);
    }, [characters, setCharactersLoading]);

    return (
        <Style.Container>
            {!charactersLoading && !paginationLoading && !loadError ? ( // Se os dados estiverem prontos, carrega-se a nova página.
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
