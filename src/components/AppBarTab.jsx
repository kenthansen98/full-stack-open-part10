import React from 'react';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import Text from'./Text';

const styles = StyleSheet.create({
    tab: {
        padding: 15,
        marginTop: 10,
    },
});

const AppBarTab = ({ onPress, title, route }) => {
    return (
        <Link to={route} onPress={onPress} component={TouchableWithoutFeedback}>
                <Text color='tab' fontWeight='bold' style={styles.tab}>{title}</Text>
        </Link>
    );
};

export default AppBarTab;