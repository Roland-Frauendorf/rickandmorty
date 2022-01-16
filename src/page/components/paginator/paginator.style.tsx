import styled from 'styled-components';
import { ContrastColorProp } from '../../page.types';

const Container = styled.div<ContrastColorProp>`
    margin-top: auto;
    margin-bottom: 16px;
    display: flex;

    .ant-pagination {
        color: ${(props) => props.contrastColor};
    }

    .ant-pagination-options-quick-jumper {
        font-size: medium;
    }

    .ant-pagination-total-text {
        font-size: medium;
    }

    .ant-pagination-item-ellipsis {
        color: ${(props) => props.contrastColor} !important;
    }

    @media only screen and (max-device-width: 768px) {
        margin: auto 2% 16px 2%;
    }
`;

const Content = styled.div`
    margin-right: auto;
    margin-left: auto;

    @media only screen and (max-device-width: 768px) {
        li {
            margin-top: 8px;
        }
    }
`;

export default { Container, Content };
