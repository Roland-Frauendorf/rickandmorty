export type MainColorProp = { mainColor: string };

export type SecondaryColorProp = { secondaryColor: string };

export type ContrastColorProp = { contrastColor: string };

export type BorderRadiusProp = { borderRadius: string };

export type PageColorsProps = MainColorProp & SecondaryColorProp & ContrastColorProp;

export type PageContainerProps = MainColorProp &
    ContrastColorProp &
    SecondaryColorProp &
    BorderRadiusProp & {
        loadError: boolean;
    };
