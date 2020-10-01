import React from "react";
import Logo from "../../Components/Logo";
import FormLogin from "../../Components/Form.Login";
import { StyledPrimaryBackgroundWrapper } from "../../Components/styled-components/PrimaryBackgroundWrapper.style";
import { StyledSubheader } from "../../Components/styled-components/Subheader.style";
import { subheadersData } from "../../utils/texts";

const Login = () => {
  return (
    <>
      <Logo />
      <StyledPrimaryBackgroundWrapper>
        <StyledSubheader loginSubheader>
          {subheadersData.loginHeader}
        </StyledSubheader>
        <FormLogin />
      </StyledPrimaryBackgroundWrapper>
    </>
  );
};

export default Login;
