import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Components/Logo";
import SearchBar from "../../Components/SearchBar";
import { StyledBackButton } from "../../Components/styled-components/Button.style";
import { StyledTriangleBackgroundWrapper } from "../../Components/styled-components/TriangleBackgroundWrapper.style";
import { StyledBoard } from "../../Components/styled-components/Board.style";
import { StyledResult } from "../../Components/styled-components/Result.style";
import { buttonsData } from "../../utils/texts";
import { images } from "../../utils/images";

class Search extends Component {
  state = {
    value: "",
    data: [],
  };
  // const productList = data.map((product) => (
  //   <StyledResult key={product.id}>
  //     <Link to="/product">
  //       <p>{product.name}</p>
  //     </Link>
  //     <Link to="/product">
  //       <img src={images.previewIco} />
  //     </Link>
  //     <img src={images.plusIco} />
  //   </StyledResult>
  // ));
  render() {
    return (
      <>
        <Logo />
        <SearchBar
          value={this.props.value}
          changeHandler={this.props.changeHandler}
        />
        <StyledTriangleBackgroundWrapper>
          <view></view>
          {/* {this.state.value && <StyledBoard>{productList}</StyledBoard>} */}
        </StyledTriangleBackgroundWrapper>
        <Link to="/">
          <StyledBackButton>
            <img src={images.backIco} /> {buttonsData.backTxt}
          </StyledBackButton>
        </Link>
      </>
    );
  }
}

export default Search;
