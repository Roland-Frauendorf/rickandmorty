import React from 'react';
import { useColorProps, useDimensionsProps } from '../../../../context';
import { ModalProps } from './characters.modal.type';
import Style from './characters.modal.style';

const CLOSE = false; // Constante indicando que o modal deve ser FECHADO

function CharacterModal({ character, openModal, setOpenCloseModal }: ModalProps) {
    const { mainColor, contrastColor } = useColorProps();
    const { borderRadius } = useDimensionsProps();

    const closeModal = () => {
        setOpenCloseModal(CLOSE);
    };

    return (
        <Style.Modal
            style={{ backgroundColor: mainColor, borderRadius, color: contrastColor }}
            title={character.name}
            visible={openModal}
            centered
            onCancel={closeModal}
            footer={
                <Style.Button color={contrastColor} type="text" key="back" onClick={closeModal}>
                    Return
                </Style.Button>
            }
        >
            <Style.Image src={character.image} mainColor={mainColor} borderRadius={borderRadius} />
            <Style.Subtitle>Aparição nos episódios:</Style.Subtitle>
            {character.episode.map((ep) => (
                <Style.Episode key={ep.id}>-&nbsp;{ep.name}</Style.Episode>
            ))}
        </Style.Modal>
    );
}

export default CharacterModal;
