import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../Components/Logo";
import SearchBar from "../Components/SearchBar";
import ProductCard from "../Components/ProductCard";
import Button from "../Components/Button";

import backIco from "../assets/svg/backIco.svg";

class Product extends Component {
  state = {};
  render() {
    return (
      <>
        <Logo />
        <SearchBar />
        <ProductCard />
        <Link to="/search">
          <Button txt="Wstecz" img={backIco} />
        </Link>
      </>
    );
  }
}

export default Product;
