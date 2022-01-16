import styled from 'styled-components';
import { BorderRadiusProp, ContrastColorProp, MainColorProp } from '../../../page.types';

const Container = styled.div<MainColorProp & BorderRadiusProp>`
    margin: 32px;
    padding: 32px;
    background-color: ${(props) => props.mainColor};
    max-width: 250px;
    border-radius: ${(props) => props.borderRadius};
    display: flex;
    flex-direction: column;

    @media only screen and (max-device-width: 768px) {
        width: 46%;
        margin: 2% auto;
        padding: 16px;
    }
`;

const Content = styled.div`
    cursor: pointer;
`;

const Image = styled.img<MainColorProp & BorderRadiusProp>`
    width: 100%;
    margin-bottom: 32px;
    background-color: ${(props) => props.mainColor};
    border-radius: ${(props) => props.borderRadius};

    @media only screen and (max-device-width: 768px) {
        margin-bottom: 16px;
    }
`;

const Info = styled.div<ContrastColorProp>`
    font-size: 24px;
    margin: auto 0;
    color: ${(props) => props.contrastColor};
    display: flex;
    flex-wrap: wrap;

    @media only screen and (max-device-width: 768px) {
        font-size: 16px;
    }

    .data-label {
        font-weight: bold;
    }
`;

export default { Container, Content, Image, Info };
