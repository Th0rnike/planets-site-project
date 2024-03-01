export interface Theme {
  styles: {
    pallete: {
      white: string;
      backgroundBlue: string;
      arsenic: string;
      romanSilver: string;
      moonstone: string;
      indianYellow: string;
      blueViolet: string;
      cinnabar: string;
      cgRed: string;
      flame: string;
      lightSeaGreen: string;
      ultramarineBlue: string;
      hoverColor: string;
    };
    planetIcons: {
      mercuryIcon: string;
      venusIcon: string;
      earthIcon: string;
      marsIcon: string;
      jupiterIcon: string;
      saturnIcon: string;
      uranusIcon: string;
      neptuneIcon: string;
    };
    fonts: {
      spartanFont: string;
      antonioFont: string;
    };
    specialPallete: {
      mercury: string;
      venus: string;
      earth: string;
      mars: string;
      jupiter: string;
      saturn: string;
      uranus: string;
      neptune: string;
    };
  };
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
