import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Components/Logo";
import { images } from "../../utils/images";
import { StyledPrimaryBackgroundWrapper } from "../../Components/styled-components/PrimaryBackgroundWrapper.style";
import { StyledBackButton } from "../../Components/styled-components/Button.style";
import { StyledBoard } from "../../Components/styled-components/Board.style";
import { StyledTriangleBackgroundWrapper } from "../../Components/styled-components/TriangleBackgroundWrapper.style";
import { statBarData, buttonsData } from "../../utils/texts";

import { welcomeBarData, adviceBarData, dateBarData } from "../../utils/texts";
const adviceGenerator = adviceBarData.map((el) => (
  <p className={el.class}>{el.text}</p>
));

const Home = () => {
  return (
    <>
      <Logo />
      <StyledPrimaryBackgroundWrapper gridArea>
        <div class="welcome-slogan">
          <p>
            {welcomeBarData.welcomeSlogan} <br /> {welcomeBarData.name}!
          </p>
        </div>
        <StyledBoard gridArea="advice">{adviceGenerator}</StyledBoard>
        <div class="date">
          <p>{`${dateBarData.day} ${dateBarData.mounth}`}</p>
          <p>{`${dateBarData.year}r.`}</p>
          <p>{`${dateBarData.hour}:${dateBarData.minute}`}</p>
        </div>
      </StyledPrimaryBackgroundWrapper>
      <StyledTriangleBackgroundWrapper>
        <view></view>
        <StyledBoard>
          <div className="stat-header">{statBarData.statHeader}</div>
          <div className="stat-bar">
            <img class="calories-img" src={images.caloriesIco} />
            <div>{statBarData.kcal}</div>
          </div>
          <div className="stat-bar">
            <img src={images.proteinsIco} />
            <div>{statBarData.prots}</div>
          </div>
          <div className="stat-bar">
            <img src={images.carbsIco} />
            <div>{statBarData.carbs}</div>
          </div>
          <div className="stat-bar">
            <img src={images.fatsIco} />
            <div>{statBarData.fats}</div>
          </div>
        </StyledBoard>
      </StyledTriangleBackgroundWrapper>
      <Link to="/login">
        <StyledBackButton>
          <img src={images.logoutIco} /> {buttonsData.logoutTxt}
        </StyledBackButton>
      </Link>
    </>
  );
};

export default Home;
