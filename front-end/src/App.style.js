import styled, { createGlobalStyle } from "styled-components";
import { device } from "./utils/device";
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

export const WrapperStyled = styled.main`
  display: block;
  position: relative;
  min-height: 100vh;
  @media ${device.laptop} {
    grid-area: main;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
  }
`;
export const DesktopWrapper = styled.div`
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 25% 85%;
    grid-template-rows: auto;
    grid-template-areas: "menu main";
  }
`;
