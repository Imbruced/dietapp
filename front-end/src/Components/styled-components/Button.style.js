import styled, { css } from "styled-components";
import { device } from "../../utils/device";

export const StyledBackButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 0 auto;
  z-index: 9999;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-family: ${({ theme }) => theme.fontFamily.ff3};
  color: ${({ theme }) => theme.color.gray};
  img {
    display: block;
    margin: 5px;
    width: 32px;
    height: 32px;
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
      font-family: ${({ theme }) => theme.fontFamily.ff1};
      width: 90%;
      height: 36px;
      background-color: ${({ theme }) => theme.color.secondary};
      border-radius: ${({ theme }) => theme.borderRadius.normal};
      color: ${({ theme }) => theme.color.gray};
      box-shadow: ${({ theme }) => theme.shadow.normal};
      z-index: 99;
      @media ${device.tablet} {
        padding: 1vh 1vw;
      }
    `}
`;
