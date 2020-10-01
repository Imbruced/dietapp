import styled from "styled-components";

export const SearchBarStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
  height: 25vh;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.lightGray};
  font-family: ${({ theme }) => theme.fontFamily.ff1};
  font-size: ${({ theme }) => theme.fontSize.large};
  line-height: 29px;
  width: 100%;
`;
