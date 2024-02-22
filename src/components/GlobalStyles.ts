import { createGlobalStyle } from "styled-components";

interface globalProps {
  backgroundColor: string;
  fontFamily: string;
}

const GlobalStyles = createGlobalStyle<globalProps>`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: ${(props) => props.backgroundColor};
        font-family: ${(props) => props.fontFamily};
    }
`;

export default GlobalStyles;
