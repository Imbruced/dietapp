import React from "react";
import Logo from "../../Components/Logo";
import WelcomeBar from "../../Components/WelcomeBar";
import StatBar from "../../Components/StatBar";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import logoutIco from "../../assets/svg/output.svg";

import { HomeStyled } from "./Home.style";

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
