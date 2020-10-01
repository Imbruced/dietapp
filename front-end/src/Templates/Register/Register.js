import React from "react";
import Logo from "../../Components/Logo";
import FormRegister from "../../Components/Form.Register";
import { StyledPrimaryBackgroundWrapper } from "../../Components/styled-components/PrimaryBackgroundWrapper.style";
import { StyledSubheader } from "../../Components/styled-components/Subheader.style";
import { subheadersData } from "../../utils/texts";
const Register = () => {
  return (
    <>
      <Logo />
      <StyledPrimaryBackgroundWrapper>
        <StyledSubheader loginSubheader>
          {subheadersData.loginHeader}
        </StyledSubheader>
        <FormRegister />
      </StyledPrimaryBackgroundWrapper>
    </>
  );
};

export default Register;
