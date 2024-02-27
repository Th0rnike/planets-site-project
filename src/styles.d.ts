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
    };
    planetIcons: {
      mercuryIcon: string;
      venusIcon: string;
      earthIcon: string;
      marsIcon: string;
      jupiterIcon: string;
      saturnIcon: string;
      uranusIcon: string;
      naptuneIcon: string;
    };
    fonts: {
      spartanFont: string;
      antonioFont: string;
    };
  };
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
