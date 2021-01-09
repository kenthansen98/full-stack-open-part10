import { useMutation } from '@apollo/react-hooks';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW);

    const createReview = async ({ owner, name, rating, review }) => {
        const { data } = await mutate({
            variables: {
                review: {
                    repositoryName: name,
                    ownerName: owner,
                    rating: parseInt(rating), 
                    text: review,
                }
            }
        });
        return data;
    };

    return [createReview, result];
};

export default useCreateReview;