import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.color.lightGray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4vh;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  font-family: ${({ theme }) => theme.color.ff1};
  color: ${({ theme }) => theme.color.gray};
`;
