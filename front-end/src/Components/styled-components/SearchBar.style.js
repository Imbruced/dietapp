import styled from "styled-components";
import { device } from "../../utils/device";

export const SearchBarStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
  height: 25vh;
  background-color: #97bf04;
  color: #f2f2f2;
  font-family: "DIN Alternate";
  font-size: 25px;
  line-height: 29px;
  width: 100%;

  input {
    padding: 10px;
    width: 75vw;
    max-width: 500px;
    border: none;
    border-radius: 10px;
    color: #97bf04;
    font-family: "Courier";
    @media ${device.laptop} {
      width: 50vw;
    }
  }
  input::placeholder {
    color: #c7c7c7;
  }
`;
