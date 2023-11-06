import React from 'react';
import {
  signInWithGooglePopup,
  createUserDocomentFromAuth,
} from '../../utils/firebase/firebase.utils';

import './sign-in.styles.scss';

export const SignIn = () => {
  // any call made to a database is asynchronous
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocomentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In page!</h1>
      <button onClick={logGoogleUser}>sign in with google popup</button>
    </div>
  );
};
