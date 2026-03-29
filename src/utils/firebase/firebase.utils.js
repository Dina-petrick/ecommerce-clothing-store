import { initializeApp } from 'firebase/app';
import {
  doc,
  getFirestore,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import SHOP_DATA from '../../shop-data';

const isTest = process.env.NODE_ENV === 'test';

/** Used when REACT_APP_* vars are unset (e.g. no .env.local, or dev server not restarted). Env always wins when set. */
const DEFAULT_FIREBASE_CONFIG = {
  apiKey: 'AIzaSyB5MwqQcaBwH-kT5BqxIwIMmOhI-AmCp80',
  authDomain: 'clothing-store-db-1be1e.firebaseapp.com',
  projectId: 'clothing-store-db-1be1e',
  storageBucket: 'clothing-store-db-1be1e.appspot.com',
  messagingSenderId: '298671613522',
  appId: '1:298671613522:web:c0a2fc1b1cefedf7ebe18b',
};

const fromEnv = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const firebaseConfig = isTest
  ? {
      apiKey: fromEnv.apiKey || 'test-api-key',
      authDomain: fromEnv.authDomain || 'test.firebaseapp.com',
      projectId: fromEnv.projectId || 'test-project',
      storageBucket: fromEnv.storageBucket || 'test.appspot.com',
      messagingSenderId: fromEnv.messagingSenderId || '123456789012',
      appId: fromEnv.appId || '1:123:web:abc123',
    }
  : {
      apiKey: fromEnv.apiKey || DEFAULT_FIREBASE_CONFIG.apiKey,
      authDomain: fromEnv.authDomain || DEFAULT_FIREBASE_CONFIG.authDomain,
      projectId: fromEnv.projectId || DEFAULT_FIREBASE_CONFIG.projectId,
      storageBucket:
        fromEnv.storageBucket || DEFAULT_FIREBASE_CONFIG.storageBucket,
      messagingSenderId:
        fromEnv.messagingSenderId || DEFAULT_FIREBASE_CONFIG.messagingSenderId,
      appId: fromEnv.appId || DEFAULT_FIREBASE_CONFIG.appId,
    };

initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

const auth = getAuth();
const db = getFirestore();

export const addCollectionAndDocument = async (collectionKey, objectToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

const mapFirestoreDocsToCategoryMap = (querySnapshot) =>
  querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    if (title && Array.isArray(items)) {
      acc[title.toLowerCase()] = items;
    }
    return acc;
  }, {});

const mapShopDataToCategoryMap = () =>
  SHOP_DATA.reduce((acc, cat) => {
    acc[cat.title.toLowerCase()] = cat.items;
    return acc;
  }, {});

/**
 * Loads categories from Firestore: tries `categories`, then legacy `catagories`.
 * If both are empty or reads fail (e.g. rules), uses local `shop-data.js`.
 */
export const getCategoriesAndDocument = async () => {
  for (const collectionName of ['categories', 'catagories']) {
    try {
      const collectionRef = collection(db, collectionName);
      const querySnapshot = await getDocs(query(collectionRef));
      if (querySnapshot.docs.length > 0) {
        const map = mapFirestoreDocsToCategoryMap(querySnapshot);
        if (Object.keys(map).length > 0) {
          return map;
        }
      }
    } catch {
      // Permission denied or network — try next source
    }
  }

  return mapShopDataToCategoryMap();
};

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocumentReference = doc(db, 'users', userAuth.uid);

  const userSnapShot = await getDoc(userDocumentReference);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocumentReference, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch {
      // User doc creation failed; auth user still exists — avoid noisy logs in production
    }
  }

  return userDocumentReference;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callBack) =>
  onAuthStateChanged(auth, callBack);
