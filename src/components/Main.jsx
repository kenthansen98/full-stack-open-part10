import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import Repository from './Repository';
import CreateReview from './CreateReview';
import SignUp from './SignUp';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: theme.colors.background,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Switch>
                <Route path="/" exact>
                    <RepositoryList />
                </Route>
                <Route path="/signin">
                    <SignIn />
                </Route>
                <Route path="/repository/:id" exact>
                    <Repository />
                </Route>
                <Route path="/createreview">
                    <CreateReview />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Redirect to="/" />
            </Switch>
        </View>
    );
};

export default Main;