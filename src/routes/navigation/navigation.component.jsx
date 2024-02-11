import { React, Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { ReactComponent as LogoIcon } from '../../assets/crown.svg';

import { CartIcon } from '../../components/cart-icon/cart-icon.component';
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown.component';

import './navigation.styles.scss';

export const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const handleSignOut = () => {
    signOutUser();
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
            <span className="nav-link" onClick={handleSignOut}>
              sign out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              sign in
            </Link>
          )}

          <CartIcon />
        </div>

        <CartDropdown />
      </div>
      <Outlet />
    </Fragment>
  );
};
