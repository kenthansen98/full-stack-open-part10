import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
    field: {
        borderColor: theme.colors.error,
    },
});

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [
        style,
        error && styles.field,
    ];

    return <NativeTextInput style={textInputStyle} {...props}/>;
};

export default TextInput;