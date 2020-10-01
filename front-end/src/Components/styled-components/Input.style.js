import styled from "styled-components";
import { device } from "../../utils/device";

export const StyledInput = styled.input`
  padding: 10px;
  margin: 10px;
  width: ${(props) => (props.loginInput ? "100%" : "75vw")};
  max-width: 500px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.fontFamily.ff2};
  transition: 0.3s;
  box-shadow: ${({ theme }) => theme.shadow.normal};
  :focus {
    box-shadow: ${({ theme }) => theme.shadow.focus};
  }
  ::placeholder {
    color: ${({ theme }) => theme.color.gray};
  }
  &[type="submit"] {
    margin: 20px auto;
  }
  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
  @media ${device.laptop} {
    width: 50vw;
  }
`;
