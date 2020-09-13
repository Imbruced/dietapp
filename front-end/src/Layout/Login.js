import React from "react";
import styled from "styled-components";

import Logo from "../Components/Logo";
import FormLogin from "../Components/Form.Login";

import { device } from "../utils/device";

const LoginStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #97bf04;
  .login-header {
    margin: 3vh;
    height: 5vh;
    color: #f2f2f2;
    font-family: "DIN Alternate";
    font-size: 18px;
    @media ${device.tablet} {
      font-size: 36px;
    }
  }
`;

const Login = () => {
  return (
    <>
      <Logo />
      <LoginStyled>
        <h2 class="login-header">Twój osobisty dzienniczek kalorii</h2>
        <FormLogin />
      </LoginStyled>
    </>
  );
};

export default Login;
