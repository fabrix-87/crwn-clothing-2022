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

import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAouCvhtYi1c-09iN_i4maBpMvsNi9gkHc",
  authDomain: "crwn-db-2a212.firebaseapp.com",
  projectId: "crwn-db-2a212",
  storageBucket: "crwn-db-2a212.appspot.com",
  messagingSenderId: "326158371539",
  appId: "1:326158371539:web:7abefb40421f074e3b6226"
};

initializeApp(firebaseConfig);
//const firebaseApp = initializeApp(firebaseConfig);

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

export const getCategoriesAndProducts = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const categoryMap = querySnapshot.docs.reduce( (acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  },{})

  return categoryMap;
}


/* Aggiungere dati al db */
export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  //riferimento collezione
  const collectionRef = collection(db, collectionKey);

  // si crea un batch nel caso ci siano errori si torna indietro
  const batch = writeBatch(db);

  objectToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  // si fa il commit alla fine 
  await batch.commit();
  console.log('done');
}