import { takeLatest, all, call, put } from 'redux-saga/effects';
import { USER_ACTION_TYPES } from './user.types';
import { signInSuccess, signInFailed } from './user.action';
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';
import { getDoc } from 'firebase/firestore';

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userDocRef = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );
    const userSnapshot = yield call(getDoc, userDocRef);
    console.log('User Snapshot:', userSnapshot);

    if (!userSnapshot.exists) {
      console.error('User snapshot does not exist');
      throw new Error('User snapshot does not exist');
    }

    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    console.error('getSnapshotFromUserAuth error:', error);
    yield put(signInFailed(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGoogleRedirect);
    console.log('Google Sign In User:', user);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    console.error('signInWithGoogle error:', error);
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    console.log('User Auth:', userAuth);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    console.error('isUserAuthenticated error:', error);
    yield put(signInFailed(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([call(onCheckUserSession), call(onGoogleSignInStart)]);
}
