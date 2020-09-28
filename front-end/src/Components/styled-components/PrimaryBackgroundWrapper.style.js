import styled, { css } from "styled-components";
import { device } from "../../utils/device";

export const StyledPrimaryBackgroundWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 15vh;
  padding: 20px 20px;
  background-color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.fontFamily.ff1};
  color: ${({ theme }) => theme.color.lightGray};
  font-size: ${({ theme }) => theme.fontSize.large};
  line-height: 29px;
  @media ${device.tablet} {
    padding: 20px 15vw;
  }
  .welcome-slogan {
    grid-area: welcome;
    margin: 0;
  }
  .date {
    grid-area: date;
  }
  ${({ gridArea }) =>
    gridArea &&
    css`
      display: grid;
      grid-auto-columns: 60% 40%;
      grid-auto-rows: auto auto;
      grid-template-areas:
        "welcome date"
        "advice advice";
    `}
`;
