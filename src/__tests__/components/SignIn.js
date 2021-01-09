import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { SignInContainer } from '../../components/SignIn';

describe('Sign In', () => {
    describe('SignInContainer', () => {
        it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
            const onSubmit = jest.fn();
            const { getByTestId } = render(<SignInContainer onSubmit={onSubmit} />);

            fireEvent.changeText(getByTestId("unameField"), "kalle");
            fireEvent.changeText(getByTestId("pwrdField"), "password");
            fireEvent.press(getByTestId("submit"));
            await waitFor(() => {
                expect(onSubmit).toHaveBeenCalledTimes(1);
                expect(onSubmit.mock.calls[0][0]).toEqual({
                    username: 'kalle',
                    password: 'password',
                });
            }); 
        });
    });
});