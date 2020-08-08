import React from "react";
import styled from "styled-components";

const WelcomeBarStyled = styled.section`
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
  .welcome-slogan {
    grid-area: welcome;
    margin: 0;
  }
  .date {
    grid-area: date;
  }

  .advice {
    grid-area: advice;
    margin-top: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: #ffffff;
    color: #97bf04;
    font-family: "Courier";
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  }
  .advice-header {
    font-size: 15px;
  }
  .advice-text {
    margin-left: 15px;
    font-size: 20px;
  }
`;

const WelcomeBar = () => {
  return (
    <WelcomeBarStyled>
      <div class="welcome-slogan">
        <p>
          Witaj, <br /> Banser!
        </p>
      </div>
      <div class="advice">
        <p class="advice-header">Porada na dzisiaj: </p>
        <p class="advice-text">Jedz mało a często</p>
      </div>
      <div class="date">
        <p>15 czerwiec</p>
        <p>2020r. </p>
        <p>12:12</p>
      </div>
    </WelcomeBarStyled>
  );
};

export default WelcomeBar;
