import { createGlobalStyle } from "styled-components";

export const theme = {
  fontSize: {
    xsmall: "15px",
    small: "18px",
    normal: "20px",
    large: "25px",
    xlarge: "30px",
    xxlarge: "35px",
  },
  fontFamily: {
    ff1: "DIN Alternate",
    ff2: "Courier",
    ff3: "Beirut",
  },
  color: {
    primary: "#97BF04",
    secondary: "#FFFFFF",
    gray: "#707070",
    lightGray: "#F2F2F2",
    black: "#000000",
  },
  shadow: {
    normal: "0 0 15px 0 rgba(0, 0, 0, 0.3);",
    focus: "0 0 18px 0 rgba(0, 0, 0, 0.6);",
  },
  borderRadius: {
    normal: "10px",
  },
};
export const GlobalStyle = createGlobalStyle`
      body{
        overflow-x: hidden;
        width:100vw;
}

    body, h1,h2,h3,h4,h5,h6{
        margin:0;
        padding:0;
        font-family: "Charter";
        font-weight: 100;
        font-style: italic;
        color: #323232;
    }
    *, *::before, *::after{
        box-sizing: border-box;   
        margin: 0;
        padding: 0; 
    }
    *:focus {
    outline: none;
}
a{    text-decoration: none;}
`;
