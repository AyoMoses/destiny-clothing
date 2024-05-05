import { React, Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { ReactComponent as LogoIcon } from '../../assets/crown.svg';

import { CartIcon } from '../../components/cart-icon/cart-icon.component';
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown.component';

import {
  LogoContainer,
  NavigationContainer,
  NavLinks,
  NavLink,
} from './navigation.styles.jsx';

export const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const handleSignOut = () => {
    signOutUser();
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <LogoIcon className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">shop</NavLink>

          {currentUser ? (
            // render the navLink as a span
            <NavLink as="span" onClick={handleSignOut}>
              sign out
            </NavLink>
          ) : (
            <NavLink to="/auth">sign in</NavLink>
          )}

          <CartIcon />
        </NavLinks>

        <CartDropdown />
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
