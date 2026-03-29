import React, { useState } from 'react';
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import { getAuthErrorMessage } from '../../utils/auth-error-messages';

import FormInput from '../form-input/form-input.component';
import { SignInContainer, ButtonsContainer } from './signInForm.style';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const SignInForm = () => {
  const [authError, setAuthError] = useState('');

  const signInWithGoogle = async () => {
    setAuthError('');
    try {
      await signInWithGooglePopup();
    } catch (error) {
      const message = getAuthErrorMessage(error);
      if (message) setAuthError(message);
    }
  };

  const defaultFormField = {
    email: '',
    password: '',
  };

  const [fieldForm, setFieldForm] = useState(defaultFormField);
  const { email, password } = fieldForm;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFieldForm({ ...fieldForm, [name]: value });
  };

  const resetFormField = () => {
    setFieldForm(defaultFormField);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAuthError('');

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormField();
    } catch (error) {
      setAuthError(getAuthErrorMessage(error));
    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      {authError ? (
        <p role="alert" style={{ color: 'coral', marginTop: '10px' }}>
          {authError}
        </p>
      ) : null}
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
