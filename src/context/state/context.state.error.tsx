import React, { createContext, ReactNode, useContext, useState } from 'react';

type ErrorType = {
    loadError: boolean;
    setLoadError: React.Dispatch<React.SetStateAction<boolean>>;
};

const ErrorContext = createContext<ErrorType>({
    loadError: false,
    setLoadError: () => {},
});

export default function ErrorProvider({ children }: { children: ReactNode }) {
    const [loadError, setLoadError] = useState(false);

    return (
        <ErrorContext.Provider value={{ loadError, setLoadError }}>
            {children}
        </ErrorContext.Provider>
    );
}

/**
 * Estado de erros da página. Atualmente possui apenas o estado de
 * erro de carregamento, mas outros tipos podem ser implementados.
 * Sua usabilidade consiste em gravar que houve erro no carregamento
 * do conteúdo de um componente para que os outros componentes do
 * ecossistema não sejam renderizados e seja renderizada uma mensagem
 * de erro.
 * @property loadError: flag para indicar que houve um erro de carregamento no conteúdo da página.
 * @property setLoadError: altera a flag de carregamento para true ou false.
 */
export const useErrorState = () => useContext(ErrorContext);
