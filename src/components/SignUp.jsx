import React from 'react';
import { Formik } from 'formik';
import { View, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';
import * as yup from 'yup';

import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import theme from '../theme';
import Button from './Button';
import FormikTextInput from './FormikTextInput';

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
    passwordConfirm: '',
};

const SignUpForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput name="username" placeholder="Username" style={styles.field} />
            <FormikTextInput name="password" secureTextEntry placeholder="Password" style={styles.field} />
            <FormikTextInput name="passwordConfirm" secureTextEntry placeholder="Password confirmation" style={styles.field} />
            <Button text="Sign up" onSubmit={onSubmit}/>
        </View>
    );
};

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(1, "Username must have 1 or more characters")
        .max(30, "Username must have fewer than 30 charaters")
        .required("Username is required"),
    password: yup
        .string()
        .min(5, "Password must have 5 or more characters")
        .max(50, "Password must have fewer than 50 characters")
        .required("Password is required"),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Password does not match')
        .required('Password confirmation is required'),
});

const SignUp = () => {
    const [signUp] = useSignUp();
    const [signIn] = useSignIn();
    const history = useHistory();

    const onSubmit = async (values) => {
        const { username, password } = values;
        try {
            const { data } = await signUp({username, password});
            console.log(data);
            await signIn({username, password});
            history.push("/");
        } catch(e) {
            console.log(e);
        }
    };

    return(
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignUp;