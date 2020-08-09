import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import previewIco from "../assets/svg/previewIco.svg";
import plusIco from "../assets/svg/plusIco.svg";

const ResultListWrapperStyled = styled.section`
  display: block;
  position: relative;
  border-style: solid;
  border-width: 0 100vw 40vh 0;
  border-color: transparent #97bf04 transparent transparent;
`;

const ResultListStyled = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: -10vh;
  margin: 0 5vw;
  width: 90vw;
  background-color: #ffffff;
  padding: 15px 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`;
const ResultStyled = styled.div`
  display: flex;
  flex-direction: row;
  a {
    max-width: 75%;
  }
  p {
    max-width: 100%;
    color: #97bf04;
  }
  img {
    margin: 10px;
    color: #97bf04;
  }
`;

const ResultList = () => {
  return (
    <ResultListWrapperStyled>
      <ResultListStyled>
        <ResultStyled>
          <Link to="/product">
            <p>Mlekpol Ser Królewski Z Kolna W Plastrach 150 G</p>
          </Link>
          <Link to="/product">
            <img src={previewIco} />
          </Link>
          <img src={plusIco} />
        </ResultStyled>
      </ResultListStyled>
    </ResultListWrapperStyled>
  );
};

export default ResultList;
