import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        width: 350,
        padding: 15,
    },
    buttonText: {
        alignSelf: 'center',
    }
});

const Button = ({ text, onSubmit }) => {
    return (
        <TouchableWithoutFeedback onPress={onSubmit}>
            <View style={styles.button}>
                <Text color='tab' style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Button;