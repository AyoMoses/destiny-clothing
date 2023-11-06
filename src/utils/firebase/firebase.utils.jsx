// this file involves more of tooling of how google wants their authentication set up

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

// we get firestore and the access to get doc from the document instance, then getDoc and setDoc do not mean what the method names are but getting and setting data from/to firestore. You get Doc with `doc` and set and get data on the doc with getDoc and setDoc. `doc` is a function that takes 3 arguements
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBh4MxyuHHrbPWozMPUV2IuA3WGsEr0sBE',
  authDomain: 'destiny-clothing-db.firebaseapp.com',
  projectId: 'destiny-clothing-db',
  storageBucket: 'destiny-clothing-db.appspot.com',
  messagingSenderId: '776300905559',
  appId: '1:776300905559:web:60547b0d866d02c8c1cf12',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// initialize a provider variable that gives an instance of the AuthProvider
// you can have multiple different types of provider doing different things i.e sign in
const provider = new GoogleAuthProvider();

// set custom parameter on provider. Takes custom objects
// we tell how we want the google auth provider to behave
// prompt: "select_account" anytime user interacts with provider, they are forced to select an account
provider.setCustomParameters({
  prompt: 'select_account',
});

// you only need one auth for an app cycle whereas multiple providers
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// we instantiate firestore and use it to access our DB. This simple instance allows us to tell firestore when we want to set or get data to/from our db
export const db = getFirestore();

// an async function that takes our authenticated user and sends it to be stored on firestore
export const createUserDocomentFromAuth = async (userAuth) => {
  // doc takes 3 arguements.
  // 1. is our database from firestore
  // 2. is our collection
  // 3. is our identifier to identiy the user which comes from the user object when signed in. uid
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // if user data does not exist
  // if it exists, the code below will not run since i have inverted with the ! which returns true if it does not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log(err.message, 'There was an error creating the user');
    }
  }

  // check if user data exists

  return userDocRef;

  // if it does exist, return user doc ref
};
