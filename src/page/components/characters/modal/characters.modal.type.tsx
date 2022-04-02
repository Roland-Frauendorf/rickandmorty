import React from 'react';
import { CharacterInfo } from '../../../../GraphQL/queries.types';

export type ModalProps = {
    character: CharacterInfo;
    openModal: boolean;
    setOpenCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
};
