import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
  background-color: #f2f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4vh;
  text-align: center;
  font-size: 12px;
  font-family: sans-serif;
  color: #707070;
`;

const Footer = () => {
  return <FooterStyled>© Kociński&Sroka</FooterStyled>;
};

export default Footer;
