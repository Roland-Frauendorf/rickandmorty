import styled from 'styled-components';
import { FontMainColorProp, MainColorProp, SecondaryColorProp } from './page.types';

const Window = styled.div<MainColorProp & FontMainColorProp>`
    height: 100vh;
    padding: 16px;
    background-color: ${(props) => props.mainColor};
    color: ${(props) => props.fontMainColor};
    font-family: 'Gotham', sans-serif;
`;

const Container = styled.div<SecondaryColorProp>`
    padding: 16px;
    height: 100%;
    background-color: ${(props) => props.secondaryColor};
    border-radius: 8px;
`;

const Header = styled.h1<FontMainColorProp>`
    color: ${(props) => props.fontMainColor};
    text-align: center;
    font-weight: bold;
`;

const Content = styled.main``;

const Footer = styled.footer`
    text-align: center;
`;

export default { Window, Container, Header, Content, Footer };
