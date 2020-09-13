import React from "react";
import styled from "styled-components";

import Logo from "../Components/Logo";
import WelcomeBar from "../Components/WelcomeBar";
import StatBar from "../Components/StatBar";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
import { device } from "../utils/device";
import logoutIco from "../assets/svg/output.svg";

const HomeStyled = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Home = () => {
  return (
    <HomeStyled>
      <Logo />
      <WelcomeBar />
      <StatBar />
      <Link to="/login">
        <Button txt="Wyloguj się" img={logoutIco} />
      </Link>
    </HomeStyled>
  );
};

export default Home;
