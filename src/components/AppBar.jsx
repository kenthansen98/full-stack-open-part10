import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.appBarColor.backgroundColor,
        height: 75,
        flexDirection: 'row',
    },
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <AppBarTab title="Repositories" route="/"/>
                <AppBarTab title="Sign in" route="/signin"/>
            </ScrollView>
        </View>
    );
};

export default AppBar;