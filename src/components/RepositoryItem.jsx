import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

import ItemHeader from './ItemHeader';
import ItemStats from './ItemStats';
import theme from '../theme';
import Text from './Text';
import { Link } from 'react-router-native';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.itemBackground,
    },
    button: {
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        width: 350,
        padding: 15,
        alignSelf: 'center',
        marginBottom: 15,
    },
    buttonText: {
        alignSelf: 'center',
    }
});

const RepositoryItem = ({ item, single }) => {
    const onPress = () => {
        Linking.openURL(item.url);
    };

    return (
        <Link to={`/repository/${item.id}`} component={TouchableOpacity}>
            <View style={styles.container}>
                <ItemHeader
                    url={item.ownerAvatarUrl}
                    fullName={item.fullName}
                    description={item.description}
                    language={item.language}
                />
                <ItemStats
                    stars={item.stargazersCount}
                    forks={item.forksCount}
                    reviews={item.reviewCount}
                    ratings={item.ratingAverage}
                />
                {single ? (
                    <TouchableWithoutFeedback onPress={onPress}>
                        <View style={styles.button}>
                            <Text color='tab' style={styles.buttonText}>Open in Github</Text>
                        </View>
                    </TouchableWithoutFeedback>)
                    : null}
            </View>
        </Link>
    );
};

export default RepositoryItem;