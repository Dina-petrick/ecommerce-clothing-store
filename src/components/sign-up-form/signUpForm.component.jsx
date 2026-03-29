import React, { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import { getAuthErrorMessage } from '../../utils/auth-error-messages';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { SignUpContainer } from './signUpForm.style';

const SignUpForm = () => {
  const [formError, setFormError] = useState('');

  const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [fieldForm, setFieldForm] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = fieldForm;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFieldForm({ ...fieldForm, [name]: value });
  };

  const resetFormField = () => {
    setFieldForm(defaultFormField);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    if (password !== confirmPassword) {
      setFormError('Passwords do not match.');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormField();
    } catch (error) {
      setFormError(getAuthErrorMessage(error));
    }
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      {formError ? (
        <p role="alert" style={{ color: 'coral', marginTop: '10px' }}>
          {formError}
        </p>
      ) : null}
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
