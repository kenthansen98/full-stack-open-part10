import { Formik } from 'formik';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';
import * as yup from 'yup';

import useCreateReview from '../hooks/useCreateReview';
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
    owner: '',
    name: '',
    rating: '',
    review: '',
};

const ReviewForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput name="owner" placeholder="Repository owner name" style={styles.field} />
            <FormikTextInput name="name" placeholder="Repository name" style={styles.field} />
            <FormikTextInput name="rating" placeholder="Rating between 0 and 100" style={styles.field} />
            <FormikTextInput name="review" placeholder="Review" multiline style={styles.field} />
            <Button text="Create a review" onSubmit={onSubmit} />
        </View>
    );
};

const validationSchema = yup.object().shape({
    owner: yup
        .string()
        .required('Repository owner name is required'),
    name: yup
        .string()
        .required('Repository name is required'),
    rating: yup
        .number()
        .min(0, 'Rating must be 0 or greater')
        .max(100, 'Rating must be 100 or less')
        .required('Rating is required'),
    review: yup
        .string()
        .notRequired(),
});

const CreateReview = () => {
    const [createReview] = useCreateReview();
    const history = useHistory();

    const onSubmit = async (values) => {
        const { owner, name, rating, review } = values;
        try {
            const { data } = await createReview({owner, name, rating, review});
            console.log(data);
            history.push(`/repository/${data.createReview.repositoryId}`);
        } catch(e) {
            console.log(e);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default CreateReview;