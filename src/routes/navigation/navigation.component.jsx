import { React, Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { ReactComponent as LogoIcon } from '../../assets/crown.svg';

import './navigation.styles.scss';

export const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);

  const signOutHandler = async () => {
    // this should return undefined to show it works
    // console.log(res); by adding it as a declaration of res to the await we get from signOut
    await signOutUser();

    // I proceed to set my current user to null in the context to let context know we are signed out from firebase
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <LogoIcon className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            shop
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              sign out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              sign in
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
