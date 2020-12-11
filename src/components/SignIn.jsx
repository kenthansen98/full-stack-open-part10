import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';   

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: theme.colors.itemBackground,
        padding: 15,
    },
    field: {
        borderWidth: 1,
        borderColor: theme.colors.background,
        borderRadius: 5,
        width: 350,
        padding: 15,
        marginBottom: 10,
    },
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

const initialValues = {
    username: '',
    password: '',
};

const SignInForm = ({ onSubmit }) => {
    return(
        <View style={styles.container}>
            <FormikTextInput name="username" placeholder="Username" style={styles.field}/>
            <FormikTextInput name="password" placeholder="Password" secureTextEntry style={styles.field} />
            <TouchableWithoutFeedback onPress={onSubmit}>
                <View style={styles.button}>
                    <Text color='tab' style={styles.buttonText}>Submit</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required'),
    password: yup
        .string()
        .required('Password is required'),
});

const SignIn = () => {
    const onSubmit = values => {
        console.log(values);
    };

    return (
        <Formik 
            initialValues={initialValues} 
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({handleSubmit}) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;