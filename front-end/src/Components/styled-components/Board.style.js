import styled, { css } from "styled-components";
import { device } from "../../utils/device";

export const StyledBoard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 90vw;
  margin: 3vh auto;
  padding: 15px;
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.fontFamily.ff2};
  box-shadow: ${({ theme }) => theme.shadow.normal};
  z-index: 4;
  @media ${device.tablet} {
    max-width: 70vw;
  }
  @media ${device.laptop} {
    max-width: 50vw;
  }
  .stat-header {
    margin: 15px 0;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fontFamily.ff3};
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.large};
    color: ${({ theme }) => theme.color.primary};
  }
  .stat-bar {
    display: flex;
    flex-direction: row;
  }
  img {
    width: 15px;
    margin-right: 15px;
    color: ${({ theme }) => theme.color.primary};
  }
  .calories-img {
    width: 30px;
    border-color: ${({ theme }) => theme.color.primary};
    background-color: transparent;
  }
  ${({ gridArea }) =>
    gridArea &&
    css`
      grid-area: ${gridArea};
    `}
`;
