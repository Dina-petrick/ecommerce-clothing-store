import React, { useState } from 'react'
import { signInWithGooglePopup} from '../../utils/firebase/firebase.utils';
import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';


import FormInput from '../form-input/form-input.component';
import { SignInContainer, ButtonsContainer } from './signInForm.style';
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"


const SignInForm = () => {


  const signInWithGoogle = async () => {
    try{
    await signInWithGooglePopup();
    }catch(error){
      if(error.message === "auth/popup-closed-by-user"){
        console.log("auth/popup-closed-by-user");
      }
      console.log("error" , error.message);
    }
  }

  const defaultFormField = {
    email: '',
    password: '',
  }

  const [fieldForm, setFieldForm] = useState(defaultFormField);
  const {email, password} = fieldForm;

  const handleChange = (e) => {
    let {name, value} = e.target;
    setFieldForm({...fieldForm, [name] : value} )
  }

  const resetFormField = () => {
    setFieldForm(defaultFormField);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
      let user = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(user)
      resetFormField();
    }
    catch(error){
      console.log(error.message)
    }
  }

  return(
    <SignInContainer>
    <h2>Already have an account?</h2>
    <span>Sign in with your email and password</span>
    <form onSubmit={handleSubmit}>
      <FormInput
        label='Email'
        type='email'
        required
        onChange={handleChange}
        name='email'
        value={email}
      />

      <FormInput
        label='Password'
        type='password'
        required
        onChange={handleChange}
        name='password'
        value={password}
      />
      <ButtonsContainer>
        <Button type='submit'>Sign In</Button>
        <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
          Google sign in
        </Button>
      </ButtonsContainer>
    </form>
  </SignInContainer>
  )
}


export default SignInForm;