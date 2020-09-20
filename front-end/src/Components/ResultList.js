import React from "react";
import { Link } from "react-router-dom";

import previewIco from "../assets/svg/previewIco.svg";
import plusIco from "../assets/svg/plusIco.svg";

import {
  ResultListWrapperStyled,
  ResultListStyled,
  ResultStyled,
} from "./styled-components/ResultList.style";

const ResultList = ({ data }) => {
  const productList = data.map((product) => (
    <ResultStyled key={product.id}>
      <Link to="/product">
        <p>{product.name}</p>
      </Link>
      <Link to="/product">
        <img src={previewIco} />
      </Link>
      <img src={plusIco} />
    </ResultStyled>
  ));
  return (
    <ResultListWrapperStyled>
      <ResultListStyled>{productList}</ResultListStyled>
    </ResultListWrapperStyled>
  );
};

export default ResultList;
