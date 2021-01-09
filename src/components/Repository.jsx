import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { FlatList, StyleSheet, View } from 'react-native';
import { useParams } from 'react-router-native';
import { format } from 'date-fns';

import { GET_REPOSITORY } from '../graphql/queries';
import RepositoryItem from './RepositoryItem';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    container: {
        backgroundColor: theme.colors.itemBackground,
    },
    flexContainer: {
        flexDirection: 'row',
        margin: 15,
        height: 100,
    },
    rating: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 15,
        borderColor: theme.colors.primary,
        borderWidth: 2,
        justifyContent: 'center',
    },
    ratingNum: {
        alignSelf: 'center',
    },  
    reviewContainer: {
        //justifyContent: 'space-between',
        flexShrink: 1,
    },
    date: {
        marginBottom: 5,
    }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryInfo = ({ repository }) => {
    return <RepositoryItem item={repository} single />;
};

const ReviewItem = ({ review }) => {
    return (
        <View style={styles.container}>
            <View style={styles.flexContainer}>
                <View style={styles.rating}>
                    <Text color="primary" fontSize="subheading" fontWeight="bold" style={styles.ratingNum}>{review.rating}</Text>
                </View>
                <View style={styles.reviewContainer}>
                    <Text fontSize="subheading" fontWeight="bold" >{review.user.username}</Text>
                    <Text color="textSecondary" style={styles.date}>{format(new Date(review.createdAt), "dd.MM.yyyy")}</Text>
                    <Text>{review.text}</Text>
                </View>
            </View>
        </View>
    );
};

const Repository = () => {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_REPOSITORY, {
        fetchPolicy: 'cache-and-network',
        variables: { id },
    });
    if (loading) {
        return null;
    }
    const repository = data?.repository;
    const reviews = repository.reviews;
    const reviewNodes = reviews
        ? reviews.edges.map(edge => edge.node)
        : [];

    return (
        <FlatList
            data={reviewNodes}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={({ id }) => id}
            ItemSeparatorComponent={ItemSeparator}
            ListHeaderComponent={() => (
                <View>
                    <RepositoryInfo repository={repository} />
                    <ItemSeparator />
                </View>
            )}
        />
    );
};

export default Repository;