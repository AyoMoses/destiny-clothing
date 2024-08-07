import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as LogoIcon } from '../../assets/crown.svg';

import { CartIcon } from '../../components/cart-icon/cart-icon.component';
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';

import {
  LogoContainer,
  LogoNameWrapper,
  NavigationContainer,
  NavLinks,
  NavLink,
  Greetings,
  GreetingsInner,
  SignOut,
} from './navigation.styles';

export const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!currentUser && location.pathname !== '/auth') {
      navigate('/auth');
    }
  }, [currentUser, navigate, location.pathname]);

  const signOutUser = () => {
    dispatch(signOutStart());
    navigate('/auth');
  };

  const getDisplayName = () => {
    if (!currentUser) return '';
    const userName = currentUser.displayName;
    if (!userName) return '';
    const splitName = userName.split(' ')[0];
    return splitName;
  };

  const getTime = () => {
    const newDate = new Date();
    const currentHour = newDate.getHours();

    if (currentHour < 12) {
      return 'Good morning';
    } else if (currentHour >= 12 && currentHour <= 17) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };

  const greeting = getTime();
  const showDisplayName = getDisplayName();

  return (
    <>
      <NavigationContainer>
        <LogoNameWrapper>
          <LogoContainer to="/">
            <LogoIcon className="logo" />
          </LogoContainer>
          {currentUser && (
            <Greetings>
              {`${greeting}, `}
              <GreetingsInner>{`${showDisplayName}`}</GreetingsInner>
            </Greetings>
          )}
        </LogoNameWrapper>

        <NavLinks>
          <NavLink to="/shop">shop</NavLink>
          {currentUser ? (
            <SignOut onClick={signOutUser}>sign out</SignOut>
          ) : (
            <NavLink to="/auth">sign in</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        <CartDropdown />
      </NavigationContainer>
      <Outlet />
    </>
  );
};
