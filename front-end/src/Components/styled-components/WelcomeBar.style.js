import styled from "styled-components";
import { device } from "../../utils/device";

export const WelcomeBarStyled = styled.section`
  display: grid;
  padding: 20px 20px;
  grid-auto-columns: 60% 40%;
  grid-auto-rows: auto auto;
  grid-template-areas:
    "welcome date"
    "advice advice";
  flex-direction: row;
  background-color: #97bf04;
  font-family: "DIN Alternate";
  color: #f2f2f2;
  font-size: 25px;
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
`;
