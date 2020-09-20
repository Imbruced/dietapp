import React from "react";
import { StyledBackButton } from "./styled-components/Buttons.style";

const Button = ({ txt, img }) => {
  return (
    <StyledBackButton className="button">
      <div>
        <img src={img} />
        {txt}
      </div>
    </StyledBackButton>
  );
};

export default Button;
