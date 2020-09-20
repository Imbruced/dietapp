import React from "react";

import Logo from "../../Components/Logo";

import { MyDiaryStyled } from "./Diary.style";
import { MyDiaryCard } from "./Diary.style";
import { MyDiaryCardTriangle } from "./Diary.style";

const Diary = () => {
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

export default Diary;
