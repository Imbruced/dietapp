import React from "react";

import Logo from "../../Components/Logo";
import FormLogin from "../../Components/Form.Login";
import { LoginStyled } from "./Login.style";

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
