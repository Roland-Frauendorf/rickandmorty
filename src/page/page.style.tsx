import styled from 'styled-components';
import {
    BorderRadiusProp,
    ContrastColorProp,
    MainColorProp,
    SecondaryColorProp,
} from './page.types';

const Window = styled.div<MainColorProp & ContrastColorProp>`
    height: 100vh;
    padding: 32px;
    background-color: ${(props) => props.mainColor};
    color: ${(props) => props.contrastColor};
    font-family: 'Gotham', sans-serif;

    @media only screen and (max-device-width: 768px) {
        padding: 16px;
        padding-bottom: 24px;
    }
`;

const Container = styled.div<SecondaryColorProp & BorderRadiusProp>`
    padding: 32px;
    height: 100%;
    background-color: ${(props) => props.secondaryColor};
    border-radius: ${(props) => props.borderRadius};
    display: flex;
    flex-direction: column;

    @media only screen and (max-device-width: 768px) {
        padding: 16px;
    }
`;

const Header = styled.h1<ContrastColorProp>`
    color: ${(props) => props.contrastColor};
    text-align: center;
    font-weight: bold;

    @media only screen and (max-device-width: 768px) {
        font-size: 1.5em;
    }
`;

const Content = styled.main<MainColorProp & ContrastColorProp>`
    overflow: auto;
    height: 100%;
    display: flex;
    flex-direction: column;

    // Firefox
    & {
        scrollbar-width: 20px;
        scrollbar-color: ${(props) => props.contrastColor} ${(props) => props.mainColor};
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
`;

const Footer = styled.footer`
    padding: 4px;
    text-align: center;
    margin-top: auto;

    @media only screen and (max-device-width: 768px) {
        font-size: 8px;
        padding: 5px;
    }
`;

export default { Window, Container, Header, Content, Footer };
