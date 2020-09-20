import React from "react";

import Logo from "../../Components/Logo";
import FormRegister from "../../Components/Form.Register";

import { LoginStyled } from "./Register.style";

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
