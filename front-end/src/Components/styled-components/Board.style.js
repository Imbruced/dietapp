import styled, { css } from "styled-components";
import { device } from "../../utils/device";

export const StyledBoard = styled.div`
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: #ffffff;
  color: #97bf04;
  font-family: "Courier";
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  ${({ gridArea }) =>
    gridArea &&
    css`
      grid-area: ${gridArea};
    `}
`;
