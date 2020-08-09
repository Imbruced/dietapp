import React from "react";
import styled from "styled-components";

const ButtonWrapperStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const ButtonStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  font-size: 20px;
  font-family: "Beirut";
  color: #707070;
  img {
    display: block;
    margin: 5px;
    width: 32px;
    height: 32px;
  }
`;

const Button = ({ txt, img }) => {
  return (
    <ButtonWrapperStyled>
      <ButtonStyled className="button">
        <img src={img} />
        {txt}
      </ButtonStyled>
    </ButtonWrapperStyled>
  );
};

export default Button;
