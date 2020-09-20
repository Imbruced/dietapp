import React from "react";
import { WelcomeBarStyled } from "./styled-components/WelcomeBar.style";
import Board from "./Board";

const welcomeBarData = {
  welcomeBar: ["Witaj,", "Banser"],
  adviceBar: [
    { class: "advice-header", text: "Porada na dzisiaj" },
    { class: "advice-text", text: "Pij dwie szklanki wody" },
  ],
  dateBar: [15, "czerwiec", 2020, 12, 34],
};
const WelcomeBar = () => {
  return (
    <WelcomeBarStyled>
      <div class="welcome-slogan">
        <p>
          Witaj, <br /> Banser!
        </p>
      </div>
      <Board gridArea="advice" children={welcomeBarData.adviceBar} />
      <div class="date">
        <p>15 czerwiec</p>
        <p>2020r. </p>
        <p>12:12</p>
      </div>
    </WelcomeBarStyled>
  );
};

export default WelcomeBar;
