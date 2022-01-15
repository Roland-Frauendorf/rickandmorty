import React, { createContext, ReactNode, useContext, useState } from 'react';

const defaultMainColor = process.env.REACT_APP_MAIN_COLOR as string;
const defaultSecondaryColor = process.env.REACT_APP_SECONDARY_COLOR as string;
const defaultFontMainColor = process.env.REACT_APP_FONT_MAIN_COLOR as string;
const defaultContrastColor = process.env.REACT_APP_CONTRAST_COLOR as string;

type ColorsContext = {
    mainColor: string;
    secondaryColor: string;
    fontMainColor: string;
    contrastColor: string;
    setMainColor: React.Dispatch<React.SetStateAction<string>>;
    setSecondaryColor: React.Dispatch<React.SetStateAction<string>>;
    setFontMainColor: React.Dispatch<React.SetStateAction<string>>;
    setContrastColor: React.Dispatch<React.SetStateAction<string>>;
};

const ColorPropsContext = createContext<ColorsContext>({
    mainColor: defaultMainColor,
    secondaryColor: defaultSecondaryColor,
    fontMainColor: defaultFontMainColor,
    contrastColor: defaultContrastColor,
    setMainColor: () => {},
    setSecondaryColor: () => {},
    setFontMainColor: () => {},
    setContrastColor: () => {},
});

export default function ColorPropsProvider({ children }: { children: ReactNode }) {
    const [mainColor, setMainColor] = useState(defaultMainColor);
    const [secondaryColor, setSecondaryColor] = useState(defaultSecondaryColor);
    const [fontMainColor, setFontMainColor] = useState(defaultFontMainColor);
    const [contrastColor, setContrastColor] = useState(defaultContrastColor);

    return (
        <ColorPropsContext.Provider
            value={{
                mainColor,
                secondaryColor,
                fontMainColor,
                contrastColor,
                setMainColor,
                setSecondaryColor,
                setFontMainColor,
                setContrastColor,
            }}
        >
            {children}
        </ColorPropsContext.Provider>
    );
}

export const useColorProps = () => useContext(ColorPropsContext);
