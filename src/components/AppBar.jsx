import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useQuery } from '@apollo/react-hooks';
import { useApolloClient } from '@apollo/client';

import AppBarTab from './AppBarTab';
import theme from '../theme';
import { AUTHORIZED_USER } from '../graphql/queries';
import AuthStorageContext from '../contexts/AuthStorageContext';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.appBarColor.backgroundColor,
        height: 75,
        flexDirection: 'row',
    },
});

const AppBar = () => {
    const authStorage = useContext(AuthStorageContext);
    const apolloClient = useApolloClient();

    const { data } = useQuery(AUTHORIZED_USER);
    const logout = async () => {
        await authStorage.removeAccessToken();
        apolloClient.resetStore();
    };

    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <AppBarTab title="Repositories" route="/" />
                {data?.authorizedUser
                    ? <AppBarTab title="Create a review" route="/createreview" />
                    : null
                }
                {data?.authorizedUser
                    ? <AppBarTab onPress={logout} title="Sign Out" route="/signin"/>
                    : <AppBarTab title="Sign in" route="/signin" />
                }
                {data?.authorizedUser
                    ? null
                    : <AppBarTab title="Sign up" route="/signup" />
                }
            </ScrollView>
        </View>
    );
};

export default AppBar;