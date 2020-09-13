import React from "react";
import logoApp from "../assets/svg/logo.svg";
import styled from "styled-components";
import { device } from "../utils/device";

const LogoStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3vh auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  @media ${device.laptop} {
    z-index: 999;
  }
`;

const Logo = () => {
  return (
    <LogoStyled>
      <img className="logoApp" src={logoApp} />
    </LogoStyled>
  );
};

export default Logo;
