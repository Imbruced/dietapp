import React from "react";
import logoApp from "../assets/svg/logo.svg";
import styled from "styled-components";

const LogoStyled = styled.div`
  display: flex;
  margin: 3vh auto;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Logo = () => {
  return (
    <LogoStyled>
      <img className="logoApp" src={logoApp} />
    </LogoStyled>
  );
};

export default Logo;
