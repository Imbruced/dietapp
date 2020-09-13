import React from "react";
import styled from "styled-components";
import { device } from "../utils/device";

import Logo from "../Components/Logo";
import FormRegister from "../Components/Form.Register";

const LoginStyled = styled.section`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background-color: #97bf04;
  .login-header {
    margin: 2vh;
    height: 5vh;
    color: #f2f2f2;
    font-family: "DIN Alternate";
    font-size: 18px;
    @media ${device.tablet} {
      font-size: 36px;
    }
  }
`;

const Register = () => {
  return (
    <>
      <Logo />
      <LoginStyled>
        <h2 class="login-header">Twój osobisty dzienniczek kalorii</h2>
        <FormRegister />
      </LoginStyled>
    </>
  );
};

export default Register;
