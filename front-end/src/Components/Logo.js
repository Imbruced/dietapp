import React from "react";
import logoApp from "../assets/svg/logo.svg";

import { LogoStyled } from "./styled-components/Logo.style";

const Logo = () => {
  return (
    <LogoStyled>
      <img className="logoApp" src={logoApp} />
    </LogoStyled>
  );
};

export default Logo;
