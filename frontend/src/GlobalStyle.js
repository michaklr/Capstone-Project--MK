import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body {
    padding: 0.5px;
    padding-bottom: 60px;
    font-size: 100%;
    font-family: sans-serif;
  }
  
  button, input, select, textarea {
    font-size: 1em;
    font-family: inherit;
  }
`;
