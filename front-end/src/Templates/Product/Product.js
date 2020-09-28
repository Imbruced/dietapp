import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Components/Logo";
import SearchBar from "../../Components/SearchBar";
import ProductCard from "../../Components/ProductCard";
import { StyledBackButton } from "../../Components/styled-components/Button.style";
import { StyledPrimaryBackgroundWrapper } from "../../Components/styled-components/PrimaryBackgroundWrapper.style";
import { StyledTriangleBackgroundWrapper } from "../../Components/styled-components/TriangleBackgroundWrapper.style";

import { images } from "../../utils/images";
import { buttonsData } from "../../utils/texts";

class Product extends Component {
  state = {};
  render() {
    return (
      <>
        <Logo />
        <StyledPrimaryBackgroundWrapper>
          <SearchBar />
        </StyledPrimaryBackgroundWrapper>
        <StyledTriangleBackgroundWrapper>
          <view></view>
          <ProductCard props={this.props} />
        </StyledTriangleBackgroundWrapper>
        <Link to="/search">
          <StyledBackButton>
            <img src={images.backIco} alt={buttonsData.backTxt} />{" "}
            {buttonsData.backTxt}
          </StyledBackButton>
        </Link>
      </>
    );
  }
}

export default Product;
