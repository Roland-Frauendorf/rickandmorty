import { gql } from '@apollo/client';

export const quantitiesInfoQuery = gql`
    query {
        characters {
            info {
                count
                pages
            }
        }
    }
`;

export const charactersInfoQuery = gql`
    query Characters($page: Int) {
        characters(page: $page) {
            results {
                id
                name
                image
                status
                episode {
                    name
                    id
                }
            }
        }
    }
`;
