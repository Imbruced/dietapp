import React from "react";
import { StyledBoard } from "./styled-components/Board.style";

const Board = ({ gridArea, children }) => {
  const txtGenerator = children.map((el) => (
    <p className={el.class}>{el.text}</p>
  ));
  return (
    <StyledBoard gridArea={gridArea}>
      <p>{txtGenerator}</p>
    </StyledBoard>
  );
};

export default Board;
