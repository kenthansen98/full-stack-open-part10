import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
    flexContainer: {
        margin: 15,
        flexDirection: 'row',
        height: 75,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 15
    },
    language: {
        alignSelf: 'flex-start',
        backgroundColor: theme.colors.primary,
        borderRadius: 3,
        padding: 4,
    },
    descriptionFlex: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    description: {
        flexWrap: 'wrap',
        width: 320,
    },  
});

const ItemHeader = ({ url, fullName, description, language }) => {
    return (
        <View style={styles.flexContainer}>
            <Image 
                style={styles.image}
                source={{uri: url}}
            />
            <View style={styles.descriptionFlex}>
                <Text fontWeight='bold' fontSize='subheading'>
                    {fullName}
                </Text>
                <Text color='textSecondary' fontSize='subheading' style={styles.description}>
                    {description}
                </Text>
                <View style={styles.language}>
                    <Text color='tab' fontSize='subheading'>
                        {language}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default ItemHeader;