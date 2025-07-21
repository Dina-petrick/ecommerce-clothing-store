import React, {useContext, useEffect} from 'react'
import { AuthenticationContainer } from './authentication.style';
import { useNavigate } from 'react-router-dom';

import SignUpForm from '../../components/sign-up-form/signUpForm.component';
import SignInForm from '../../components/sign-in-form/signInForm.component';

import { UserContext } from "../../context/UserProvider.context";


const Authentication = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);

useEffect(() => {
  if (currentUser) {
    navigate('/');
  }
}, [currentUser, navigate]);

  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  )
}

export default Authentication;