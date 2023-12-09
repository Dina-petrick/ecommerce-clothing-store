import { initializeApp } from 'firebase/app';
import {doc, getFirestore, getDoc, setDoc  } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5MwqQcaBwH-kT5BqxIwIMmOhI-AmCp80",
  authDomain: "clothing-store-db-1be1e.firebaseapp.com",
  projectId: "clothing-store-db-1be1e",
  storageBucket: "clothing-store-db-1be1e.appspot.com",
  messagingSenderId: "298671613522",
  appId: "1:298671613522:web:c0a2fc1b1cefedf7ebe18b",
};


// Initialize Firebase
initializeApp(firebaseConfig);

//google auth provider
const googleProvider  = new GoogleAuthProvider();
//custom parameter
googleProvider.setCustomParameters({
  'prompt': 'select_account'
});
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();
const db = getFirestore();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const createUserDocumentFromAuth = async(userAuth, additionalInformation = {}) => {
    if(!userAuth) return;
    const userDocumentReference = doc(db, 'users', userAuth.uid);
    console.log(userDocumentReference);


    const userSnapShot = await getDoc(userDocumentReference);

    if(!userSnapShot.exists()){

      const {displayName, email} = userAuth;
      const createAt = new Date();

      try{
        await setDoc(userDocumentReference, {
          displayName,
          email,
          createAt,
          ...additionalInformation,
        });
      }
      catch(error){
        console.log('error creating the user', error.message)
      }
    }

    return userDocumentReference;
}

export const createAuthUserWithEmailAndPassword  = async(email, password) => {

  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}




export const signInAuthUserWithEmailAndPassword  = async(email, password) => {

  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callBack) => onAuthStateChanged(auth, callBack);