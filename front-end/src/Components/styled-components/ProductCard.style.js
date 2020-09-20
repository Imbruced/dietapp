import styled from "styled-components";

import { device } from "../../utils/device";

export const ProductCardWrapperStyled = styled.section`
  display: block;
  position: relative;
  border-style: solid;
  border-width: 0 100vw 40vh 0;
  border-color: transparent #97bf04 transparent transparent;
`;

export const ProductCardStyled = styled.div`
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
    width: 65vw;
  }
`;
export const ProductCardInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-bottom: 15px;
    color: #97bf04;
    text-align: center;
  }
  div {
    width: 80%;
    padding: 25px;
    border-top: 1px solid #f2f2f2;
  }
`;
