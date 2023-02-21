import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(p) => p.theme.fonts.main};
    /* padding: 10px; */
    margin: 0 auto;
  }
  
`;

export default GlobalStyle;
