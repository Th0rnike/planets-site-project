import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: ${({ theme }) => theme.styles.pallete.backgroundBlue};
        font-family: ${({ theme }) => theme.styles.fonts.spartanFont};
    }
`;

export default GlobalStyles;
