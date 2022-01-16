import React, { createContext, ReactNode, useContext, useState } from 'react';

const defaultMainColor = process.env.REACT_APP_MAIN_COLOR as string;
const defaultSecondaryColor = process.env.REACT_APP_SECONDARY_COLOR as string;
const defaultContrastColor = process.env.REACT_APP_CONTRAST_COLOR as string;

type ColorsContext = {
    mainColor: string;
    secondaryColor: string;
    contrastColor: string;
    setMainColor: React.Dispatch<React.SetStateAction<string>>;
    setSecondaryColor: React.Dispatch<React.SetStateAction<string>>;
    setContrastColor: React.Dispatch<React.SetStateAction<string>>;
};

const ColorPropsContext = createContext<ColorsContext>({
    mainColor: defaultMainColor,
    secondaryColor: defaultSecondaryColor,
    contrastColor: defaultContrastColor,
    setMainColor: () => {},
    setSecondaryColor: () => {},
    setContrastColor: () => {},
});

export default function ColorPropsProvider({ children }: { children: ReactNode }) {
    const [mainColor, setMainColor] = useState(defaultMainColor);
    const [secondaryColor, setSecondaryColor] = useState(defaultSecondaryColor);
    const [contrastColor, setContrastColor] = useState(defaultContrastColor);

    return (
        <ColorPropsContext.Provider
            value={{
                mainColor,
                secondaryColor,
                contrastColor,
                setMainColor,
                setSecondaryColor,
                setContrastColor,
            }}
        >
            {children}
        </ColorPropsContext.Provider>
    );
}

/**
 * Propriedades de cor da página.
 * @property mainColor: cor principal no design da página.
 * @property secondaryColor: cor secundária no design da página.
 * @property contrastColor: cor de contraste no design da página.
 * @property setMainColor: altera a cor principal do design da página (útil para alteração de temas).
 * @property setSecondaryColor: altera a cor secundária do design da página (útil para alteração de temas).
 * @property setContrastColor: altera a cor de contraste do design da página (útil para alteração de temas).
 */
export const useColorProps = () => useContext(ColorPropsContext);
