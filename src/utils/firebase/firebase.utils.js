import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAouCvhtYi1c-09iN_i4maBpMvsNi9gkHc",
  authDomain: "crwn-db-2a212.firebaseapp.com",
  projectId: "crwn-db-2a212",
  storageBucket: "crwn-db-2a212.appspot.com",
  messagingSenderId: "326158371539",
  appId: "1:326158371539:web:7abefb40421f074e3b6226"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalData = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try{
      await setDoc(userDocRef, { 
        displayName, 
        email, 
        createAt, 
        ...additionalData
      });
    }catch( error ){
      console.error('error creating user: ', error.message);
    }
  }

  return userDocRef;
}

export const createAuthUserWithMailAndPassword = async (email, password) => {
  if(!email || !password) return false;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithMailAndPassword = async (email, password) => {
  if(!email || !password) return false;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);