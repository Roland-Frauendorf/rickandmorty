import styled from 'styled-components';
import { FontMainColorProp, MainColorProp, SecondaryColorProp } from './page.types';

const Window = styled.div<MainColorProp & FontMainColorProp>`
    height: 100vh;
    padding: 32px;
    background-color: ${(props) => props.mainColor};
    color: ${(props) => props.fontMainColor};
    font-family: 'Gotham', sans-serif;

    @media only screen and (max-device-width: 768px) {
        padding: 16px;
        padding-bottom: 24px;
    }
`;

const Container = styled.div<SecondaryColorProp>`
    padding: 32px;
    height: 100%;
    background-color: ${(props) => props.secondaryColor};
    border-radius: 8px;
    display: flex;
    flex-direction: column;

    @media only screen and (max-device-width: 768px) {
        padding: 16px;
    }
`;

const Header = styled.h1<FontMainColorProp>`
    color: ${(props) => props.fontMainColor};
    text-align: center;
    font-weight: bold;

    @media only screen and (max-device-width: 768px) {
        font-size: 1.5em;
    }
`;

const Content = styled.main`
    height: 100%;
    display: flex;
    flex-direction: column;
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
