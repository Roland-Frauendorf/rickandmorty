import React from 'react';
import { Modal } from 'antd';
import Style from './page.style';
import { useColorProps, useDimensionsProps, useErrorState } from '../context';
import Paginator from './components/paginator/paginator';
import { PageContainerProps } from './page.types';
import Characters from './components/characters/characters';

const pageContainer: React.FC<PageContainerProps> = ({
    mainColor,
    contrastColor,
    secondaryColor,
    borderRadius,
    loadError,
}) => {
    // renderiza o conteúdo da página se não exister um erro de carregamento na mesma.
    if (!loadError)
        return (
            <Style.Container secondaryColor={secondaryColor} borderRadius={borderRadius}>
                <Style.Header contrastColor={contrastColor}>
                    Rick and Morty - Characters
                </Style.Header>
                <Style.Content mainColor={mainColor} contrastColor={contrastColor}>
                    <Characters />
                    <Paginator />
                </Style.Content>
            </Style.Container>
        );

    // Se ocorrer um erro de carregamento, um modal de erro será aberto para indicar o mesmo.
    return (
        <div>
            {Modal.error({
                title: 'Error!',
                content: 'Something went wrong while trying to load the content. Try again later.',
            })}
        </div>
    );
};

function Page() {
    const { mainColor, contrastColor, secondaryColor } = useColorProps();
    const { borderRadius } = useDimensionsProps();
    const { loadError } = useErrorState();

    return (
        <Style.Window mainColor={mainColor} contrastColor={contrastColor}>
            {pageContainer({ mainColor, contrastColor, secondaryColor, borderRadius, loadError })}
            <Style.Footer>by Roland Frauendorf</Style.Footer>
        </Style.Window>
    );
}

export default Page;
