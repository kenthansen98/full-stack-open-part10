import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';

import FormikTextInput from './FormikTextInput';
import theme from '../theme';   
import useSignIn from '../hooks/useSignIn';
import Button from './Button';

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
});

const initialValues = {
    username: '',
    password: '',
};

const SignInForm = ({ onSubmit }) => {
    return(
        <View style={styles.container}>
            <FormikTextInput name="username" placeholder="Username" style={styles.field} testID="unameField" />
            <FormikTextInput name="password" placeholder="Password" secureTextEntry style={styles.field} testID="pwrdField" />
            <Button text="Submit" onSubmit={onSubmit} />
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

export const SignInContainer = ({ onSubmit }) => {
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

const SignIn = () => {
    const [signIn] = useSignIn();
    const history = useHistory();

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            const { data } = await signIn({username, password});
            console.log(data);
            history.push("/");
        } catch(e) {
            console.log(e);
        }
    };

    return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;