import { gql } from 'apollo-boost';

export const AUTHORIZE = gql`
    mutation authorizeMutation($credentials: AuthorizeInput!) {
        authorize(credentials: $credentials) {
            accessToken
        }
    }
`;