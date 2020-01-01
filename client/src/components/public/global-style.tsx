import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  #root {
    width: 100%;
    height: 100%;
    overflow: auto;
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active  {
        -webkit-box-shadow: 0 0 0 30px white inset !important;
    }
  }
`;

export default GlobalStyle;
