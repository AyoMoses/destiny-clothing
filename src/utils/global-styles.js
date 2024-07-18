import styled from 'styled-components';
import createGlobalStyle from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.fontCol}
  }

  
  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  button {
    font-family: 'Lato', sans-serif;
  }

`;
export const SkeletonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;
