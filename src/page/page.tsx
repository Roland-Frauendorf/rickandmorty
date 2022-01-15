import React from 'react';
import Style from './page.style';
import { useColorProps } from '../context/props/context.props.colors';

function Page() {
    const { mainColor, fontMainColor } = useColorProps();

    return <Style.Window mainColor={mainColor} fontMainColor={fontMainColor} />;
}

export default Page;
