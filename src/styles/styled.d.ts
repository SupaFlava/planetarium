import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      txtColor: string;
      bgColor: string;
      mercuryColor: string;
      venusColor: string;
      earthColor: string;
      marsColor: string;
      jupiterColor: string;
      saturnColor: string;
      uranusColor: string;
      neptuneColor: string;
    };
    fonts: {
      headingFont: string;
      textFont: string;
    };
  }
  logo: {
    src: string;
  }
}
