import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  body {
    font-family: 'Open Sans', sans-serif;
  }
`;

export default GlobalStyle;
