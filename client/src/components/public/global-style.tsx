import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  #root {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
`;

export default GlobalStyle;
