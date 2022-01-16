import React, { createContext, ReactNode, useContext, useState } from 'react';

import { CharactersData } from '../../GraphQL/queries.types';

type CharactersContextType = {
    characters: CharactersData | undefined;
    setCharacters: React.Dispatch<React.SetStateAction<any>>;
};

const CharactersContext = createContext<CharactersContextType>({
    characters: undefined,
    setCharacters: () => {},
});

export default function CharactersProvider({ children }: { children: ReactNode }) {
    const [characters, setCharacters] = useState(undefined);

    return (
        <CharactersContext.Provider
            value={{
                characters,
                setCharacters,
            }}
        >
            {children}
        </CharactersContext.Provider>
    );
}

/**
 * @property characters: dados dos persoangens carregados através da query no GraphQL.
 * @property setCharacters: salva os dados dos personagens que foram carregados.
 */
export const useCharacters = () => useContext(CharactersContext);
