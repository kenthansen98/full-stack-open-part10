import { gql } from 'apollo-boost';

export const AUTHORIZE = gql`
    mutation authorizeMutation($credentials: AuthorizeInput!) {
        authorize(credentials: $credentials) {
            accessToken
        }
    }
`;

export const CREATE_REVIEW = gql`
    mutation createReview($review: CreateReviewInput!) {
        createReview(review: $review) {
            repositoryId
        }
    }
`;

export const SIGN_UP = gql`
    mutation signUp($user: CreateUserInput!) {
        createUser(user: $user) {
            username
        }
    }
`;