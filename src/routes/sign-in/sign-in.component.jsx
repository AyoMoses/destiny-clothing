import React from 'react';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

import './sign-in.styles.scss';

export const SignIn = () => {
  // any call made to a database is asynchronous
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>Sign In page!</h1>
      <button onClick={logGoogleUser}>sign in with google popup</button>
    </div>
  );
};
