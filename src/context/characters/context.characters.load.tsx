import React, { createContext, ReactNode, useContext, useState } from 'react';

type CharactersLoadType = {
    charactersLoading: boolean;
    setCharactersLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const CharactersLoadContext = createContext<CharactersLoadType>({
    charactersLoading: true,
    setCharactersLoading: () => {},
});

export default function CharactersLoadingProvider({ children }: { children: ReactNode }) {
    const [charactersLoading, setCharactersLoading] = useState(true);

    return (
        <CharactersLoadContext.Provider
            value={{
                charactersLoading,
                setCharactersLoading,
            }}
        >
            {children}
        </CharactersLoadContext.Provider>
    );
}

/**
 * @property charactersLoading: indica se o conteúdo da página (persoangens) está sendo carregado.
 * @property setCharactersLoading: altera a flag de carregamento para true ou false.
 */
export const useCharactersLoad = () => useContext(CharactersLoadContext);
