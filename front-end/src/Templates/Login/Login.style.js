import { device } from "../../utils/device";
import styled from "styled-components";

export const LoginStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #97bf04;
  .login-header {
    margin: 3vh;
    height: 5vh;
    color: #f2f2f2;
    font-family: "DIN Alternate";
    font-size: 18px;
    @media ${device.tablet} {
      font-size: 36px;
    }
  }
`;
