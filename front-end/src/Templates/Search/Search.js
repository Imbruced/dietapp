import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Components/Logo";
import SearchBar from "../../Components/SearchBar";
import ResultList from "../../Components/ResultList";
import Button from "../../Components/Button";

import backIco from "../../assets/svg/backIco.svg";
import { SearchBarStyled } from "./Search.style";

class Search extends Component {
  state = {
    value: "",
    data: [],
  };

  render() {
    return (
      <SearchBarStyled>
        <Logo />
        <SearchBar
          value={this.props.value}
          changeHandler={this.props.changeHandler}
        />
        <ResultList data={this.props.result} />
        <Link to="/">
          <Button txt="Wstecz" img={backIco} />
        </Link>
      </SearchBarStyled>
    );
  }
}

export default Search;
