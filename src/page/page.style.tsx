import styled from 'styled-components';
import { PageColorProps } from './page.types';

const Window = styled.div<PageColorProps>`
    height: 100vh;
    padding: 16px;
    background-color: ${(props) => props.mainColor};
    color: ${(props) => props.fontMainColor};
    font-family: 'Gotham', sans-serif;
`;

export default { Window };
