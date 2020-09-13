import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Components/Logo";
import SearchBar from "../Components/SearchBar";
import ResultList from "../Components/ResultList";
import Button from "../Components/Button";

import backIco from "../assets/svg/backIco.svg";

const SearchBarStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
`;

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
