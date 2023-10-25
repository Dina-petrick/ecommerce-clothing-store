import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5MwqQcaBwH-kT5BqxIwIMmOhI-AmCp80",
  authDomain: "clothing-store-db-1be1e.firebaseapp.com",
  projectId: "clothing-store-db-1be1e",
  storageBucket: "clothing-store-db-1be1e.appspot.com",
  messagingSenderId: "298671613522",
  appId: "1:298671613522:web:c0a2fc1b1cefedf7ebe18b",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const snapShot = await getDoc(userDocRef);
  console.log(snapShot);
};
