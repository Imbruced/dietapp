import React from "react";
import { Link } from "react-router-dom";
import { StyledBoard } from "./styled-components/Board.style";
import { StyledProductCard } from "./styled-components/ProductCard.style";
import { images } from "../utils/images";

const ProductCard = (props) => {
  return (
    <StyledBoard>
      <StyledProductCard>
        <p>Mlekpol Ser Królewski Z Kolna W Plastrach 150 G</p>
        <div>
          <p>Wartość eneretyczna: 300kcal</p>
          <p>Białko: 300kcal</p>
          <p>Węglowodany: 300kcal</p>
          <p>Tłuszcz: 300kcal</p>
          <p>Średnia cena: 300kcal</p>
        </div>
        <div>
          <Link to="/product">
            <img src={images.previewIco} />
          </Link>
          <img src={images.plusIco} />
        </div>
      </StyledProductCard>
    </StyledBoard>
  );
};

export default ProductCard;
