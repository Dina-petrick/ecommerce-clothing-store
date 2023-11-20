import React, { useState } from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import "./signInForm.style.scss";
import Button from "../button/button.component"


const SignInForm = () => {

  const signInWithGoogle = async () => {
    try{
      const {user} = await signInWithGooglePopup();
      const userDocumentReference = await createUserDocumentFromAuth(user);
      console.log(userDocumentReference);
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
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormField();
    }
    catch(error){
      console.log(error.message)
    }
  }

  return(
    <div className='sign-up-container'>
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
      <div className='buttons-container'>
        <Button type='submit'>Sign In</Button>
        <Button type='button' buttonType='google' onClick={signInWithGoogle}>
          Google sign in
        </Button>
      </div>
    </form>
  </div>
  )
}


export default SignInForm;