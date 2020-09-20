import React from "react";

import {
  ProductCardWrapperStyled,
  ProductCardStyled,
  ProductCardInfoStyled,
} from "./styled-components/ProductCard.style";

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
