import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      txtColor: string;
      bgColor: string;
      mercury: string;
      venus: string;
      earth: string;
      mars: string;
      jupiter: string;
      saturn: string;
      uranus: string;
      neptune: string;
    };
    fonts: {
      headingFont: string;
      textFont: string;
    };
  }
  logo: {
    src: string;
  }
  export type Tcolor = keyof DefaultTheme["colors"];
}
