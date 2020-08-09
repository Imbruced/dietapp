import React from "react";
import styled from "styled-components";

import Logo from "../Components/Logo";
import FormLogin from "../Components/Form.Login";

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
    /* line-height: 29px; */
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
