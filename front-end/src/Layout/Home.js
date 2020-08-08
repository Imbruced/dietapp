import React from "react";

import Logo from "../Components/Logo";
import WelcomeBar from "../Components/WelcomeBar";
import StatBar from "../Components/StatBar";
import Button from "../Components/Button";
import Menu from "../Components/Menu";
import Hamburger from "../Components/Hamburger";

import logoutIco from "../assets/svg/output.svg";

const Home = ({ click, isOpen }) => {
  return (
    <>
      {/* <Hamburger click={click} isOpen={isOpen} /> */}
      {/* <Menu click={click} isOpen={isOpen} /> */}
      <Logo />
      <WelcomeBar />
      <StatBar />

      <Button txt="Wyloguj się" img={logoutIco} />
    </>
  );
};

export default Home;
