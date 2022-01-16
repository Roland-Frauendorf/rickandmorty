import React, { useState } from 'react';
import { useColorProps, useDimensionsProps } from '../../../../context';
import Style from './characters.card.style';
import CharacterModal from '../modal/characters.modal';
import { CharacterInfo } from '../../../../GraphQL/queries.types';

const CLOSE = false;
const OPEN = true;

function CharacterCard({ character }: { character: CharacterInfo }) {
    const { mainColor, contrastColor } = useColorProps();
    const { borderRadius } = useDimensionsProps();
    const [openModal, setOpenCloseModal] = useState(CLOSE);

    const handleOpen = () => {
        setOpenCloseModal(OPEN);
    };

    return (
        <Style.Container mainColor={mainColor} borderRadius={borderRadius}>
            <Style.Content onClick={handleOpen}>
                <Style.Image
                    src={character?.image}
                    mainColor={mainColor}
                    borderRadius={borderRadius}
                />
                <Style.Info contrastColor={contrastColor}>
                    <b>Name:&nbsp;</b>
                    {character?.name}
                </Style.Info>
                <Style.Info contrastColor={contrastColor}>
                    <b>Status:&nbsp;</b>
                    {character?.status.toLowerCase()}
                </Style.Info>
            </Style.Content>

            <CharacterModal
                character={character}
                openModal={openModal}
                setOpenCloseModal={setOpenCloseModal}
            />
        </Style.Container>
    );
}

export default CharacterCard;
