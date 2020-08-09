import React from "react";
import styled from "styled-components";

import caloriesIco from "../assets/svg/lightning.svg";
import proteinsIco from "../assets/svg/P.svg";
import carbsIco from "../assets/svg/C.svg";
import fatsIco from "../assets/svg/F.svg";

const StatBarWrapperStyled = styled.section`
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 100vw 40vh 0;
  border-color: transparent #97bf04 transparent transparent;
`;

const StatBarStyled = styled.div`
  display: flex;
  width: 90vw;
  margin: 0 15px;
  padding: 20px;
  height: auto;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  .stat-header {
    margin: 15px 0;
    text-transform: uppercase;
    font-family: "Beirut";
    font-weight: bold;
    font-size: 23px;
    color: #97bf04;
  }
  .stat-bar {
    display: flex;
    flex-direction: row;
    img {
      width: 15px;
      margin-right: 15px;
      color: #97bf04;
    }
    .calories-img {
      width: 30px;
      border-color: #97bf04;
      background-color: transparent;
    }
    div {
    }
  }
`;

const StatBar = () => {
  return (
    <StatBarWrapperStyled>
      <StatBarStyled>
        <div className="stat-header">Dzisiejsze statystyki</div>
        <div className="stat-bar">
          <img class="calories-img" src={caloriesIco} />
          <div>0</div>
        </div>
        <div className="stat-bar">
          <img src={proteinsIco} />
          <div>0</div>
        </div>
        <div className="stat-bar">
          <img src={carbsIco} />
          <div>0</div>
        </div>
        <div className="stat-bar">
          <img src={fatsIco} />
          <div>0</div>
        </div>
      </StatBarStyled>
    </StatBarWrapperStyled>
  );
};

export default StatBar;
