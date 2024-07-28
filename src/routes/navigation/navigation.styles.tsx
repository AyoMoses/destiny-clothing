import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 768px) {
    height: 60px;
    padding: 10px 20px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 768px) {
    width: auto;
    padding: 0;
  }
`;

export const LogoNameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5rem;

  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
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

  @media screen and (max-width: 768px) {
    width: auto;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    padding: 5px 10px;
    font-size: 1rem;
  }
`;

export const SignOut = styled.span`
  padding: 10px 15px;
  cursor: pointer;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    padding: 5px 10px;
    font-size: 1rem;
  }
`;
