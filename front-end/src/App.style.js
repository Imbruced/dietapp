import styled from "styled-components";
import { device } from "./utils/device";

export const StyledTemplateWrapper = styled.main`
  display: block;
  position: relative;
  min-height: 100vh;
  width: 100vw;
  @media ${device.laptop} {
    grid-area: main;
  }
`;
export const StyledAppWrapper = styled.div`
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 15% 85%;
    grid-template-rows: auto;
    grid-template-areas: "menu main";
  }
`;
