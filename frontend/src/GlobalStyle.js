import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    box-sizing: border-box;
  }
  
  html {
  padding: 0.5px;
    font-size: 100%;
    padding-bottom: 45px;
  }
  
  body {
    padding: 0.5px;
   padding-bottom: 50px;
    font-size: 100%;
   
  }
  
  button, input, select, textarea {
    font-size: 1em;
    font-family: inherit;
   
  }
  
`;
