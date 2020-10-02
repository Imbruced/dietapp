import styled, { css } from "styled-components";
import { device } from "../../utils/device";

export const StyledSubheader = styled.h2`
  ${({ loginSubheader }) =>
    loginSubheader &&
    css`
    margin: 3vh;
    height: 5vh;
    color: ${({ theme }) => theme.color.lightGray};
    font-family: ${({ theme }) => theme.fontFamily.ff1};
    font-size: ${({ theme }) => theme.fontSize.small};
    text-align: center;
    @media ${device.tablet} {
      font-size: ${({ theme }) => theme.fontSize.xxlarge};
    }
  }
`}
  ${({ large }) =>
    large &&
    css`
      font-size: ${({ theme }) => theme.fontSize.large};
      font-weight: bold;
      margin-top: 0;
      @media ${device.tablet} {
        font-size: ${({ theme }) => theme.fontSize.xlarge};
      }
    `}
  ${({ left }) =>
    left &&
    css`
      text-align: left;
    `}
  ${({ dark }) =>
    dark &&
    css`
      color: ${({ theme }) => theme.color.black};
    `}
  ${({ normal }) =>
    normal &&
    css`
      font-weight: normal;
    `}
    ${({ diary }) =>
    diary &&
    css`
      /* margin: 0; */
      color: ${({ theme }) => theme.color.secondary};
      font-size: ${({ theme }) => theme.fontSize.normal};
    `}
`;
