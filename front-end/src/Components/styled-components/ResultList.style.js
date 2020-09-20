import { device } from "../../utils/device";
import styled from "styled-components";

export const ResultListWrapperStyled = styled.section`
  display: block;
  position: relative;
  border-style: solid;
  border-width: 0 100vw 40vh 0;
  border-color: transparent #97bf04 transparent transparent;
`;

export const ResultListStyled = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: -10vh;
  margin: 0 5vw;
  width: 90vw;
  background-color: #ffffff;
  padding: 15px 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  @media ${device.laptop} {
    left: 5vw;
    width: 65vw;
  }
`;
export const ResultStyled = styled.div`
  display: flex;
  flex-direction: row;
  a {
    max-width: 75%;
  }
  p {
    max-width: 100%;
    color: #97bf04;
  }
  img {
    margin: 10px;
    color: #97bf04;
  }
`;
