import styled from "styled-components";

export const StyledResult = styled.div`
  display: flex;
  flex-direction: row;
  a {
    max-width: 75%;
  }
  p {
    max-width: 100%;
    color: ${({ theme }) => theme.color.primary};
  }
  img {
    margin: 10px;
    color: ${({ theme }) => theme.color.primary};
  }
`;
