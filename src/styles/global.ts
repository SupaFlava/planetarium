import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
      background:url(../assets/background-stars.svg);


  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
body{
  

  background-color:#070724;
  
 

    height: 100vh;



}

`;
