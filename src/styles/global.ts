import { createGlobalStyle } from "styled-components";

import starBackground from "../../public/assets/background-stars.svg";

export const GlobalStyles = createGlobalStyle`

  html, body {
    margin: 0;
    padding: 0;


  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  *{
        /* border: 1px solid red; */

  }
body{
     background-color:#070724;
     /* background-image: url(${starBackground}); */

 



}

`;
