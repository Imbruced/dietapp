import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../Components/Logo";
import SearchBar from "../Components/SearchBar";
import ResultList from "../Components/ResultList";
import Button from "../Components/Button";

import backIco from "../assets/svg/backIco.svg";

class Search extends Component {
  state = {
    value: "",
    data: [],
  };

  render() {
    return (
      <>
        <Logo />
        <SearchBar
          value={this.props.value}
          changeHandler={this.props.changeHandler}
        />
        <ResultList data={this.props.result} />
        <Link to="/">
          <Button txt="Wstecz" img={backIco} />
        </Link>
      </>
    );
  }
}

export default Search;
