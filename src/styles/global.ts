import { createGlobalStyle } from "styled-components";

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
     background-image: url(/assets/background-stars.svg);
     
     
     
   
     
   @media (max-width: 765px) {
      max-width: 550px;
     margin: auto;
     }
@media (min-width: 766px) {
      max-width: 1000px;
     margin: auto;
     }
       @media (min-width: 1460px) {
      max-width: 1660px;
     margin: auto;
     }

 



}

`;
