export interface colorProps {
  colors: {
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
}

export interface planetProps {
  planetData: {
    name: string;
    overview: {
      content: string;
      source: string;
    };
    structure: {
      content: string;
      source: string;
    };
    geology: {
      content: string;
      source: string;
    };
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
    // images: {};
  }[];
}
