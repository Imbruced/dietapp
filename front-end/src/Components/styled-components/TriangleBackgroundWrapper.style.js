import styled from "styled-components";
import { device } from "../../utils/device";

export const StyledTriangleBackgroundWrapper = styled.section`
  display: flex;
  position: relative;
  width: 100vw;
  align-content: center;
  view {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    z-index: 1;
    border-style: solid;
    border-width: 0 100vw 40vh 0;
    border-color: transparent ${({ theme }) => theme.color.primary} transparent
      transparent;
    @media ${device.laptop} {
      border-width: 0 100vw 40vh 0;
    }
  }
`;
