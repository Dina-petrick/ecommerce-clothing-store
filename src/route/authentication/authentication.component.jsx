import React from 'react'
import { AuthenticationContainer } from './authentication.style';

import SignUpForm from '../../components/sign-up-form/signUpForm.component';
import SignInForm from '../../components/sign-in-form/signInForm.component';


const Authentication = () => {
  return(
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  )
}

export default Authentication;