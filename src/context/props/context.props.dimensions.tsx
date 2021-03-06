import React, { createContext, ReactNode, useContext, useState } from 'react';

const defaultBorderRadius = process.env.REACT_APP_BORDER_RADIUS as string;

type DimensionsContext = {
    borderRadius: string;
    setBorderRadius: React.Dispatch<React.SetStateAction<string>>;
};

const DimensionsPropsContext = createContext<DimensionsContext>({
    borderRadius: defaultBorderRadius,
    setBorderRadius: () => {},
});

export default function DimensionsPropsProvider({ children }: { children: ReactNode }) {
    const [borderRadius, setBorderRadius] = useState(defaultBorderRadius);

    return (
        <DimensionsPropsContext.Provider
            value={{
                borderRadius,
                setBorderRadius,
            }}
        >
            {children}
        </DimensionsPropsContext.Provider>
    );
}

/**
 * Propriedades de dimensionamento da página.
 * @property borderRadius: dimensão das bordas dos componentes da página.
 * @property setBorderRadius: altera a dimensão das bordas dos componentes da página.
 */
export const useDimensionsProps = () => useContext(DimensionsPropsContext);
