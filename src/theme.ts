import { Theme } from "./styles";

interface planetColorsProps {
  [key: string]: string;
}

export const theme: Theme = {
  styles: {
    pallete: {
      white: "#FFFFFF",
      backgroundBlue: "#070724",
      arsenic: "#38384F",
      romanSilver: "#838391",
      moonstone: "#419EBB",
      indianYellow: "#EDA249",
      blueViolet: "#6f2ed6",
      cinnabar: "#D14C32",
      cgRed: "#D83A34",
      flame: "#CD5120",
      lightSeaGreen: "#1ec2a4",
      ultramarineBlue: "#2d68f0",
      hoverColor: "#d8d8d833",
    },
    planetIcons: {
      mercuryIcon: "#DEF4FC",
      venusIcon: "#F7CC7F",
      earthIcon: "#545BFE",
      marsIcon: "#FF6A45",
      jupiterIcon: "#ECAD7A",
      saturnIcon: "#FCCB6B",
      uranusIcon: "#65F0D5",
      neptuneIcon: "#497EFA",
    },
    fonts: {
      spartanFont: "'League Spartan', sans-serif",
      antonioFont: "'Antonio', sans-serif",
    },
    specialPallete: {
      mercury: "#419EBB",
      venus: "#EDA249",
      earth: "#6f2ed6",
      mars: "#D14C32",
      jupiter: "#D83A34",
      saturn: "#CD5120",
      uranus: "#1ec2a4",
      neptune: "#2d68f0",
    },
  },
};

export const planetColors: planetColorsProps = {
  Mercury: theme.styles.planetIcons.mercuryIcon,
  Venus: theme.styles.planetIcons.venusIcon,
  Earth: theme.styles.planetIcons.earthIcon,
  Mars: theme.styles.planetIcons.marsIcon,
  Jupiter: theme.styles.planetIcons.jupiterIcon,
  Saturn: theme.styles.planetIcons.saturnIcon,
  Uranus: theme.styles.planetIcons.uranusIcon,
  Neptune: theme.styles.planetIcons.neptuneIcon,
};
