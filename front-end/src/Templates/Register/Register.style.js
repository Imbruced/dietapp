import styled from "styled-components";
import { device } from "../../utils/device";

export const LoginStyled = styled.section`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background-color: #97bf04;
  .login-header {
    margin: 2vh;
    height: 5vh;
    color: #f2f2f2;
    font-family: "DIN Alternate";
    font-size: 18px;
    @media ${device.tablet} {
      font-size: 36px;
    }
  }
`;
