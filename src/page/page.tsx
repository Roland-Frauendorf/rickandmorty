import React from 'react';
import Style from './page.style';
import { useColorProps } from '../context/props/context.props.colors';

function Page() {
    const { mainColor, fontMainColor, secondaryColor } = useColorProps();

    return (
        <Style.Window mainColor={mainColor} fontMainColor={fontMainColor}>
            <Style.Container secondaryColor={secondaryColor}>
                <Style.Header fontMainColor={fontMainColor}>
                    Rick and Morty - Characters
                </Style.Header>
                <Style.Content />
                <Style.Footer>by Roland Frauendorf</Style.Footer>
            </Style.Container>
        </Style.Window>
    );
}

export default Page;
