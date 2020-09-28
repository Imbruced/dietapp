import styled from "styled-components";

export const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-bottom: 15px;
    color: ${({ theme }) => theme.color.primary};
    text-align: center;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    padding: 25px;
    border-top: 1px solid ${({ theme }) => theme.color.lightGray};
  }
`;
