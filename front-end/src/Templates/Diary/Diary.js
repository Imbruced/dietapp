import React from "react";
import Logo from "../../Components/Logo";
import { StyledBoard } from "../../Components/styled-components/Board.style";
import { StyledPrimaryBackgroundWrapper } from "../../Components/styled-components/PrimaryBackgroundWrapper.style";
import { StyledTriangleBackgroundWrapper } from "../../Components/styled-components/TriangleBackgroundWrapper.style";
import { StyledSubheader } from "../../Components/styled-components/Subheader.style";
const Diary = () => {
  return (
    <>
      <Logo />
      <StyledPrimaryBackgroundWrapper>
        <StyledSubheader diary>ŚNIADANIE</StyledSubheader>
        <StyledBoard></StyledBoard>
      </StyledPrimaryBackgroundWrapper>
      <StyledTriangleBackgroundWrapper>
        <view></view>
      </StyledTriangleBackgroundWrapper>
    </>
  );
};

export default Diary;
