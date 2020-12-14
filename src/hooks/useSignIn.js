import { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { AUTHORIZE } from '../graphql/mutations';
import { useApolloClient } from '@apollo/client';

import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignIn = () => {
    const authStorage = useContext(AuthStorageContext);
    const apolloClient = useApolloClient();
    const [mutate, result] = useMutation(AUTHORIZE);

    const signIn = async ({ username, password }) => {
        const { data } = await mutate({
            variables: {
                credentials: {
                    username: username, 
                    password: password,
                }
            }
        });
        await authStorage.setAccessToken(data.authorize.accessToken);
        apolloClient.resetStore();
        return data;
    };

    return [signIn, result];
};

export default useSignIn;