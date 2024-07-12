import { React, Fragment } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { ReactComponent as LogoIcon } from '../../assets/crown.svg';

import { CartIcon } from '../../components/cart-icon/cart-icon.component';
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../store/user/user.selector.js';

import {
  LogoContainer,
  LogoNameWrapper,
  NavigationContainer,
  NavLinks,
  NavLink,
} from './navigation.styles.jsx';

export const Navigation = () => {
  // useSelector goes into redux and gets the deeply nested state we want
  // useSelector are functions that takes state and return the value nested
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser();
    navigate('/auth');
    console.log('I AM SIGNED OUT', signOutUser);
  };

  const getDisplayName = () => {
    if (!currentUser) return;
    const userName = currentUser.displayName;
    if (!userName) return;
    const splitName = userName.split(' ')[0];
    return splitName;
  };
  const showDisplayName = getDisplayName();

  const getTime = () => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      return 'Good morning';
    } else if (currentHour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };

  const greeting = getTime();

  return (
    <Fragment>
      <NavigationContainer>
        <LogoNameWrapper>
          <LogoContainer to="/">
            <LogoIcon className="logo" />
          </LogoContainer>

          {currentUser && (
            <h3>{`${greeting}, ${currentUser ? showDisplayName : ''}`}</h3>
          )}
        </LogoNameWrapper>

        <NavLinks>
          {currentUser ? (
            <NavLink to="/shop">shop</NavLink>
          ) : (
            <NavLink to="/auth">shop</NavLink>
          )}

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
