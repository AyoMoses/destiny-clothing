// this file involves more of tooling of how google wants their authentication set up

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

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
