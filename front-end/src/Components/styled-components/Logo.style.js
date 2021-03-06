import styled from "styled-components";
import { device } from "../../utils/device";

export const LogoStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3vh auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  @media ${device.laptop} {
    z-index: 999;
  }
`;
