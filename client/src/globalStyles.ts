import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary}, Sans-Serif;
    color: ${({ theme }) => theme.colors.black};
    overflow: hidden;
    background: ${({ theme }) => theme.colors.darkGrey}
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    font-weight: 600;
  }

  a {
      text-decoration: none;
  }

  a:link {
    color: inherit;
    text-decoration: none;
  }

  a:visited {
    color: inherit;
    text-decoration: none;
  }
  
  button { 
    font-family: ${({ theme }) => theme.fonts.primary}, Sans-Serif;
  }
  
  textarea {
    font-family: ${({ theme }) => theme.fonts.primary}, Sans-Serif;
  }
`;
