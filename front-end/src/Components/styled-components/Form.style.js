import styled from "styled-components";
import { device } from "../../utils/device";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: ${({ theme }) => theme.color.primary};
    font-size: ${({ theme }) => theme.fontSize.small};
    font-family: ${({ theme }) => theme.fontFamily.ff1};
  }
  .label-text {
    display: block;
    width: 40%;
    text-align: right;
    @media ${device.tablet} {
      font-size: ${({ theme }) => theme.fontSize.normal};
    }
  }
`;
