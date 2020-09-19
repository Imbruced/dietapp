import React from "react";
import styled from "styled-components";
import { device } from "../utils/device";

import Logo from "../Components/Logo";

const MyDiaryStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #97bf04;
  height: 30vh;
`;
const MyDiaryCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vh 5vw;
  width: 90vw;
  background-color: #ffffff;
  padding: 15px 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  @media ${device.laptop} {
    width: 65vw;
  }
`;
const MyDiaryCardTriangle = styled.section`
  display: block;
  position: relative;
  border-style: solid;
  border-width: 0 100vw 40vh 0;
  border-color: transparent #97bf04 transparent transparent;
`;
const MyDiary = () => {
  return (
    <>
      <Logo />
      <MyDiaryStyled>
        <MyDiaryCard>
          <p>hej</p>
        </MyDiaryCard>
      </MyDiaryStyled>
      <MyDiaryCardTriangle></MyDiaryCardTriangle>
    </>
  );
};

export default MyDiary;
