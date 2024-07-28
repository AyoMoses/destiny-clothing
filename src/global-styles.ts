import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.font};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    color: ${theme.colors.fontCol};
    background-color: ${theme.colors.offWhite};
  }

  * {
    box-sizing: border-box;
 
  }

  a {
    text-decoration: none;
  }
`;
