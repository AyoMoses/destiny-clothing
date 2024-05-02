// this file involves more of tooling of how google wants their authentication set up

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

// we get firestore and the access to get doc from the document instance, then getDoc and setDoc do not mean what the method names are but getting and setting data from/to firestore. You get Doc with `doc` and set and get data on the doc with getDoc and setDoc. `doc` is a function that takes 3 arguements
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

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
// you can have multiple different types of provider doing different things i.e sign in with facebook, github, twitter etc. These are all providers
const googleProvider = new GoogleAuthProvider();

// set custom parameter on provider. Takes custom objects
// we tell how we want the google auth provider to behave
// prompt: "select_account" anytime user interacts with provider, they are forced to select an account
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

// you only need one auth for an app cycle whereas multiple providers
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// we instantiate firestore and use it to access our DB. This simple instance allows us to tell firestore when we want to set or get data to/from our db
export const db = getFirestore();

// PUSHING DATA TO FIRESTORE MANUALLY
export const AddCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('DONE!');
};

// GET THE DATA FROM FIRESTORE
export const getCatgoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');

  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);
  const categoryMap = querySnapShot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

// an async function that takes our authenticated user and sends it to be stored on firestore
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  // by protecting our code. If we get nothing, don't run the function. "Guard clause"
  if (!userAuth) return;

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
        ...additionalInformation,
      });
    } catch (err) {
      console.log(err.message, 'There was an error creating the user');
    }
  }

  // check if user data exists

  // if it does exist, return user doc ref
  return userDocRef;
};

// we are focusing on how to defend our code from security breaches
// I create an authenticated user inside of our firebase authentication
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  // if there are no email or password, exit immediately
  if (!email || !password) return;

  // i return the awaited value from this firebase method
  // bcos when this await authenticates, we want to see the returned value
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// the signOut() takes auth as its param then signs out the current user since firebase is keeping track
// we make this an async function to await the promise of whatever signout returns to us
export const signOutUser = async () => await signOut(auth);

// this method takes two params. 1. auth 2. callback to be called each time authState changes
// onAuthStateChanged observes for when user signs in and out. Auth changes and runs a callback
// is an open listener which means its waiting to know whether auth states are changing
// NOTE: You always have to tell the component using it to stop observing when it unmounts else it causes a memory leak
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
