import React from 'react';
import { View, StyleSheet } from 'react-native';

import ItemHeader from './ItemHeader';
import ItemStats from './ItemStats';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.itemBackground,
    },
});

const RepositoryItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <ItemHeader 
                url={item.ownerAvatarUrl} 
                fullName={item.fullName} 
                description={item.description} 
                language={item.language}
            />
            <ItemStats
                stars= {item.stargazersCount}
                forks= {item.forksCount}
                reviews= {item.reviewCount}
                ratings= {item.ratingAverage}
            />
        </View>
    );
};

export default RepositoryItem;