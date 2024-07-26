import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const LogoNameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5rem;
`;

export const Greetings = styled.span`
  color: #140f2d;
`;
export const GreetingsInner = styled.span`
  color: #23b5d3;
  font-weight: 600;
`;

export const NavLinks = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-transform: uppercase;
`;

export const SignOut = styled.span`
  padding: 10px 15px;
  cursor: pointer;
  text-transform: uppercase;
`;
