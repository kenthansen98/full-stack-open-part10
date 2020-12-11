import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
    flexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15,
    },
    flexItem: {
        alignSelf: 'center',
    }
});

const ItemStats = ({ stars, forks, reviews, ratings }) => {
    const convertNum = (num) => {
        return num > 1000 ? `${(num / 1000).toFixed(1)}k` : num;
    };

    return(
        <View style={styles.flexContainer}>
            <View>
                <Text fontWeight='bold' style={styles.flexItem}>{convertNum(stars)}</Text>
                <Text color='textSecondary'>Stars</Text>
            </View>
            <View>
                <Text fontWeight='bold' style={styles.flexItem}>{convertNum(forks)}</Text>
                <Text color='textSecondary'>Forks</Text>
            </View>
            <View>
                <Text fontWeight='bold' style={styles.flexItem}>{reviews}</Text>
                <Text color='textSecondary'>Reviews</Text>
            </View>
            <View>
                <Text fontWeight='bold' style={styles.flexItem}>{ratings}</Text>
                <Text color='textSecondary'>Rating</Text>
            </View>
        </View>
    );
};

export default ItemStats;