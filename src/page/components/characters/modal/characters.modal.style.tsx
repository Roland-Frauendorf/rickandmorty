import styled from 'styled-components';
import { ModalProps } from 'antd/lib/modal/Modal';
import { ButtonProps } from 'antd/lib/button/button';
import { Modal as AntdModal, Button as AntdButton } from 'antd';
import React from 'react';
import { BorderRadiusProp, MainColorProp } from '../../../page.types';

const Modal: React.FC<ModalProps> = styled(AntdModal)`
    border-radius: ${(props) => props.style?.backgroundColor};
    .ant-modal-content {
        border-radius: ${(props) => props.style?.borderRadius};
        background-color: ${(props) => props.style?.backgroundColor};

        .ant-modal-close {
            color: ${(props) => props.style?.color};
        }

        .ant-modal-header {
            background-color: ${(props) => props.style?.backgroundColor};
            border-top-left-radius: ${(props) => props.style?.borderRadius};
            border-top-right-radius: ${(props) => props.style?.borderRadius};
            border-bottom: 0;
            text-align: center;

            .ant-modal-title {
                font-weight: bold;
                color: ${(props) => props.style?.color};
                font-size: 24px;
            }
        }

        .ant-modal-body {
            background-color: ${(props) => props.style?.backgroundColor};
            color: ${(props) => props.style?.color};
            overflow: auto;
            max-height: 600px;
            display: flex;
            flex-wrap: wrap;
            flex-flow: column;
            font-size: 16px;
            font-weight: bolder;

            // Firefox
            & {
                scrollbar-width: 20px;
                scrollbar-color: white rgb(50, 50, 50);
            }

            // Others
            &::-webkit-scrollbar {
                width: 20px;
            }
            &::-webkit-scrollbar-track {
                background: rgb(50, 50, 50);
            }
            &::-webkit-scrollbar-thumb {
                background-color: white;
                border-radius: 20px;
                border: 6px solid transparent;
                background-clip: content-box;
            }

            @media only screen and (max-device-height: 768px) {
                max-height: 400px;
            }
        }

        .ant-modal-footer {
            border-top: 0;
        }
    }
`;

const Button: React.FC<ButtonProps> = styled(AntdButton)`
    color: ${(props) => props.color};

    :hover {
        color: ${(props) => props.color};
    }
`;

const Image = styled.img<MainColorProp & BorderRadiusProp>`
    margin-bottom: 40px;
    max-width: 200px;
    background-color: ${(props) => props.mainColor};
    border-radius: ${(props) => props.borderRadius};
    align-self: center;
`;

const Subtitle = styled.div`
    margin-bottom: 4px;
    font-size: 18px;
    font-weight: bold;
`;

const Episode = styled.div``;

export default { Modal, Button, Image, Episode, Subtitle };
