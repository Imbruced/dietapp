import React from "react";
import styled from "styled-components";
import { device } from "../utils/device";

import caloriesIco from "../assets/svg/lightning.svg";
import proteinsIco from "../assets/svg/P.svg";
import carbsIco from "../assets/svg/C.svg";
import fatsIco from "../assets/svg/F.svg";

const StatBarWrapperStyled = styled.section`
  position: relative;
  display: flex;
  align-content: center;
  view {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    z-index: 1;
    border-style: solid;
    border-width: 0 100vw 40vh 0;
    border-color: transparent #97bf04 transparent transparent;
    @media ${device.laptop} {
      border-width: 0 75vw 40vh 0;
    }
  }
`;

const StatBarStyled = styled.div`
  display: flex;
  width: 90vw;
  margin: 3vh auto;
  padding: 20px;
  z-index: 4;
  height: auto;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  @media ${device.tablet} {
    max-width: 70vw;
  }
  @media ${device.laptop} {
    max-width: 50vw;
  }
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
  }
`;

const StatBar = () => {
  return (
    <StatBarWrapperStyled>
      <view></view>
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
