import React from "react";
import styled from "styled-components";

import { device } from "../utils/device";

const ProductCardWrapperStyled = styled.section`
  display: block;
  position: relative;
  border-style: solid;
  border-width: 0 100vw 40vh 0;
  border-color: transparent #97bf04 transparent transparent;
`;

const ProductCardStyled = styled.div`
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
  @media ${device.laptop} {
    width: 65vw;
  }
`;
const ProductCardInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-bottom: 15px;
    color: #97bf04;
    text-align: center;
  }
  div {
    width: 80%;
    padding: 25px;
    border-top: 1px solid #f2f2f2;
  }
`;

const ProductCard = (props) => {
  return (
    <ProductCardWrapperStyled>
      <ProductCardStyled>
        <ProductCardInfoStyled>
          <p>Mlekpol Ser Królewski Z Kolna W Plastrach 150 G</p>
          <div>
            <p>Wartość eneretyczna: 300kcal</p>
            <p>Białko: 300kcal</p>
            <p>Węglowodany: 300kcal</p>
            <p>Tłuszcz: 300kcal</p>
            <p>Średnia cena: 300kcal</p>
          </div>
        </ProductCardInfoStyled>
      </ProductCardStyled>
    </ProductCardWrapperStyled>
  );
};

export default ProductCard;
