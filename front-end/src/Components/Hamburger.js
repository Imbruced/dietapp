import React from "react";
import { StyledHamburger } from "./styled-components/Hamburger.style";

const Hamburger = ({ click, isOpen }) => {
  return (
    <StyledHamburger open={isOpen} onClick={click}>
      <div />
    </StyledHamburger>
  );
};

export default Hamburger;
