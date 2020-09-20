import styled, { css } from "styled-components";
import { device } from "../../utils/device";

export const StyledBackButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  div {
    display: flex;
    bottom: 10vh;
    width: 100vw;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    font-size: 20px;
    font-family: "Beirut";
    color: #707070;
    img {
      display: block;
      margin: 5px;
      width: 32px;
      height: 32px;
    }
  }
`;

export const StyledButton = styled.div`
  ${({ menuButton }) =>
    menuButton &&
    css`
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 2vh 0;
      padding: 1vh 3vw;
      font-weight: bold;
      font-family: sans-serif;
      width: 90%;
      height: 36px;
      background-color: #ffffff;
      border-radius: 10px;
      color: #707070;
      box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.08);
      @media ${device.tablet} {
        padding: 1vh 1vw;
      }
    `}
`;
