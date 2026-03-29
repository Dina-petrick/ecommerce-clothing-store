import React, { useContext, useEffect } from 'react';
import { AuthenticationContainer } from './authentication.style';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

import SignUpForm from '../../components/sign-up-form/signUpForm.component';
import SignInForm from '../../components/sign-in-form/signInForm.component';

import { UserContext } from '../../context/UserProvider.context';

const Authentication = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { currentUser } = useContext(UserContext);

  const redirectParam = searchParams.get('redirect');
  const safeRedirect =
    redirectParam &&
    redirectParam.startsWith('/') &&
    !redirectParam.startsWith('//')
      ? redirectParam
      : null;

  const fromPath =
    location.state?.from?.pathname || safeRedirect || '/';

  useEffect(() => {
    if (currentUser) {
      navigate(fromPath, { replace: true });
    }
  }, [currentUser, navigate, fromPath]);

  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
