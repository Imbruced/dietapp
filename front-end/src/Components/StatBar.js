import React from "react";
import styled from "styled-components";
import { device } from "../utils/device";

import caloriesIco from "../assets/svg/lightning.svg";
import proteinsIco from "../assets/svg/P.svg";
import carbsIco from "../assets/svg/C.svg";
import fatsIco from "../assets/svg/F.svg";

import {
  StatBarWrapperStyled,
  StatBarStyled,
} from "./styled-components/StatBar.style";

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
