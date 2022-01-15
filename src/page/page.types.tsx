export type MainColorProp = { mainColor: string };

export type SecondaryColorProp = { secondaryColor: string };

export type FontMainColorProp = { fontMainColor: string };

export type ContrastColorProp = { contrastColor: string };

export type PageColorsProps = MainColorProp &
    SecondaryColorProp &
    FontMainColorProp &
    ContrastColorProp;
