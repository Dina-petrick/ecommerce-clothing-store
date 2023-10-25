import React, { Fragment } from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';


const SignIn = () => {

  const logGoogleUser = async() => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);

    console.log(userDocRef);
  }

  return (
    <Fragment>
          <div>SignIn</div>
          <button onClick={logGoogleUser}>signIn with pop up</button>
    </Fragment>
  )
}

export default SignIn;